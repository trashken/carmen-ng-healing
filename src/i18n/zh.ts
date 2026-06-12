export default {
  code: 'zh',
  htmlLang: 'zh-Hant',
  label: '中文',

  meta: {
    siteName: 'Carmen Ng Healing',
    defaultDescription:
      '與 Carmen Ng 一起進行整體療癒與身心調養 — 能量療癒、聲音療法與靈性指引。',
    homeTitle: '首頁',
  },

  nav: {
    home: '首頁',
    blog: '網誌',
    about: '關於我',
    testimonials: '客戶分享',
    contact: '聯絡',
    bookSession: '預約療程',
  },

  footer: {
    tagline:
      '透過能量療癒、聲音療法與靈性指引，進行整體療癒。與內在的和諧重新連結。',
    explore: '瀏覽',
    newsletter: '電子報',
    newsletterCopy: '與最新的療癒洞察和實踐保持連結。',
    newsletterPlaceholder: '您的電郵',
    newsletterSubmit: '訂閱',
    copyright: (year: number) =>
      `© ${year} Carmen Ng Healing. 版權所有，請勿擅自轉載。`,
  },

  disclaimer:
    '法律聲明：本人並非持牌醫師。療癒與醫學是不同的專業範疇。如有健康疑慮，請諮詢您的醫生。',

  switcher: {
    label: '語言',
    skipToContent: '跳至主要內容',
  },
} as const;
