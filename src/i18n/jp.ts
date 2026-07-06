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
    about: 'プロフィール',
    events: 'イベント',
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

  events: {
    heading: 'イベント・ワークショップ',
    subtitle:
      'グループセッション、ワークショップ、特別イベント。クリックで詳細を表示します。',
    past: '終了',
    upcoming: '開催予定',
    noEvents: '現在予定されているイベントはありません。',
    register: 'お申し込み',
    registerCta: 'このイベントに申し込む',
    details: '詳細',
    location: '場所',
    date: '日時',
    moreInfo: '詳細を見る',
  },

  home: {
    nav: {
      services: 'セッション',
      stories: 'ご感想',
      story: '私の物語',
      contact: 'お問い合わせ',
    },
    hero: {
      welcome: '',
      title: 'Carmen Ng',
      titleKana: '',
      tagline: 'ホリスティック・ヒーリング',
      description:
        '心のモヤモヤをすっきりさせ、自分らしさと落ち着きを取り戻すための聖域をご案内します。',
      bookSession: 'セッションを予約',
      exploreServices: 'セッションを見る',
    },
    services: {
      eyebrow: '提供内容',
      title: 'セッション',
      subtitle:
        'あなたの歩み・エネルギー・意図に合わせてカスタマイズされた、多彩な癒しのメソッドをご用意しています。',
    },
    info: {
      eyebrow: 'お知らせ',
      title: 'Information',
      sub: 'お知らせ',
      tabNews: 'ニュース',
      tabBlogs: 'ブログ',
      moreNews: '一覧を見る →',
      moreBlogs: 'ブログ一覧 →',
    },
    testimonials: {
      eyebrow: 'お客様の声',
      title: 'お客様の声',
      sub: 'お客様の声',
    },
    story: {
      eyebrow: '私の物語',
      title: 'My Story',
      sub: '私の物語',
      certEyebrow: '修得した伝統',
    },
    contact: {
      eyebrow: 'お問い合わせ',
      title: 'Contact',
      sub: 'お問い合わせ',
      email: 'hello@carmennghealing.com',
      ctaCopy:
        '癒しの旅を始める準備はできていますか?セッションのご予約、または 15 分の無料カウンセリングで、ご一緒に歩む方法を探ってみませんか。',
      bookSession: 'セッションを予約',
      moreInfo: '詳しく見る',
    },
    faqs: {
      title: 'Q & A',
      empty: '質問はまだありません。',
    },
  },
} as const;
