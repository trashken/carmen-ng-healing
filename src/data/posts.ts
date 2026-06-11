// Content migrated from the live Wix blog at carmennghealing.com.
// JP is the original prose Carmen wrote; EN is present only on posts that
// included a bilingual "*** original English text ***" section; ZH is
// intentionally null across the board (Carmen will provide these).
// `video` flags the single post (Kwanon & Canon) whose cover is an mp4.

export interface PostBody {
  jp: string;
  en: string | null;
  zh: string | null;
}

export interface Post {
  slug: string;
  title: { jp: string; en: string | null; zh: string | null };
  date: string; // ISO yyyy-mm-dd
  category: 'article' | 'news';
  cover?: string; // path under /uploads/ when present
  video?: string; // path under /videos/ when present
  body: PostBody;
}

export const posts: Post[] = [
  {
    slug: 'ghibli-paper-fortune',
    title: {
      jp: 'ジブリおみくじ Ghibli Paper Fortune',
      en: 'Ghibli Paper Fortune',
      zh: null,
    },
    date: '2026-06-09',
    category: 'article',
    cover: '/uploads/ghibli-paper-fortune.jpg',
    body: {
      jp: `先週、ジブリ美術館に行ってきました。実は今回で2回目です。初めて行ったのはもう20年ほど前のことで、館内がどんな様子だったかほとんど忘れてしまっていました。でも、一歩足を踏み入れると当時の記憶がゆっくりと蘇ってきて……そしてもちろん、あの大きなネコバスのぬいぐるみも健在でした！

今回一番印象に残ったのは、入場チケットです。受付で、一人ひとりに映画のフィルムの切れ端のようなチケットが配られます。その時は、そこに何のシーンが写っているのか分かりませんでした。ただ見ただけでは、コマの絵が小さすぎて暗かったからです。館内には、そのフィルムを差し込むとスクリーンに映像が投影される機械がありました。

その映像を見た瞬間、思わず笑ってしまいそうになりました！ 私にとって、それはまるで神社で引く「おみくじ」のようだったからです。写っていたのは、最近私がよく夢に見るイメージにそっくりな景色でした。ここ最近の私の夢のテーマは「コミュニティ」「船」「航海」なのですが、航海にまつわることには、すべて深いスピリチュアルな意味（アセンション、進化、そして意識）があると思っています。

このシンクロニシティ（意味のある偶然の一致）と、天からの「ようこそ」というメッセージに、心から感謝の気持ちでいっぱいになりました。なんて愛に溢れた素晴らしいサプライズでしょう！

面白いことに、一緒に行った友人がランダムでもらったチケットを機械に差し込むと、彼女の映像は私とは全く違うものでした。でも、それも彼女に「ドンピシャ」だったのです！ 写っていたのは、横に緑が生い茂る中、はしごを登っていく手の映像でした。彼女は今、資格取得のために一生懸命勉強し、努力するという課題に直面しています。彼女が受け取ったスクリーンショットもまた、神聖なメッセージだったと言えるでしょう。

ジブリや宮崎駿監督の話題ついでに、ちょっとした余談ですが……2023年に公開された『君たちはどう生きるか』はご覧になりましたか？ 多くの人やWikipediaが説明するあらすじとは裏腹に、この映画には多次元性、マルチバース（並行宇宙）の構造、そして私たちの魂の存在に関連する、非常にスピリチュアルで量子力学的な側面があると感じています。もう一度観直さなきゃ、と思っているところです。

それでは、また！ 皆さんの感想もぜひコメントで聞かせてくださいね。`,
      en: `Last week I visited the Ghibli Museum, that was my second time. My first time was almost 20 years ago. I almost forgot how it was like inside. But as I entered some memories slowly came back, and of course that big plush toy catbus is still there!

The one thing that impressed me most was the entrance ticket. At reception, each person was given an entrance ticket that looked like a small portion of film. I did not know then what the captured film frame was like. By just looking at it, the frame picture was too small and too dark. Inside the museum, there's a machine where we could insert the film portion and see the screenshots projected.

I almost laughed when I saw the pictures! To me that was like おみくじ drawn at a shrine！

The photo looked very much like the images I've been dreaming about recently. The theme of my dreams has been about the community, ships and sailing. I take that anything to do with sailing has a deep spiritual meaning... it's about ascension, evolution and consciousness.

I am very grateful for this synchronicity and greet and meet message from above! What an amazingly lovingly surprise!

Interestingly, my friend got another random entrance ticket, and as she inserted it at the machine, her images were different, but very spot on too! It's showing a hand climbing up a ladder, with some greens on the side. I know that currently she's going through some challenges where she has to study hard and work hard to get certified. The screenshots that she received were also some divine messages I'd say.

Talking about Ghibli and Director Hayao Miyazaki, just a quick side note... Did you watch his movie released in 2023 The Boy and the Heron? Despite the plot that most people or wikipedia depicted, there's a very spiritual and quantum aspect to it, relating to multi-dimensionality, the structure of multiverse and our soul existence. I think I'll have to watch it again.

Till then, feel free to share what you think!`,
      zh: null,
    },
  },
  {
    slug: 'my-pace-2026',
    title: {
      jp: 'マイペース My Pace 2026',
      en: 'My Pace 2026',
      zh: null,
    },
    date: '2026-06-02',
    category: 'article',
    cover: '/uploads/my-pace-2026.jpg',
    body: {
      jp: `一曲の話シェアしたいと思います。

この曲は、20年以上前に私が作曲し、その後、友人の許少榮さんに作詞してもらった作品です。最近になって、彼がこれまで様々な作曲家と制作してきた楽曲をAIで新たにアレンジし、さらにAIに歌わせた音源を送ってくれました。

それを聴いて、ふと思い出したんです。「あぁ、そういえば、こんな曲を書いたことがあったな…！」自分でも完全に忘れていました（笑）。でも同時に、改めて「初心」を思い出させてもらった気がします。

当時、日本語を勉強していて覚えた言葉に「マイペース」がありました。「我行我素」というか、自分のリズムで、自分の意思に従って歩いていく、そんな意味です。私はこの言葉がとても好きで、自分の生き方そのものだと感じていました。

当時はちょうど卒業した頃で、「勉強しなければならないこと」はひとまず終わったけれど、その先、自分が何をしたいのかはまだ分からない。ただ、「無理してまでやりたくないことはやりたくない」という気持ちだけははっきりありました。今なら若い人たちがよく言う「夢を追う」という感覚に近いのかもしれません。

「夢を追う」という概念も、実は日本留学中に初めて強く意識したものでした。「人って、"夢"を持って生きるものなんだ…！」そんなことを、当時の私は新鮮に感じていたんです。

その時の思いや考えを許少榮さんに話したところ、彼はそれを受けて、とても美しく、そして驚くほど私の心に寄り添った歌詞を書いてくれました。当時は、九龍城までギターの達人を訪ねて、一日かけてアコースティックバージョンまで作ったのですが、結局ぴったりの歌い手が見つからず、そのままずっと引き出しの奥に眠っていました。私自身も、存在を忘れてしまうほどに。

一方では、今のAI技術の進歩の速さに本当に驚かされます。正直、少し怖いくらいです（笑）。友人が冗談まじりに、「AI、そんなに急速に進化しなくても、人類にもう少し余地を残してよ！」と言っていましたが、本当にそんな気持ちになります。

でももう一方では、この曲を通して、許少榮さんが私に「初心」を思い出させてくれたことに、とても感謝しています。人生にはいろんな出来事があり、気づけば本来の自分を忘れ、まるで出口のない迷路の中で、悩みと格闘してしまうことがあります。

だからこそ、改めて自分に言い聞かせています。どうにもならないことがたくさんあるなら、なおさら、自分のペースで、自分の好きなことを、自分にできる範囲でやっていけばいい。それだけで、もう十分なんだと。

この曲、私はもう何度も何度も繰り返し聴いています。聴くたびに、なぜか少し涙が出てきて、いろんな感情が込み上げてきます。きっと、「感動」なんでしょうね。いい歳になったのになぁ（笑）。

もしよかったら、ぜひ歌詞をゆっくり味わってもらえたら嬉しいです。何か小さなインスピレーションが届きますように。みなさん、素敵な毎日を！

(original lyrics in Cantonese)
Listen to My Pace 🎶 Click Here -> My Pace

作曲：Carmen Ng 伍嘉敏
作詞：Ivan Hui 許少榮

【Verse 1】
空は　こんなにも澄みわたり
追いかける　風の中の夢
なぜだろう「変わってる」と笑われても
笑いながら歌う
誰だって　本当は解き放たれたいはず
新しいメロディーを紡ぎ
Groove に少しの R&B
自由なリズム自分だけのコード
歌い疲れたら道ばたで　夢をひとつ拾う

【Pre-Chorus】
細い路地を歩き
花猫が身体を掻くのを眺め
ぼんやり空を見上げ
鳥のように自由に羽ばたくことを覚える
心は自然と惹かれ
この港を飛び出してゆく

【Chorus】
This is my pace
自分では　これが自然な生き方
たとえ最後までうまく飛べなくても
誰かに頼ったりしない
自分の力だけで進む
毎日が晴れであることなんて望まない
誰が喜び誰がそうでないかも気にしない
ただ自分が「面白い」と感じられればいい

【Verse 2】
雨は　いつだって気まぐれで
苦しさもきっと意味がある
うまく言葉にはできない
この気持ちだけど分かっている
みんなが私を心配してくれていること
そしてまた思い出す
昨日　海辺を歩いたことを
ギターを抱え弦を鳴らしながら
途切れた記憶を最初から弾き直すように
この歌を口ずさむ

【Chorus】
This is my pace
自分では　これが自然な生き方
たとえ最後まで飛び方を知らなくても
誰にも頼らず
自分の力で進んでいく
毎日が晴れじゃなくてもいい
誰が喜び誰がそうでないかも気にしない
ただ心が「楽しい」と感じられればいい

【Outro】
自由に飛ぶ
空の色があまりにも美しいから
ただ願うのは
たくさんの驚きや喜びを生み出すこと
私はただあきらめずにいたい
忘れずにいられることがこんなにも嬉しい
もう怖くはない
向き合っていける
cause This is my pace`,
      en: null,
      zh: null,
    },
  },
  {
    slug: 'the-phoenix-flame',
    title: {
      jp: '不死鳥の炎 The Phoenix Flame',
      en: 'The Phoenix Flame',
      zh: null,
    },
    date: '2026-05-22',
    category: 'article',
    cover: '/uploads/the-phoenix-flame.jpg',
    body: {
      jp: `2026年5月20日、宮島の霊火堂で起きた大規模な火災は、本当に多くの方々の心を痛めました。わずか数時間のうちに、お堂は完全に全焼してしまったのです。

この霊火堂は、西暦806年に弘法大師・空海が護摩行の際に点火して以来、今日まで絶えることなく燃え続けてきた「消えずの火」が祀られている場所として広く知られていました。

霊火堂の火は、広島、そして第二次世界大戦とも深い繋がりを持っています。この霊火の残り火は広島平和記念公園へと引き継がれ、「平和の灯」となりました。そしてその平和の灯は、世界中から核兵器が完全に廃絶されるその日まで、燃やし続けられるよう設計されているのです。

物質的な側面から見れば、歴史ある建物が失われてしまったことは本当に悲しく、胸が締め付けられる思いです。

時空を超えたエネルギー的な視点に立ってみると、あの「火」の本質は永遠であり、決して消え去ることはありません。それは、世界中に散らばり、それぞれの場所で愛を繋ぎ止めている（アンカリングしている）私たちライトワーカーの一人ひとりが、決して消えない「永遠の灯火」であるのと同じなのです。

それは、神聖なサイン。

不死鳥の炎は、今や解き放たれ、自由になりました。空海をはじめとする、多くの高徳な僧侶や神聖なる存在たちの導きとサポートによって、あの戦争で傷ついたすべての魂は癒やされ、今や本来の完全なる姿へと戻り、満たされました。核の残留エネルギーも、きれいに一掃されたのです。

目を持つ者がそれを見つめ、心を持つ者がそれを感じる時、すべては神聖なる調和のうちに完了しています。`,
      en: `The huge fire at Reikado, Miyajima on 20th May 2026, indeed broke the hearts of many. The temple was completely burnt down in just a few hours. The temple itself was known to hold the inextinguishable flame originally lit by the monk Kukai in year 806 through goma fire rituals.

Reikado was related to Hiroshima, and the second world war. The flame at Reikado was taken to the Hiroshima Peace Memorial Park, becoming the Peace Flame; and the peace flame was designed to continue burning until all nuclear weapons are abolished worldwide.

Physically, it's saddening to see the construction was destroyed.

Energetically across space and time, the flame is and will always be eternal and never be extinguished; same as all lightworkers are each individually an eternal flame, spreading across the globe anchoring love to where each resides.

It' a divine sign. The phoenix flame is now released and free. With the assistance from divine beings and Kukai leading many highly revered monks, the lost souls during the war are healed, now complete and whole. Nuclear residues are wiped clear.

All is divinely completed, for those with the eyes to see, and the heart to feel.`,
      zh: null,
    },
  },
  {
    slug: 'detach-to-connect',
    title: {
      jp: 'Detach to Connect',
      en: 'Detach to Connect',
      zh: null,
    },
    date: '2026-05-17',
    category: 'article',
    cover: '/uploads/detach-to-connect.jpg',
    body: {
      jp: `人生が過酷で、思い通りにいかないとき。立ち止まって、自分自身にこう言い聞かせてみるのはいつだって素晴らしい選択です。「私は、川を流れる一枚の葉っぱ。ただ流れに身をまかせ、水が連れていきたい場所へと、ただ運ばれていこう」

抵抗すればするほど、同じ出来事が形を変えて引き戻され、何度も同じループを繰り返すことになります。

自分自身が自然の中に溶け込んでいくようなこのイメージは、エネルギーヒーリングの世界でいう「エレメント（火、水、風、土）に自らを同調（アチューンメント）させる」感覚とよく似ています。たとえば、一粒のクリスタルに同調する。空に浮かぶ雲に同調する。ゆらめくキャンドルの炎に同調する。

そうして大自然のエレメントと「ただ共にある」状態に入るとき、そこには一切の恐れが消え去ります。あるのは、完全なバランスと、静寂だけです。

バランスを保ち、静けさの中にいるとき。それは一見、低く身を潜めているように見えて、内なる強さが静かに満ちていく状態でもあります。

仏教ではこれを「執着を手放す（離執の原則）」と説きます。私たちが魂として進化していくにつれ、より深く手放すことができるようになっていきます。そして、手放せば手放すほど、クリアな視界が見えてくるのです。

本当の「つながり」を感じるためにこそ、執着を手放していくのです。`,
      en: `When life gets tough and rough, it's always a good idea to pause and remind oneself to be a leaf floating along the river, simply go with the flow, allow the water to bring you to wherever it wants. The more one resists the more the same thing will come back, keep repeating the loop.

This imagery of oneself melting with nature is similar to when we say in energy healing that we attune ourselves to the elements, ie, fire, water, wind, earth. Say, we attune ourselves to a piece of crystal. We attune ourselves to the cloud. We attune ourselves to the candle fire.

When we get into the state of being together with the elements of nature, there is no fear. It's all balance and calm.

When we are balance and calm, that's also the state when we stay low, yet the strength inside builds up.

In Buddhism, it talks about the detachment principle. As we evolve, we detach further. As we detach further, clarity unveils.

We detach to feel the connection.`,
      zh: null,
    },
  },
  {
    slug: 'plasmic-crystalline-water',
    title: {
      jp: 'プラズマの水 Plasmic Crystalline Water',
      en: 'Plasmic Crystalline Water',
      zh: null,
    },
    date: '2026-05-08',
    category: 'article',
    cover: '/uploads/plasmic-crystalline-water.jpg',
    body: {
      jp: `栃木県のあしかがフラワーパークに行ってきました。ここを訪れるのは今回で2回目です。前回はちょうどこの季節で、幻想的な美しさを放つ藤の花を見に来ました。

今回は、晴天に恵まれ、まさに花々が満開の最高のタイミングで訪れることができました。園内のどこを歩いても、まるで楽園のようでした。スタッフの方々がどれほど心を込めて植物を手入れしているのかが伝わってきて、その愛情や創造性が、一枚一枚の葉や芝生の一角、そして園内のあらゆる場所にまで注がれているのを感じました。

特に心を引かれた場所がありました。日が沈み、夜になると同時に園内がライトアップされます。池の水面に光が映り込み、紫や白、ピンク、緑といった花々の色彩が揺らめく影となって広がります。それはまるで、喜びと至福のシンフォニーが奏でられているかのようでした。

私は園内をゆっくり歩きながら、大きな藤の木の前で足を止めました。そして水面に映るその姿を見つめました。見れば見るほど、その反射はどんどん鮮明になっていき、まるで水中にもう一つの世界が存在しているかのように感じられました。むしろ、地上にある実体以上にリアルに感じられるほどで、植物の細部や通り過ぎる人々、藤を支える木の構造の質感までもがはっきりと映し出されていました。

色彩もとても鮮やかで、まるで4K映像、いやそれ以上のようでした。

最近、地球は次元上昇していると言われ、自然界や精霊、動物たちはすでに三次元を超えつつある、という話を耳にします。すべてが少しずつ、レムリアの時代のガイアのように、よりプラズマ的でクリスタルのような状態へと戻りつつあるのだと。目の前の水も、まさにそのように感じられました。

水が物を映し出す性質を持っていることは分かっていますが、それでもどこか、その質感自体が変化しているように思えたのです。より高次の領域へとシフトしているような……まるで「プラズマ的でクリスタルのような水」とでも言いたくなるような感覚でした。

その瞬間は本当に魔法のようで、その場を離れたくありませんでした。こんなに美しい景色は、いくら見ても見飽きることがありません。川や池、湖に意識を向けてみてください。きっと、その中にさらなる魔法を見つけることができるかもしれません。`,
      en: `I went to Asikaga Flower Park, Tochigi Prefecture. This is my second time visiting this park, last time was around this time of the year when I went to see the blooming of the surreal beautiful Wisteria.

This time, I went there just perfect timing the day when it was sunny good weather, and the flowers were in full bloom. Everywhere was like a paradise. I really appreciate how the staff there took care of the plants, their heart, love and creativity pouring into every leaf, every piece of grass, and every corner of the park.

There was a particular spot which caught my attention. The sun sunk, and the whole area lit up as the night came. With the lights reflecting upon the ponds, one can see the colourful shadows of the flowers, shades of purple, white, pink, green. It's like playing out a symphony of joy and bliss.

I was strolling around, and stopped my feet in front of a huge wisteria. And I saw it's shadow in the water. The more I looked at it, the reflections became clearer, so clear as if the shadow was an actual underwater world, even more real than the construct above, with all the details of the plant, people passing by, the texture of the wood structure supporting the tree... the colours were so vivid! It was like watching 4K TV, or above!

There have been sayings that the Earth is now ascending, and the nature, elementals, animals are already rising above the third dimension. Things are returning gradually to becoming more plasmic and crystalline, as how Gaia was like during Lemuria. Just like the water in front of me.

I know that the nature of water allows it to reflect matters. But somehow, I feel that the texture has really changed. It's shifted to a higher realm... like... plasmic crystalline water?

That moment was so magical, and I just didn't want to leave. Can never have enough of such beautiful scenes! Try feel into the rivers, ponds, lakes, and you might find more magic inside!`,
      zh: null,
    },
  },
  {
    slug: 'energy-portal-opening',
    title: {
      jp: 'エネルギーポータルの扉が開く Energy Portal Opening',
      en: 'Energy Portal Opening',
      zh: null,
    },
    date: '2026-05-01',
    category: 'article',
    cover: '/uploads/energy-portal-opening.jpg',
    body: {
      jp: `Tokyo from around 17:35 (27th April 2026)

世界は確実に変わってきています。こんな体験、これまでの人生で一度もありませんでした……たった1か月の間に、あんなに大きくて、くっきり鮮やかな虹を2回も見るなんて。しかも空高くに、ほぼ1時間もかかって。

その日の空はとても忙しくて、片側にはダブルレインボー、反対側には沈みゆく太陽。そしてさらに上のほうには、今にも顔を出しそうな月が見えていました。涙がこぼれてきて……言葉にならない。ただただ、「私たちはなんて恵まれているんだろう」と感じました。

でも普段の私たちは、頭を下げて一生懸命働いて、人生のいろいろな課題を乗り越えることに夢中になっていることが多いですよね。

虹が現れるとき、それはまるでエネルギーのポータルが開くような感覚があります。ユニコーンやペガサスのエネルギーで満ちているような……。今回のは「第6次元が開いているサインだ」と言う人もいます。

もちろん、「虹に神秘的なものなんてない」と考える人もいるでしょう。あの日は、雨が降っている中で太陽の光が差し込み、光の反射や屈折が起きていた——ただそれだけの物理現象だと。でも、「すべては物質であり、物理的なものだ」と考える人にとっても、虹が現れる瞬間に立ち止まって空を見上げずにはいられない、その何かがあるのではないでしょうか。`,
      en: null,
      zh: null,
    },
  },
  {
    slug: 'sakura',
    title: {
      jp: '咲くラ Sakura',
      en: 'Sakura',
      zh: null,
    },
    date: '2026-04-24',
    category: 'article',
    cover: '/uploads/sakura.jpg',
    body: {
      jp: `毎年、日本中で何千本、何万本もの桜が一斉に咲くのを見るたびに、本当にすごいなあと感動します。それから、梅の花と桜の見分け方として「花びらを見るといい」と言われているのも面白いですよね。桜の花びらは先が少し割れていて、ハートみたいな形をしています。これがまた、とても可愛いです…！

世界中の人が桜を好きですよね。「桜が嫌い」という人はあまり聞いたことがありません（笑）それくらい、日本人にとっても、この地球にいる多くの人にとっても、桜はとても大切な存在なのだと思います。

花はどれもそうですが、まるでガイアからの贈り物のようで、見たり香りを感じたりすることで、この3次元の世界を超えた、自然で美しい高い波動の世界へと導いてくれるポータルのような存在だと感じます。例えば桜餅を食べるとき、ピンクのお餅を包んでいる緑の葉っぱも一緒に食べますよね。そういう瞬間は、植物と一体になる感覚を少し思い出させてくれる気がします。

日本語では花が咲くことを「花は咲く」と言いますが、最近この「咲く（さく）」という音がふと心に響きました。「咲く」は、花が開く、咲く、現れるといった意味があります。そして思い出したのが、エジプト神話に登場する太陽神のラー（Ra）です。「ラーの目」は太陽そのものを指しますし、スピリチュアルの分野では「父なる太陽」としてラーのエネルギーをチャネリングする人もいますよね。

そう考えると、「さく・ら」という音を合わせたときに、「父なる太陽が花開く」という意味にも感じられませんか。もしかすると桜は、そのもの自体がセントラルサンのエネルギーを運んできている存在なのかもしれません。なぜ「さくら」と呼ばれるようになったのか、不思議に思います。

音はエネルギーですので、今度「さくら」と言うときは、その響きを少し感じてみてください。もしかしたら、アカシックな記憶が少し開いてくるかもしれません。`,
      en: `I am always amazed each year by the blooming of thousands and millions of cherry blossom trees throughout Japan. I am also amazed by how people say, to distinguish between a Plum tree flower and a Cherry blossom flower, look at their petals. Petals of Cherry blossoms are slightly indented creating a heart shape. This is so awesomely cute!

Everyone from all over the worlds loves cherry blossoms. I have not heard of anyone saying they don't like sakura ;)  These trees take such a significant part in the lives of Japanese, as well as many people on this planet.

Same as all flowers, they are the treasures of Gaia; by looking at them, smelling them, flowers are portals bringing us to the organic beautiful high vibrational realm outside this 3D world.

For example, when we each a sakura mochi, we also eat the little green leaf wrapping around the pink daifuku. This further takes us to be one with these inspiring plants!

In Japanese, when flowers bloom, we say　Hana wa Saku. 花は咲く

Recently the sound of this verb Saku suddenly struck me. Saku, literally means Bloom, Flower, Open, Blossom, Come out into Flower.

And... in Egyptian mythology, Ra is the primary deity of the Sun. For example, the Eye of Ra, refers to the Sun itself. In the channeling community, channelers sometimes would channel Ra, the Father Sun, for wisdom and support.

Thinking about it, when combining all these sounds together, Saku-Ra... doesn't that refer to the Blossoming of Father Sun? ... the sakura flowers themselves are bringing in the power and energy of our dear Central Sun?

Why would Sakura be called Saku-ra? Sound is energy, next time when we say the word SAKURA, try to feel into its energy... maybe that will open up some more of our Akashic memories.`,
      zh: null,
    },
  },
  {
    slug: 'kwanon-canon',
    title: {
      jp: '観音 & Kwanon & Canon',
      en: 'Kwanon & Canon',
      zh: null,
    },
    date: '2026-04-15',
    category: 'article',
    video: '/videos/kwanon-canon.mp4',
    body: {
      jp: `突如、観音像の背後から神秘的な霧がふわりと立ち込めてきた@宮島弥山大聖院

ずいぶん前のことですが、観音様の名前にはとても美しい由来があると聞きました。「観」と「音」、つまり「音を観る」。これ、すごくないですか？慈悲の象徴である観音様（アヴァローキテーシュヴァラ）は、第三の眼の力がとても強くて、音の周波数さえも「視る」ことができると言われているんです。なんて完璧で、ロマンチックな名前なんでしょう！

実は、日本を代表するカメラメーカーのCanon（キヤノン）も、もともとは1930年代に「Kwanon（カンノン）」という名前だったって知っていましたか？ 当時の創業者が熱心な仏教徒で、世界一のカメラを目指すにあたって、観音様の慈悲にあずかりたいと名付けたそうです。初期のロゴには「千手観音」が描かれていて、カメラのボディにも刻印されていたんですよ。技術の粋を集めたカメラに観音様の名前をつけるなんて、当時の日本人の精神性を感じてワクワクしちゃいます。

このお話をさらに深めてくれるのが、私が心から尊敬する恩師とのつながりです。

量子催眠（QHHT）の創始者、ドロレス・キャノン（Dolores Cannon）。彼女の名字も、まさに「観音（カノン）」と同じ響きですよね。私は彼女に直接会ったことはありませんが、彼女の残したワークは、今も世界中の多くの人々にインスピレーションを与え続けています。

あるチャネリングの機会に、私はこんなことに気づきました。素晴らしい知性と美しさを持つ女性の魂の多くは、大天使ジョフィエルのフラクタル（分身）から来ているということ。観音様もそのお一人だと言われています。

そう考えると、ドロレスが今世で「キャノン」という姓を選んで生まれてきたのも、決して偶然ではない気がするんです。彼女は「視る眼」と「聴く耳」を持つ人々に向けて、愛と知恵を広めるためにここに来てくれた……そんなヒントを私たちに残してくれたのではないでしょうか。

すべてはつながっている。そんな風に感じると、世界がより愛おしく見えてきますね。ナマステ。`,
      en: `I was told many years ago the name of Goddess Kuan Yin has a beautiful meaning behind. The characters 観 and 音, meaning 'to see' + 'sound' ; i.e. Seeing Sound. Bodhisattva Avalokiteshvara, the Goddess of Mercy, has her 3rd eye abilities so open that she can even see sound frequencies! Isn't that amazing?! What a perfect name!

Then I also found that the brand Canon was originally called Kwanon in the 1930's. Back then, one of the owners was into Buddhism, created the camera and decided to name it after the Goddess. They hoped the deity would share her benevolence as they strived to make the world's best camera. The company also used the thousand-armed Kuan Yin as their logo, and have it engraved on the top part of the camera body. To make this beautiful story more complete, I noticed the surname of one of my respected mentors in my life, the ex-founder of quantum hypnosis QHHT Dolores Cannon, also shares the same sound as the Goddess. I did not know her personally, but her works had inspired so many people in her life time and even today. In one channeling opportunity, I realized that many gorgeous and brilliant female souls come from the fractals of Archangel Jophiel. Goddess Kuan Yin is one of them.

I believe that there is no surprising that Dolores Cannon, by choosing her Earth life using this surname, was trying to give hints to us that she was here to spread the love and wisdom... for those with the EYES to SEE and HEAR.

Namaste.`,
      zh: null,
    },
  },
  {
    slug: 'torii-gates-of-activation',
    title: {
      jp: '鳥居 - 目覚めさせる神聖な門 Torii, Gates of Activation',
      en: 'Torii, Gates of Activation',
      zh: null,
    },
    date: '2026-04-07',
    category: 'article',
    cover: '/uploads/torii-gates-of-activation.jpg',
    body: {
      jp: `最近、日本の南西部を旅した際、数多くの鳥居をくぐりました。宮島の鳥居は実に巨大です！生きた木から作られているため、木の幹の模様や質感がはっきりと見て取れ、生命エネルギーである「気」が満ち溢れています。

鳥居は神々の次元への入り口であるという言い伝えがあります。それはまさに真実です~

鳥居をくぐる時、あるいはくぐろうとする前には、神聖な空間へと足を踏み入れるのですから、純粋な心と、愛と敬意の念を持って身構えてください。量子論的に言えば、鳥居をくぐることで私たちのDNAが活性化され、魂の本質を思い出させてくれるのです。なんと美しいことでしょう！`,
      en: `In my recent trips to the south western part of Japan, I went through many torii gates. The one in Miyajima is gigantic! One can clearly see the patterns and texture of a tree trunk, the life energy / Ki abundantly filling the place.

Torii gates are said to be the entrance to the realm of the Gods. That is so true ~

Whenever we walk through a torii, or before we are about to walk through one, we are entering a sacred space. So please be prepared with a pure heart, with love and respect. Quantum wise, walking through torii gates activates our DNA, reminding us of the essence of our souls. How beautiful is that!`,
      zh: null,
    },
  },
  {
    slug: 'rainbow-bridging-the-worlds',
    title: {
      jp: '虹―世界をつなぐ架け橋 Rainbow bridging the Worlds',
      en: 'Rainbow bridging the Worlds',
      zh: null,
    },
    date: '2026-04-07',
    category: 'news',
    cover: '/uploads/rainbow-bridging-the-worlds.jpg',
    body: {
      jp: `日付：2026年3月31日

三重県の伊勢神宮を初めて訪れました。今回の体験は、私たちがこれまで行ってきたことへの、太陽の女神・天照大御神からの最高のサインであり、今の道が正しいというメッセージだと感じています。

到着したときは雨と風があり、まず外宮、そして内宮を参拝しました。帰ろうとする直前、おかげ横丁のかわいらしいお店を見ながら、「もう少し歩いてみようかな、あの角を曲がったら何があるんだろう」とふと思い、右に曲がったその瞬間、目の前に大きな虹がゆっくりと現れ、どんどんはっきりしていきました。

小雨が降る中、背後から太陽が顔を出し、川沿いには満開の桜が並んでいて、本当に美しい光景でした。思わず携帯を取り出してこの魔法のような瞬間を撮ろうとしたとき、時間を見ると16:16！鳥肌が立ちました。

橋の上にいた人たちもみんなその美しさに圧倒されていて、車も止まり、空を見上げながら「こんなの初めて見た」と声を上げていました。虹は約10分ほどそこに留まり、まるでみんながしっかり写真を撮れるようにしてくれているかのように、その後ゆっくりと色が薄れて空に溶けていきました。

そしてちょうどいいタイミングで、私は友人たちとの待ち合わせに戻ることができました。日本でも特別な存在とされるこの神聖な場所で、目に見える橋の上に、さらに見えない虹の橋がかかり、アジア、ヨーロッパ、アメリカ、中東といった世界をつないでいるように感じられたことを、とても光栄に思います。

美しい魂をお持ちのみなさまへ。ぜひ空を見上げて、さまざまなサインを受け取ってください。アセンションはすでに進んでいて、もう止まることはありません。

Tags: 伊勢神宮、虹、天照`,
      en: `Date : 31st March 2026

My first time visiting Ise Shrine, Mie Prefecture. I believe this is the best acknowledgement from the Sun Goddess Amaterasu for the work we have been doing, and that we are on the right path.

When I reached there it was raining and windy. I visited the Outer Shrine, then the Inner Shrine.

It was just before I headed back, when I was checking out the lovely small shops on the souvenir street, I was thinking maybe I should walk a bit more, turn around the corner to see what's over there... there I turned to the right, and saw in front of me a huge rainbow starting to take shape becoming clearer and clearer.

While it's still drizzling, the sun behind me started to come out... and on the background along the river, there were rows of blooming cherry blossoms...

Immediately I grabbed my phone trying to capture this magical moment, I saw the time was 16:16! Angel Bumps!!

Everyone on the bridge there was overwhelmed by the beautiful scene, cars were stopping, everyone looking up exclaiming saying they have never seen such an amazing scene before!

The rainbow stayed there for about 10 minutes, as if making sure everyone had a nice shot out of it, then it gradually dimmed its colors fading out in the sky. It's just perfect timing, for me to head back to join my friends at the scheduled time.

At such a highly acclaimed spiritual shrine in Japan, it's an honour to witness this esoteric rainbow bridge spanning across above a physical bridge, connecting the worlds of Asia, Europe, Americas, Middle East....

Dear Beautiful Souls, look up for all the hints and signs :)  Ascension is on the way and it's non-stoppable!

Tags: Ise Shrine, Rainbow, Amaterasu`,
      zh: null,
    },
  },
  {
    slug: 'website-brush-up',
    title: {
      jp: 'HPのリニューアル Website Brush Up',
      en: 'Website Brush Up',
      zh: null,
    },
    date: '2026-04-07',
    category: 'news',
    cover: '/uploads/website-brush-up.jpg',
    body: {
      jp: `Dear Beautiful Souls,

この1年、あたたかくサポートしてくださり本当にありがとうございます! 地球に流れている明るく軽やかなアセンションエネルギーの流れに合わせて、HPをリニューアルしました~

より多くの方に必要なサポートを届けられるよう、セッション内容もシンプルで分かりやすい形に整えています。いくつか新しく加えたことがあります。

1）スピリチュアルガイダンス＆ヒーリングをスタートしました。私はいつも、ヒーリングとは本来「自己ヒーリング」のプロセスであり、自分自身の中にあるギフトや癒しの力を思い出していくものだとお伝えしています。この新しいセッションでは、顕在意識・潜在意識の両方のレベルからご自身をより深く知り（思い出し）、全体的にバランスよく整えていくサポートをしていきます。エゴは時に頑固なものなので、癒しには継続と意識的な取り組みも大切です。ここでは、安心して向き合える高い波動のスペースを用意して、あなたのヒーリングのプロセスをサポートします。

2）これからブログも少しずつ書いていきます。みなさんともっとつながりながら、日常の中での気づきや、ヒーリングに関するちょっとしたヒントなどもシェアしていきたいと思っています。

3）ぜひニュースレターにもご登録ください。最新のお知らせをお届けするほか、新規登録の方には、楽しくできる「エネルギーチェックシート」をプレゼントしています。

いつも愛のスペースを一緒に保ってくださり、本当にありがとうございます! これからも新しいお知らせをいろいろ準備していますので、ぜひ楽しみにしていてくださいね。

Love,
Carmen`,
      en: `Dear Beautiful Souls,

Thank you for your kind support in the past year! To align with the new wave of bright and light ascension energies on Earth, I have brushed up my website, intending to provide a brand new, more streamlined session structure to serve the needs of more people.

A few new things that I have added...

1) I have added a new service called Spiritual Guidance and Healing. I often stress the importance of realising that HEALING is in fact a SELF-HEALING process where one is recalling their own spiritual gifts and abilities to heal themselves out of traumatic challenges in different timelines. Through this new service, my intention is to assist you to consciously and sub-consciously know (or remember) more about yourself, checking the macro and micro aspects, in order to achieve a more thorough healing holistically. As our ego mind can be stubborn at times, healing requires consistence and discipline. Here I provide you with a pure and high vibrational sacred space to assist in your healing journey.

2) I am starting to write more BLOG's from now. I want to connect with you, and share my interesting finds in life, and any healing related tips and hints here and there.

3) AND... please feel free to subscribe to my newsletter for any updates! New subscribers will receive a short yet fun energy checklist!

Thank you for holding this space of love for me and with me. Stay tuned for more new exciting news upcoming!

Tags: スピリチュアル, ブログ, ヒーリング, お知らせ`,
      zh: null,
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getBodyForLocale(
  post: Post,
  locale: 'jp' | 'en' | 'zh',
): { body: string; isFallback: boolean } {
  if (locale === 'jp') return { body: post.body.jp, isFallback: false };
  if (locale === 'en' && post.body.en) {
    return { body: post.body.en, isFallback: false };
  }
  if (locale === 'zh' && post.body.zh) {
    return { body: post.body.zh, isFallback: false };
  }
  return { body: post.body.jp, isFallback: true };
}

export function getTitleForLocale(
  post: Post,
  locale: 'jp' | 'en' | 'zh',
): { title: string; isFallback: boolean } {
  if (locale === 'jp') return { title: post.title.jp, isFallback: false };
  if (locale === 'en' && post.title.en) {
    return { title: post.title.en, isFallback: false };
  }
  if (locale === 'zh' && post.title.zh) {
    return { title: post.title.zh, isFallback: false };
  }
  return { title: post.title.jp, isFallback: true };
}
