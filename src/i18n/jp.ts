export default {
  code: 'jp',
  htmlLang: 'ja',
  label: '日本語',

  meta: {
    siteName: 'Carmen Ng Healing',
    defaultDescription:
      'カーメンによるホリスティック・ヒーリングとウェルネス — エネルギーヒーリング、音響療法、スピリチュアル・ガイダンス。',
    homeTitle: 'ホーム',
  },

  nav: {
    home: 'ホーム',
    blog: 'ブログ',
    testimonials: 'お客様の声',
    contact: 'お問い合わせ',
    bookSession: 'セッションを予約',
  },

  footer: {
    tagline:
      'エネルギー Healing、サウンドセラピー、スピリチュアル・ガイダンスを通じたホリスティック・ヒーリング。内なる調和との再会を。',
    explore: 'サイト内',
    newsletter: 'ニュースレター',
    newsletterCopy:
      '最新のインサイトやヒーリングの実践をお届けするニュースレター。',
    newsletterPlaceholder: 'メールアドレス',
    newsletterSubmit: '登録する',
    copyright: (year: number) =>
      `© ${year} Carmen Ng Healing. 無断複写・転載を禁じます。`,
  },

  disclaimer:
    '法的目的について：カーメンは公的資格を持つ医師ではありません。ヒーリングと医療は異なる分野です。健康上の懸念については医師にご相談ください。',

  switcher: {
    label: '言語',
    skipToContent: '本文へスキップ',
  },
} as const;
