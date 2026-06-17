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
} as const;

export type Dictionary = typeof import('./en').default;
