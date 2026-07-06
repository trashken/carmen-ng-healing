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
    events: '活動',
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

  events: {
    heading: '活動・工作坊',
    subtitle: '團體療癒、工作坊與特別聚會。點擊活動以查看詳情。',
    past: '已結束',
    upcoming: '即將舉行',
    noEvents: '目前沒有活動，請稍後再查看。',
    register: '立即報名',
    registerCta: '報名此活動',
    details: '詳情',
    location: '地點',
    date: '日期',
    moreInfo: '了解更多',
  },

  home: {
    nav: {
      services: '服務',
      stories: '客戶分享',
      story: '我的故事',
      contact: '聯絡',
    },
    hero: {
      welcome: '',
      title: 'Carmen Ng',
      titleKana: '',
      tagline: '整體療癒',
      description:
        '一個神聖的空間協助您淨化及轉化能量，讓您回歸真正的自己，喚起內在的黃金寶庫。',
      bookSession: '預約療程',
      exploreServices: '了解服務',
    },
    services: {
      eyebrow: '服務',
      title: '服務',
      subtitle:
        '我提供多樣化的療癒形式，根據您當下的能量狀態與意圖量身調整，陪伴您走向身心安康。',
    },
    info: {
      eyebrow: '最新資訊',
      title: 'Information',
      sub: '最新資訊',
      tabNews: '最新消息',
      tabBlogs: '網誌',
      moreNews: '更多消息 →',
      moreBlogs: '更多網誌 →',
    },
    testimonials: {
      eyebrow: '客戶分享',
      title: '客戶分享',
      sub: '客戶分享',
    },
    story: {
      eyebrow: '我的故事',
      title: 'My Story',
      sub: '我的故事',
      certEyebrow: '修習傳承',
    },
    contact: {
      eyebrow: '聯絡',
      title: 'Contact',
      sub: '聯絡',
      email: 'hello@carmennghealing.com',
      ctaCopy:
        '準備好開啟您的療癒之旅了嗎?歡迎預約療程，或先安排 15 分鐘的免費諮詢，一起探索最適合您的方向。',
      bookSession: '預約療程',
      moreInfo: '了解更多',
    },
    faqs: {
      title: '常見問題',
      empty: '暫無問題，請稍後再查看。',
    },
  },
} as const;
