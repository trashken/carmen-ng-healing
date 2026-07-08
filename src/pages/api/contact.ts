/// <reference types="astro/client" />

import type { APIRoute } from 'astro';

export const prerender = false;

type RuntimeEnv = {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_ADDRESS?: string;
};

type PagesRuntime = { runtime?: { env?: RuntimeEnv } };

const getEnv = (locals: unknown): RuntimeEnv =>
  (locals as PagesRuntime)?.runtime?.env ?? {};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const validate = (data: FormData):
  | { ok: true; firstName: string; lastName: string; email: string; message: string; turnstileToken: string }
  | { ok: false; error: string } => {
  const firstName = (data.get('firstName') ?? '').toString().trim();
  const lastName = (data.get('lastName') ?? '').toString().trim();
  const email = (data.get('email') ?? '').toString().trim();
  const message = (data.get('message') ?? '').toString().trim();
  const turnstileToken = (data.get('cf-turnstile-response') ?? '').toString().trim();

  if (!firstName || !lastName || !email || !message) {
    return { ok: false, error: 'All fields are required.' };
  }
  if (firstName.length > 100 || lastName.length > 100) {
    return { ok: false, error: 'Name is too long.' };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 254) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (message.length > 5000) {
    return { ok: false, error: 'Message is too long (max 5000 characters).' };
  }
  return { ok: true, firstName, lastName, email, message, turnstileToken };
};

const verifyTurnstile = async (token: string, secret: string, remoteIp?: string): Promise<boolean> => {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
};

const sendViaResend = async (
  args: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  },
  apiKey: string,
  toEmail: string,
  fromAddress: string,
): Promise<{ ok: true } | { ok: false; error: string }> => {
  const subject = `New contact form submission from ${args.firstName} ${args.lastName}`;
  const text = [
    `From: ${args.firstName} ${args.lastName} <${args.email}>`,
    '',
    args.message,
  ].join('\n');
  const html = `
    <p><strong>From:</strong> ${escapeHtml(args.firstName)} ${escapeHtml(args.lastName)} &lt;${escapeHtml(args.email)}&gt;</p>
    <hr />
    <p style="white-space: pre-line;">${escapeHtml(args.message)}</p>
  `;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [toEmail],
      reply_to: args.email,
      subject,
      text,
      html,
    }),
  });
  if (!res.ok) {
    const errBody = await res.text();
    return { ok: false, error: `Resend ${res.status}: ${errBody}` };
  }
  return { ok: true };
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = getEnv(locals);

  if (!env.RESEND_API_KEY) {
    return json({ error: 'Server is not configured to send email (missing RESEND_API_KEY).' }, 500);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: 'Invalid form submission.' }, 400);
  }

  const v = validate(formData);
  if (!v.ok) return json({ error: v.error }, 400);

  if (env.TURNSTILE_SECRET) {
    if (!v.turnstileToken) {
      return json({ error: 'Please complete the spam check.' }, 400);
    }
    const remoteIp = request.headers.get('CF-Connecting-IP') ?? undefined;
    const ok = await verifyTurnstile(v.turnstileToken, env.TURNSTILE_SECRET, remoteIp);
    if (!ok) return json({ error: 'Spam check failed. Please try again.' }, 400);
  }

  const toEmail = env.CONTACT_TO_EMAIL ?? 'hello@carmennghealing.com';
  const fromAddress = env.CONTACT_FROM_ADDRESS ?? 'Carmen Ng Healing <noreply@carmennghealing.com>';

  const result = await sendViaResend(
    { firstName: v.firstName, lastName: v.lastName, email: v.email, message: v.message },
    env.RESEND_API_KEY,
    toEmail,
    fromAddress,
  );
  if (!result.ok) {
    console.error('Contact form: Resend send failed:', result.error);
    return json({ error: 'Could not send your message right now. Please email us directly.' }, 502);
  }

  return json({ ok: true });
};
