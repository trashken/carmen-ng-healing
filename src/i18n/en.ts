export default {
  code: 'en',
  htmlLang: 'en',
  label: 'English',

  meta: {
    siteName: 'Carmen Ng Healing',
    defaultDescription:
      'Holistic healing and wellness with Carmen Ng — energy healing, sound therapy, and spiritual guidance.',
    homeTitle: 'Home',
  },

  nav: {
    home: 'Home',
    blog: 'Blog',
    about: 'About',
    events: 'Events',
    testimonials: 'Testimonials',
    contact: 'Contact',
    bookSession: 'Book a Session',
  },

  footer: {
    tagline:
      'Holistic healing through energy work, sound therapy, and spiritual guidance. Reconnect with your inner harmony.',
    explore: 'Explore',
    newsletter: 'Newsletter',
    newsletterCopy:
      'Stay connected with the latest insights and healing practices.',
    newsletterPlaceholder: 'Your email',
    newsletterSubmit: 'Subscribe',
    copyright: (year: number) =>
      `© ${year} Carmen Ng Healing. All rights reserved.`,
  },

  disclaimer:
    'For legal purposes: Carmen is not a licensed physician. Healing and medicine are distinct disciplines. Please see your doctor for health concerns.',

  switcher: {
    label: 'Language',
    skipToContent: 'Skip to content',
  },

  events: {
    heading: 'Events & Workshops',
    subtitle:
      'Group sessions, workshops, and special gatherings. Click an event for full details.',
    past: 'Past',
    upcoming: 'Upcoming',
    noEvents: 'No events yet — check back soon.',
    register: 'Register',
    registerCta: 'Register for this event',
    details: 'Details',
    location: 'Location',
    date: 'Date',
    moreInfo: 'More info',
  },

  home: {
    nav: {
      services: 'Services',
      stories: 'Stories',
      story: 'My Story',
      contact: 'Contact',
    },
    hero: {
      welcome: '',
      title: 'Carmen Ng',
      titleKana: '',
      tagline: 'Holistic Healing',
      description:
        'A sacred space to transmute resistance into flow, return to the heart, and reveal the gold within you.',
      bookSession: 'Book a Session',
      exploreServices: 'Explore Services',
    },
    services: {
      eyebrow: 'Services',
      title: 'Services',
      subtitle:
        'I offer a range of modalities to support your path to wellness — each session is tailored to your unique energy and intentions.',
    },
    info: {
      eyebrow: 'Information',
      title: 'Information',
      sub: 'お知らせ',
      tabNews: 'NEWS',
      tabBlogs: 'BLOGS',
      moreNews: 'More News →',
      moreBlogs: 'More Articles →',
    },
    testimonials: {
      eyebrow: 'What Clients Say',
      title: 'What Clients Say',
      sub: 'お客様の声',
    },
    story: {
      eyebrow: 'My Story',
      title: 'My Story',
      sub: '私の物語',
      certEyebrow: 'Trained in',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact',
      sub: 'お問い合わせ',
      email: 'hello@carmennghealing.com',
      ctaCopy:
        'Ready to begin your healing journey? Book a session or schedule a free 15-minute consultation to explore how we might work together.',
      bookSession: 'Book a Session',
      moreInfo: 'More info',
    },
    faqs: {
      title: 'Q & A',
      empty: 'No questions yet — check back soon.',
    },
  },
} as const;

export type Dictionary = typeof import('./en').default;
