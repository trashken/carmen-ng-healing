/**
 * Tiny inline Markdown -> HTML converter used by ServiceDetail.astro to
 * render the `body` frontmatter field. Handles the subset Carmen needs
 * to write her own service detail formatting:
 *   - `## Heading` and `### Heading` -> <h2>/<h3>
 *   - Paragraphs separated by blank lines
 *   - `**bold**` and `*italic*` -> <strong>/<em>
 *   - `- list item` (one level of nesting) -> <ul><li>
 *
 * HTML special characters are escaped first to prevent XSS via the
 * frontmatter field.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function applyInline(s: string): string {
  let out = escapeHtml(s);
  // **bold** -> <strong>...</strong>
  out = out.replace(/\*\*([^*\n][^*\n]*?)\*\*/g, '<strong>$1</strong>');
  // *italic* -> <em>...</em>  (single asterisks, not adjacent to other *)
  out = out.replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>');
  return out;
}

export function renderInlineMarkdown(md: string): string {
  if (!md) return '';
  const lines = md.split('\n');
  const out: string[] = [];
  let inList = false;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = applyInline(paragraph.join(' ').trim());
    if (text) out.push(`<p>${text}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line === '') {
      flushParagraph();
      closeList();
      continue;
    }
    const h3 = /^###\s+(.+)$/.exec(line);
    if (h3) {
      flushParagraph();
      closeList();
      out.push(`<h3>${applyInline(h3[1])}</h3>`);
      continue;
    }
    const h2 = /^##\s+(.+)$/.exec(line);
    if (h2) {
      flushParagraph();
      closeList();
      out.push(`<h2>${applyInline(h2[1])}</h2>`);
      continue;
    }
    const li = /^[-*]\s+(.+)$/.exec(line);
    if (li) {
      flushParagraph();
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${applyInline(li[1])}</li>`);
      continue;
    }
    closeList();
    paragraph.push(line);
  }
  flushParagraph();
  closeList();
  return out.join('\n');
}
