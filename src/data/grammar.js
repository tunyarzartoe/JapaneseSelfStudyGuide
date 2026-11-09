export const grammar = [
  // N5 Grammar
  {
    id: 1, level: 'N5', pattern: '〜は〜です',
    meaning: 'A is B (basic noun sentence)',
    explanation: 'Used to state that something is something else. は (wa) marks the topic, です (desu) is the polite copula.',
    examples: [
      { jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' },
      { jp: 'これは本です。', romaji: 'Kore wa hon desu.', en: 'This is a book.' },
    ]
  },
  {
    id: 2, level: 'N5', pattern: '〜が好きです',
    meaning: 'I like ~',
    explanation: 'が (ga) marks the object/subject of the feeling. 好き (suki) means "like/fond of".',
    examples: [
      { jp: '音楽が好きです。', romaji: 'Ongaku ga suki desu.', en: 'I like music.' },
      { jp: '猫が好きです。', romaji: 'Neko ga suki desu.', en: 'I like cats.' },
    ]
  },
  {
    id: 3, level: 'N5', pattern: '〜ている',
    meaning: 'Currently doing ~ / State of being',
    explanation: 'Attach て-form of a verb + いる to express ongoing action or resultant state.',
    examples: [
      { jp: '今、勉強しています。', romaji: 'Ima, benkyou shite imasu.', en: 'I am studying now.' },
      { jp: '窓が開いています。', romaji: 'Mado ga aite imasu.', en: 'The window is open.' },
    ]
  },
  {
    id: 4, level: 'N5', pattern: '〜たい',
    meaning: 'Want to do ~',
    explanation: 'Attach たい to the verb stem (masu-form without ます) to express personal desire.',
    examples: [
      { jp: '日本に行きたいです。', romaji: 'Nihon ni ikitai desu.', en: 'I want to go to Japan.' },
      { jp: '水が飲みたいです。', romaji: 'Mizu ga nomitai desu.', en: 'I want to drink water.' },
    ]
  },
  {
    id: 5, level: 'N5', pattern: '〜ませんか',
    meaning: 'Won\'t you do ~ ? / Invitation',
    explanation: 'Used to invite someone to do something together. Polite negative question.',
    examples: [
      { jp: '一緒に食べませんか。', romaji: 'Issho ni tabemasen ka.', en: 'Won\'t you eat together with me?' },
      { jp: '映画を見ませんか。', romaji: 'Eiga wo mimasen ka.', en: 'Won\'t you watch a movie?' },
    ]
  },
  {
    id: 6, level: 'N5', pattern: '〜ましょう',
    meaning: 'Let\'s do ~',
    explanation: 'Polite volitional form. Used to enthusiastically suggest doing an activity together.',
    examples: [
      { jp: '帰りましょう。', romaji: 'Kaerimashou.', en: 'Let\'s go home.' },
      { jp: '始めましょう。', romaji: 'Hajimemashou.', en: 'Let\'s start.' },
    ]
  },

  // N4 Grammar
  {
    id: 7, level: 'N4', pattern: '〜ために',
    meaning: 'In order to ~ / For the sake of ~',
    explanation: 'Verb (dictionary form) + ために, or Noun + のために. Expresses purpose or benefit.',
    examples: [
      { jp: '日本へ行くために、日本語を勉強しています。', romaji: 'Nihon e iku tame ni, nihongo wo benkyou shite imasu.', en: 'I am studying Japanese in order to go to Japan.' },
      { jp: '家族のために頑張ります。', romaji: 'Kazoku no tame ni gambarimasu.', en: 'I will do my best for my family.' },
    ]
  },
  {
    id: 8, level: 'N4', pattern: '〜なければならない',
    meaning: 'Must do ~ / Have to do ~',
    explanation: 'Verb (ない-form, drop い) + ければならない. Expresses strong obligation or duty.',
    examples: [
      { jp: '薬を飲まなければなりません。', romaji: 'Kusuri wo nomanakereba narimasen.', en: 'I must take medicine.' },
      { jp: '宿題をしなければならない。', romaji: 'Shukudai wo shinakereba naranai.', en: 'I have to do my homework.' },
    ]
  },
  {
    id: 9, level: 'N4', pattern: '〜てもいい',
    meaning: 'May do ~ / It is okay to ~',
    explanation: 'Verb (て-form) + もいい. Used to grant or ask for permission.',
    examples: [
      { jp: '写真を撮ってもいいですか。', romaji: 'Shashin wo totte mo ii desu ka.', en: 'May I take a picture?' },
      { jp: '入ってもいいですよ。', romaji: 'Haitte mo ii desu yo.', en: 'You may come in.' },
    ]
  },
  {
    id: 10, level: 'N4', pattern: '〜てはいけない',
    meaning: 'Must not do ~ / Prohibition',
    explanation: 'Verb (て-form) + はいけない. Expresses prohibition or rules.',
    examples: [
      { jp: 'ここでタバコを吸ってはいけません。', romaji: 'Koko de tabako wo sutte wa ikemasen.', en: 'You must not smoke here.' },
      { jp: '廊下を走ってはいけない。', romaji: 'Rouka wo hashitte wa ikenai.', en: 'You must not run in the hallway.' },
    ]
  },
  {
    id: 11, level: 'N4', pattern: '〜ながら',
    meaning: 'While doing ~ (simultaneous actions)',
    explanation: 'Verb stem + ながら. Indicates two actions performed simultaneously by the same subject.',
    examples: [
      { jp: '音楽を聞きながら勉強します。', romaji: 'Ongaku wo kikinagara benkyou shimasu.', en: 'I study while listening to music.' },
      { jp: 'テレビを見ながらご飯を食べた。', romaji: 'Terebi wo minagara gohan wo tabeta.', en: 'I ate while watching TV.' },
    ]
  },
  {
    id: 12, level: 'N4', pattern: '〜つもり',
    meaning: 'Plan to ~ / Intend to ~',
    explanation: 'Verb (dictionary form or ない-form) + つもり. Expresses personal intention.',
    examples: [
      { jp: '来年、国に帰るつもりです。', romaji: 'Rainen, kuni ni kaeru tsumori desu.', en: 'I plan to return to my home country next year.' },
      { jp: '旅行に行かないつもりだ。', romaji: 'Ryokou ni ikanai tsumori da.', en: 'I don\'t intend to go on a trip.' },
    ]
  },

  // N3 Grammar
  {
    id: 13, level: 'N3', pattern: '〜ばかり',
    meaning: 'Just finished ~ / Only / Nothing but ~',
    explanation: 'Verb (た-form) + ばかり indicates an action just occurred moments ago.',
    examples: [
      { jp: 'さっきご飯を食べたばかりです。', romaji: 'Sakki gohan wo tabeta bakari desu.', en: 'I just ate a moment ago.' },
      { jp: '日本に来たばかりです。', romaji: 'Nihon ni kita bakari desu.', en: 'I just arrived in Japan.' },
    ]
  },
  {
    id: 14, level: 'N3', pattern: '〜おかげで',
    meaning: 'Thanks to ~ (positive outcome)',
    explanation: 'Expresses that a favorable result occurred thanks to someone/something.',
    examples: [
      { jp: '先生のおかげで合格できました。', romaji: 'Sensei no okage de goukaku dekimashita.', en: 'Thanks to my teacher, I was able to pass.' },
      { jp: '天気がいいおかげで楽しめた。', romaji: 'Tenki ga ii okage de tanoshimeta.', en: 'Thanks to the nice weather, we enjoyed ourselves.' },
    ]
  },
  {
    id: 15, level: 'N3', pattern: '〜せいで',
    meaning: 'Because of ~ / Blame (negative outcome)',
    explanation: 'Expresses that an unfavorable result was caused by someone/something.',
    examples: [
      { jp: '雨のせいで試合が中止になった。', romaji: 'Ame no sei de shiai ga chuushi ni natta.', en: 'Because of the rain, the match was canceled.' },
      { jp: '寝坊したせいで遅刻した。', romaji: 'Nebou shita sei de chikoku shita.', en: 'Because I overslept, I was late.' },
    ]
  },
  {
    id: 16, level: 'N3', pattern: '〜において',
    meaning: 'In / At / On the occasion of ~',
    explanation: 'Noun + において. Formal marker for place, field, era, or occasion.',
    examples: [
      { jp: '東京において国際会議が開かれた。', romaji: 'Toukyou ni oite kokusai kaigi ga hirakareta.', en: 'An international conference was held in Tokyo.' },
      { jp: '教育の分野において重要だ。', romaji: 'Kyouiku no bun\'ya ni oite juuyou da.', en: 'It is important in the field of education.' },
    ]
  },
  {
    id: 17, level: 'N3', pattern: '〜に違いない',
    meaning: 'Must be ~ / Without a doubt ~',
    explanation: 'Expresses strong conviction based on evidence or intuition.',
    examples: [
      { jp: '彼は犯人に違いない。', romaji: 'Kare wa hannin ni chigainai.', en: 'He must be the culprit.' },
      { jp: '明日は雨に違いない。', romaji: 'Ashita wa ame ni chigainai.', en: 'It will definitely rain tomorrow.' },
    ]
  },

  // N2 Grammar
  {
    id: 18, level: 'N2', pattern: '〜にもかかわらず',
    meaning: 'Despite ~ / In spite of ~ / Although ~',
    explanation: 'Expresses that an unexpected result occurred contrary to the condition.',
    examples: [
      { jp: '大雨にもかかわらず、多くの人が集まった。', romaji: 'Ooame ni mo kakawarazu, ooku no hito ga atsumatta.', en: 'Despite the heavy rain, many people gathered.' },
      { jp: '忙しいにもかかわらず手伝ってくれた。', romaji: 'Isogashii ni mo kakawarazu tetsudatte kureta.', en: 'Even though she was busy, she helped me.' },
    ]
  },
  {
    id: 19, level: 'N2', pattern: '〜わけがない',
    meaning: 'There is no way that ~ / Impossible that ~',
    explanation: 'Strongly denies the possibility of something occurring based on logic.',
    examples: [
      { jp: 'そんなこと、できるわけがない。', romaji: 'Sonna koto, dekiru wake ga nai.', en: 'There is no way I could do such a thing.' },
      { jp: '彼が嘘をつくわけがない。', romaji: 'Kare ga uso wo tsuku wake ga nai.', en: 'There\'s no way he would lie.' },
    ]
  },
  {
    id: 20, level: 'N2', pattern: '〜ざるを得ない',
    meaning: 'Have no choice but to ~ / Cannot help doing ~',
    explanation: 'Verb (ない-form, drop ない) + ざるを得ない (する becomes せざるを得ない).',
    examples: [
      { jp: '規則ですから、従わざるを得ません。', romaji: 'Kisoku desu kara, shitagawazaru wo emasen.', en: 'Since it\'s a rule, we have no choice but to obey.' },
      { jp: '中止せざるを得ない状況だ。', romaji: 'Chuushi sezaru wo enai joukyou da.', en: 'The situation leaves no choice but to cancel.' },
    ]
  },
  {
    id: 21, level: 'N2', pattern: '〜に伴って',
    meaning: 'As ~ / Along with ~ (simultaneous change)',
    explanation: 'Expresses that as one change occurs, another change happens in parallel.',
    examples: [
      { jp: '人口の増加に伴って、住宅需要が増えた。', romaji: 'Jinkou no zouka ni tomonatte, juutaku juyou ga fueta.', en: 'Along with the population increase, housing demand grew.' },
      { jp: '年をとるに伴って体力が衰える。', romaji: 'Toshi wo toru ni tomonatte tairyoku ga otoroeru.', en: 'As one ages, physical strength declines.' },
    ]
  },

  // N1 Grammar (Advanced / 上級)
  {
    id: 22, level: 'N1', pattern: '〜を余儀なくされる',
    meaning: 'Be forced to ~ / Compelled to ~',
    explanation: 'Noun + を余儀なくされる. Formal expression for being reluctantly compelled by inevitable circumstances.',
    examples: [
      { jp: '台風のため、旅行は中止を余儀なくされた。', romaji: 'Taifuu no tame, ryokou wa chuushi wo yoginakusareta.', en: 'Due to the typhoon, the trip was forced to be cancelled.' },
      { jp: '資金不足で計画の変更を余儀なくされた。', romaji: 'Shikin busoku de keikaku no henkou wo yoginakusareta.', en: 'Due to a lack of funds, the plan had to be altered.' },
    ]
  },
  {
    id: 23, level: 'N1', pattern: '〜にほかならない',
    meaning: 'Is nothing other than ~ / Is precisely ~',
    explanation: 'Noun + にほかならない. Emphatically asserts that something is none other than what is stated.',
    examples: [
      { jp: '彼の成功は日々の努力の結果にほかならない。', romaji: 'Kare no seikou wa hibi no doryoku no kekka ni hokanaranai.', en: 'His success is nothing other than the result of daily effort.' },
      { jp: 'これは国民の信頼の証にほかならない。', romaji: 'Kore wa kokumin no shinrai no akashi ni hokanaranai.', en: 'This is nothing less than proof of the public\'s trust.' },
    ]
  },
  {
    id: 24, level: 'N1', pattern: '〜きらいがある',
    meaning: 'Have a tendency to ~ (negative/undesirable trend)',
    explanation: 'Verb (dictionary form) or Noun + の + きらいがある. Points out an undesirable human or social tendency.',
    examples: [
      { jp: '彼は物事を悲観的に考えるきらいがある。', romaji: 'Kare wa monogoto wo hikanteki ni kangaeru kirai ga aru.', en: 'He tends to view things overly pessimistically.' },
      { jp: '現代人は運動不足に陥るきらいがある。', romaji: 'Gendaijin wa undou busoku ni ochiiru kirai ga aru.', en: 'Modern people tend to fall into a lack of exercise.' },
    ]
  },
  {
    id: 25, level: 'N1', pattern: '〜べからず',
    meaning: 'Must not ~ (formal prohibition)',
    explanation: 'Verb (dictionary form) + べからず. Highly formal, standardly seen on public notices, decrees, or mottos.',
    examples: [
      { jp: '関係者以外立ち入るべからず。', romaji: 'Kankeisha igai tachiiru bekarazu.', en: 'Authorized personnel only / Do not enter.' },
      { jp: '初心忘るべからず。', romaji: 'Shoshin wasuru bekarazu.', en: 'Never forget your original purpose/beginner\'s mind.' },
    ]
  },
  {
    id: 26, level: 'N1', pattern: '〜たるもの',
    meaning: 'As someone who is ~ / Being a ~ (high ethical standard)',
    explanation: 'Noun (representing a duty or professional status) + たるもの. Followed by what that person must or should do.',
    examples: [
      { jp: '教育者たるもの、常に生徒の模範であるべきだ。', romaji: 'Kyouikusha taru mono, tsuneni seito no mohan de aru beki da.', en: 'As an educator, one should always be an exemplar for students.' },
      { jp: 'リーダーたるもの、冷静な判断力が求められる。', romaji: 'Riidaa taru mono, reisei na handanryoku ga motomerareru.', en: 'As a leader, calm judgment is required.' },
    ]
  },
  {
    id: 27, level: 'N1', pattern: '〜まじき',
    meaning: 'Unforgivable for ~ / Should never do as ~',
    explanation: 'Verb (dictionary form) + まじき + Noun. Expresses that an action is unacceptable given one\'s role or position.',
    examples: [
      { jp: 'カンニングは学生にあるまじき行為だ。', romaji: 'Kanningu wa gakusei ni aru majiki koui da.', en: 'Cheating is behavior unbecoming of a student.' },
      { jp: '暴言を吐くなど、政治家にあるまじき発言だ。', romaji: 'Bougen wo haku nado, seijika ni aru majiki hatsugen da.', en: 'Spouting abusive language is a statement completely unacceptable for a politician.' },
    ]
  },
  {
    id: 28, level: 'N1', pattern: '〜ならではの',
    meaning: 'Unique to ~ / Only possible with ~',
    explanation: 'Noun + ならでは(の). Emphasizes positive qualities or unique characteristics exclusive to that person or thing.',
    examples: [
      { jp: '京都ならではの美しい町並みを楽しむ。', romaji: 'Kyouto naradewa no utsukushii machinami wo tanoshimu.', en: 'Enjoy the beautiful townscape unique to Kyoto.' },
      { jp: 'ベテランならではの素晴らしい対応だ。', romaji: 'Beteran naradewa no subarashii taiou da.', en: 'That is a wonderful response that only a veteran could provide.' },
    ]
  },
  {
    id: 29, level: 'N1', pattern: '〜をもって',
    meaning: 'With / By means of / As of (formal time/means)',
    explanation: 'Noun + をもって. Formal phrase indicating means, instrument, or an official deadline/commencement.',
    examples: [
      { jp: '本日をもって今年度の営業を終了いたします。', romaji: 'Honjitsu wo motte konnendo no eigyou wo shuuryou itashimasu.', en: 'As of today, we conclude business operations for this fiscal year.' },
      { jp: '誠意をもって交渉に臨む。', romaji: 'Seii wo motte koushou ni nozomu.', en: 'Approach negotiations with utmost sincerity.' },
    ]
  },
  {
    id: 30, level: 'N1', pattern: '〜極まりない / 〜極まる',
    meaning: 'Extremely ~ / Utterly ~',
    explanation: 'Na-adjective stem (or Noun) + 極まりない. Formal expression for reaching an extreme positive or negative degree.',
    examples: [
      { jp: '彼の失礼極まりない態度に腹が立った。', romaji: 'Kare no shitsurei kiwamarinai taido ni hara ga tatta.', en: 'I got furious at his utterly rude attitude.' },
      { jp: '危険極まりない行為は直ちにやめなさい。', romaji: 'Kiken kiwamarinai koui wa tadachini yamenasai.', en: 'Stop that extremely dangerous act immediately.' },
    ]
  },
  {
    id: 31, level: 'N1', pattern: '〜なくしては',
    meaning: 'Without ~ (cannot be achieved)',
    explanation: 'Noun + なくしては (followed by impossible/negative). Indicates that without X, Y cannot happen.',
    examples: [
      { jp: '努力なくしては、成功はあり得ない。', romaji: 'Doryoku nakushite wa, seikou wa arienai.', en: 'Without effort, success is impossible.' },
      { jp: '皆の協力なくしては完成できなかった。', romaji: 'Minna no kyouryoku nakushite wa kansei dekinakatta.', en: 'Without everyone\'s cooperation, this could not have been completed.' },
    ]
  },
  {
    id: 32, level: 'N1', pattern: '〜を皮切りに',
    meaning: 'Starting with ~ / Beginning with ~',
    explanation: 'Noun + を皮切りに(して). Expresses that one event triggered a continuous series of similar actions.',
    examples: [
      { jp: '東京公演を皮切りに、全国ツアーが始まる。', romaji: 'Toukyou kouen wo kawakiri ni, zenkoku tsuaa ga hajimaru.', en: 'Starting with the Tokyo performance, the nationwide tour begins.' },
      { jp: 'あの新商品の発売を皮切りにブームが起きた。', romaji: 'Ano shinshouhin no hatsubai wo kawakiri ni buumu ga okita.', en: 'Beginning with the release of that new product, a craze began.' },
    ]
  },
  {
    id: 33, level: 'N1', pattern: '〜と相まって',
    meaning: 'Coupled with ~ / In combination with ~',
    explanation: 'Noun + と相まって. Indicates that two or more factors synergized to produce a magnified effect.',
    examples: [
      { jp: '好天と相まって、お祭りは大盛況だった。', romaji: 'Kouten to aimatte, omatsuri wa daiseikyou datta.', en: 'Coupled with the pleasant weather, the festival was a huge success.' },
      { jp: '才能が努力と相まって偉大な業績を生んだ。', romaji: 'Sainou ga doryoku to aimatte idai na gyouseki wo unda.', en: 'Talent combined with effort produced great achievements.' },
    ]
  }
];
