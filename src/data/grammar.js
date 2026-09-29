export const grammar = [
  // N5 Grammar
  {
    id: 1, level: 'N5', pattern: '〜は〜です',
    meaning: 'A is B (basic noun sentence)',
    explanation: 'Used to state that something is something else. は (wa) marks the topic, です (desu) is the copula.',
    examples: [
      { jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' },
      { jp: 'これは本です。', romaji: 'Kore wa hon desu.', en: 'This is a book.' },
    ]
  },
  {
    id: 2, level: 'N5', pattern: '〜が好きです',
    meaning: 'I like ~',
    explanation: 'が (ga) marks the subject of the feeling. 好き (suki) means "like/love".',
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
    explanation: 'Attach たい to the stem (masu-form minus ます) of a verb to express desire.',
    examples: [
      { jp: '日本に行きたいです。', romaji: 'Nihon ni ikitai desu.', en: 'I want to go to Japan.' },
      { jp: '水が飲みたいです。', romaji: 'Mizu ga nomitai desu.', en: 'I want to drink water.' },
    ]
  },
  {
    id: 5, level: 'N5', pattern: '〜ませんか',
    meaning: 'Won\'t you do ~ ? / Invitation',
    explanation: 'Used to invite someone to do something together. Polite negative question form.',
    examples: [
      { jp: '一緒に食べませんか。', romaji: 'Issho ni tabemasen ka.', en: 'Won\'t you eat together with me?' },
      { jp: '映画を見ませんか。', romaji: 'Eiga wo mimasen ka.', en: 'Won\'t you watch a movie?' },
    ]
  },
  {
    id: 6, level: 'N5', pattern: '〜ましょう',
    meaning: 'Let\'s do ~',
    explanation: 'Volitional form (polite). Used to suggest doing something together.',
    examples: [
      { jp: '帰りましょう。', romaji: 'Kaerimashoo.', en: 'Let\'s go home.' },
      { jp: '始めましょう。', romaji: 'Hajimemashoo.', en: 'Let\'s start.' },
    ]
  },
  // N4 Grammar
  {
    id: 7, level: 'N4', pattern: '〜ために',
    meaning: 'In order to ~ / For the sake of ~',
    explanation: 'Expresses purpose. Verb (dictionary form) + ために, or Noun + のために.',
    examples: [
      { jp: '試験に合格するために勉強します。', romaji: 'Shiken ni goukaku suru tame ni benkyou shimasu.', en: 'I study in order to pass the exam.' },
      { jp: '健康のために運動します。', romaji: 'Kenkou no tame ni undou shimasu.', en: 'I exercise for my health.' },
    ]
  },
  {
    id: 8, level: 'N4', pattern: '〜てから',
    meaning: 'After doing ~',
    explanation: 'Verb (て-form) + から. Indicates one action happens after another is completed.',
    examples: [
      { jp: '宿題をしてから、テレビを見ます。', romaji: 'Shukudai wo shite kara, terebi wo mimasu.', en: 'After doing homework, I watch TV.' },
      { jp: '食べてから、寝ます。', romaji: 'Tabete kara, nemasu.', en: 'After eating, I sleep.' },
    ]
  },
  {
    id: 9, level: 'N4', pattern: '〜ば〜のに',
    meaning: 'If only ~, then…',
    explanation: 'Expresses regret or a counterfactual wish. The conditional ば + のに (expressing frustration).',
    examples: [
      { jp: '早く起きれば、間に合ったのに。', romaji: 'Hayaku okireba, maniatta noni.', en: 'If only I had woken up early, I would have made it.' },
    ]
  },
  {
    id: 10, level: 'N4', pattern: '〜そうだ (様態)',
    meaning: 'Looks like ~ / Seems like ~',
    explanation: 'Verb stem or adj stem + そうだ. Expresses appearance based on what you observe.',
    examples: [
      { jp: '雨が降りそうです。', romaji: 'Ame ga furi-sou desu.', en: 'It looks like it\'s going to rain.' },
      { jp: 'おいしそうです。', romaji: 'Oishi-sou desu.', en: 'It looks delicious.' },
    ]
  },
  // N3 Grammar
  {
    id: 11, level: 'N3', pattern: '〜わけではない',
    meaning: 'It\'s not that ~ / Not necessarily ~',
    explanation: 'Used to deny a conclusion or expectation that might be inferred from the situation.',
    examples: [
      { jp: '嫌いなわけではない。', romaji: 'Kirai na wake de wa nai.', en: 'It\'s not that I hate it.' },
      { jp: '行けないわけではないです。', romaji: 'Ikenai wake de wa nai desu.', en: 'It\'s not that I can\'t go.' },
    ]
  },
  {
    id: 12, level: 'N3', pattern: '〜に対して',
    meaning: 'Toward ~ / Regarding ~ / In contrast to ~',
    explanation: 'Indicates the target of an action, feeling, or comparison.',
    examples: [
      { jp: '先生に対して失礼なことを言った。', romaji: 'Sensei ni taishite shitsurei na koto wo itta.', en: 'I said something rude toward the teacher.' },
    ]
  },
  {
    id: 13, level: 'N3', pattern: '〜ことになっている',
    meaning: 'It has been decided that ~ / It is supposed to ~',
    explanation: 'Expresses a rule, schedule, or arrangement that has been established.',
    examples: [
      { jp: '明日、会議があることになっています。', romaji: 'Ashita, kaigi ga aru koto ni natte imasu.', en: 'It has been decided that there will be a meeting tomorrow.' },
    ]
  },

  // N4 Grammar
  {
    id: 14, level: 'N4', pattern: '〜なければならない',
    meaning: 'Must do ~ (obligation)',
    explanation: 'Verb (nai-form, drop nai) + なければならない. Expresses necessity or obligation.',
    examples: [
      { jp: '宿題をしなければなりません。', romaji: 'Shukudai wo shinakereba narimasen.', en: 'I have to do my homework.' },
      { jp: '明日、早く起きなければなりません。', romaji: 'Ashita, hayaku okinakereba narimasen.', en: 'I have to wake up early tomorrow.' },
    ]
  },
  {
    id: 15, level: 'N4', pattern: '〜てもいいです',
    meaning: 'It is okay to do ~ (permission)',
    explanation: 'Verb (te-form) + もいいです. Used to ask for or give permission.',
    examples: [
      { jp: 'ここに座ってもいいですか。', romaji: 'Koko ni suwattemo ii desu ka.', en: 'Is it okay to sit here?' },
      { jp: '写真を撮ってもいいです。', romaji: 'Shashin wo tottemo ii desu.', en: 'It\'s okay to take photos.' },
    ]
  },
  {
    id: 16, level: 'N4', pattern: '〜てはいけません',
    meaning: 'Must not do ~ (prohibition)',
    explanation: 'Verb (te-form) + はいけません. Expresses prohibition.',
    examples: [
      { jp: 'ここでたばこを吸ってはいけません。', romaji: 'Koko de tabako wo suttewa ikemasen.', en: 'You must not smoke here.' },
      { jp: '図書館で騒いではいけません。', romaji: 'Toshokan de sawaidewa ikemasen.', en: 'You must not make noise in the library.' },
    ]
  },
  {
    id: 17, level: 'N4', pattern: '〜ながら',
    meaning: 'While doing ~ (simultaneous actions)',
    explanation: 'Verb (masu-stem) + ながら. Two actions done by the same person at the same time.',
    examples: [
      { jp: '音楽を聞きながら勉強します。', romaji: 'Ongaku wo kikinagara benkyou shimasu.', en: 'I study while listening to music.' },
      { jp: '歩きながら話しましょう。', romaji: 'Arukinagara hanashimashou.', en: 'Let\'s talk while walking.' },
    ]
  },
  {
    id: 18, level: 'N4', pattern: '〜つもりだ',
    meaning: 'Intend to ~ / plan to ~',
    explanation: 'Verb (dictionary form) + つもりだ. Expresses intention or plan.',
    examples: [
      { jp: '来年日本へ行くつもりです。', romaji: 'Rainen Nihon e iku tsumori desu.', en: 'I intend to go to Japan next year.' },
      { jp: '来月、国へ帰るつもりです。', romaji: 'Raigetsu, kuni e kaeru tsumori desu.', en: 'I plan to return to my country next month.' },
    ]
  },
  {
    id: 19, level: 'N4', pattern: '〜かもしれない',
    meaning: 'Might ~ / maybe ~',
    explanation: 'Verb/adj (plain form) + かもしれない. Expresses possibility.',
    examples: [
      { jp: '明日雨が降るかもしれません。', romaji: 'Ashita ame ga furu kamoshiremasen.', en: 'It might rain tomorrow.' },
      { jp: '彼は来ないかもしれません。', romaji: 'Kare wa konai kamoshiremasen.', en: 'He might not come.' },
    ]
  },
  // N3 Grammar
  {
    id: 20, level: 'N3', pattern: '〜ばかりだ',
    meaning: 'Just did ~ / nothing but ~',
    explanation: 'Verb (ta-form) + ばかりだ. Expresses that something happened very recently.',
    examples: [
      { jp: 'さっき着いたばかりです。', romaji: 'Sakki tsuita bakari desu.', en: 'I just arrived.' },
      { jp: 'この会社は今年始まったばかりです。', romaji: 'Kono kaisha wa kotoshi hajimatta bakari desu.', en: 'This company just started this year.' },
    ]
  },
  {
    id: 21, level: 'N3', pattern: '〜おかげで',
    meaning: 'Thanks to ~',
    explanation: 'Noun/verb (plain form) + おかげで. Expresses a positive cause or reason.',
    examples: [
      { jp: 'あなたのおかげで成功しました。', romaji: 'Anata no okage de seikou shimashita.', en: 'Thanks to you, I succeeded.' },
      { jp: '先生のおかげで合格できました。', romaji: 'Sensei no okage de goukaku dekimashita.', en: 'Thanks to the teacher, I was able to pass.' },
    ]
  },
  {
    id: 22, level: 'N3', pattern: '〜せいで',
    meaning: 'Because of ~ (negative cause)',
    explanation: 'Noun/verb (plain form) + せいで. Expresses blame for a negative result.',
    examples: [
      { jp: '雨のせいで、試合が中止になった。', romaji: 'Ame no sei de, shiai ga chuushi ni natta.', en: 'Because of the rain, the match was cancelled.' },
      { jp: '寝坊したせいで、遅刻しました。', romaji: 'Nebou shita sei de, chikoku shimashita.', en: 'Because I overslept, I was late.' },
    ]
  },
  {
    id: 23, level: 'N3', pattern: '〜において',
    meaning: 'In / at (formal locational or situational marker)',
    explanation: 'Noun + において. A formal way to mark a place, time, or field/situation.',
    examples: [
      { jp: 'この分野において彼は専門家です。', romaji: 'Kono bun\'ya ni oite kare wa senmonka desu.', en: 'In this field, he is an expert.' },
      { jp: '会議は本社において行われます。', romaji: 'Kaigi wa honsha ni oite okonawaremasu.', en: 'The meeting will be held at the head office.' },
    ]
  },
  {
    id: 24, level: 'N3', pattern: '〜に違いない',
    meaning: 'Must be ~ / certainly is ~',
    explanation: 'Verb/adj (plain form) or noun + に違いない. Expresses strong confidence in a guess.',
    examples: [
      { jp: '彼は忙しいに違いない。', romaji: 'Kare wa isogashii ni chigainai.', en: 'He must be busy.' },
      { jp: 'この話は本当に違いない。', romaji: 'Kono hanashi wa hontou ni chigainai.', en: 'This story must be true.' },
    ]
  },
  {
    id: 25, level: 'N3', pattern: '〜つつある',
    meaning: 'Is in the process of ~ing',
    explanation: 'Verb (masu-stem) + つつある. Expresses a change that is gradually taking place.',
    examples: [
      { jp: '状況は改善しつつあります。', romaji: 'Joukyou wa kaizen shitsutsu arimasu.', en: 'The situation is improving.' },
      { jp: '人口は減少しつつある。', romaji: 'Jinkou wa genshou shitsutsu aru.', en: 'The population is decreasing.' },
    ]
  },
  // N2 Grammar
  {
    id: 26, level: 'N2', pattern: '〜にもかかわらず',
    meaning: 'Despite ~ / in spite of ~',
    explanation: 'Noun/verb (plain form) + にもかかわらず. Expresses an unexpected contrast.',
    examples: [
      { jp: '雨にもかかわらず、試合は行われた。', romaji: 'Ame ni mo kakawarazu, shiai wa okonawareta.', en: 'Despite the rain, the match was held.' },
      { jp: '努力にもかかわらず、失敗した。', romaji: 'Doryoku ni mo kakawarazu, shippai shita.', en: 'Despite the effort, it failed.' },
    ]
  },
  {
    id: 27, level: 'N2', pattern: '〜わけがない',
    meaning: 'There is no way that ~',
    explanation: 'Verb/adj (plain form) + わけがない. Strong denial of a possibility.',
    examples: [
      { jp: '彼が嘘をつくわけがない。', romaji: 'Kare ga uso wo tsuku wake ga nai.', en: 'There\'s no way he would lie.' },
      { jp: 'こんな簡単な問題ができないわけがない。', romaji: 'Konna kantan na mondai ga dekinai wake ga nai.', en: 'There\'s no way I can\'t solve such an easy problem.' },
    ]
  },
  {
    id: 28, level: 'N2', pattern: '〜ざるを得ない',
    meaning: 'Have no choice but to ~',
    explanation: 'Verb (nai-form, drop nai) + ざるを得ない. Expresses reluctant obligation.',
    examples: [
      { jp: '状況を考えると、辞めざるを得ない。', romaji: 'Joukyou wo kangaeru to, yamezaru wo enai.', en: 'Considering the situation, I have no choice but to quit.' },
      { jp: '値上げを受け入れざるを得ない。', romaji: 'Neage wo ukeirezaru wo enai.', en: 'I have no choice but to accept the price increase.' },
    ]
  },
  {
    id: 29, level: 'N2', pattern: '〜に伴って',
    meaning: 'Along with ~ / as ~ happens',
    explanation: 'Noun/verb (dictionary form) + に伴って. Expresses one change accompanying another.',
    examples: [
      { jp: '人口の増加に伴って、問題も増えている。', romaji: 'Jinkou no zouka ni tomonatte, mondai mo fueteiru.', en: 'Along with population growth, problems are also increasing.' },
      { jp: '技術の発展に伴って、生活が便利になった。', romaji: 'Gijutsu no hatten ni tomonatte, seikatsu ga benri ni natta.', en: 'Along with technological development, life has become more convenient.' },
    ]
  },
  {
    id: 30, level: 'N2', pattern: '〜を通じて',
    meaning: 'Through ~ / throughout ~',
    explanation: 'Noun + を通じて. Expresses a means or a duration.',
    examples: [
      { jp: 'インターネットを通じて情報を得る。', romaji: 'Intaanetto wo tsuujite jouhou wo eru.', en: 'I obtain information through the internet.' },
      { jp: '一年を通じて温暖な気候です。', romaji: 'Ichinen wo tsuujite ondan na kikou desu.', en: 'The climate is mild throughout the year.' },
    ]
  },
  {
    id: 31, level: 'N2', pattern: '〜からこそ',
    meaning: 'Precisely because ~',
    explanation: 'Plain form + からこそ. Emphasizes the reason.',
    examples: [
      { jp: '努力したからこそ、成功したのだ。', romaji: 'Doryoku shita kara koso, seikou shita no da.', en: 'It\'s precisely because I made an effort that I succeeded.' },
      { jp: 'あなたのことが心配だからこそ、言うのです。', romaji: 'Anata no koto ga shinpai da kara koso, iu no desu.', en: 'It\'s precisely because I worry about you that I\'m saying this.' },
    ]
  },
  {
    id: 32, level: 'N2', pattern: '〜上で',
    meaning: 'On the basis of ~ / after doing ~',
    explanation: 'Verb (ta-form) + 上で, or noun + の上で. Expresses a necessary step before something else.',
    examples: [
      { jp: 'よく考えた上で決めます。', romaji: 'Yoku kangaeta ue de kimemasu.', en: 'I\'ll decide after thinking it over carefully.' },
      { jp: '契約書を確認した上で、サインしてください。', romaji: 'Keiyakusho wo kakunin shita ue de, sain shite kudasai.', en: 'Please sign after checking the contract.' },
    ]
  },
  {
    id: 33, level: 'N2', pattern: '〜ものの',
    meaning: 'Although ~ / even though ~',
    explanation: 'Plain form + ものの. Introduces an unexpected or contrasting result.',
    examples: [
      { jp: '合格したものの、まだ安心できない。', romaji: 'Goukaku shita mono no, mada anshin dekinai.', en: 'Although I passed, I still can\'t feel relieved.' },
      { jp: '薬を飲んだものの、熱は下がらなかった。', romaji: 'Kusuri wo nonda mono no, netsu wa sagaranakatta.', en: 'Although I took the medicine, my fever didn\'t go down.' },
    ]
  },
  // N1 Grammar
  {
    id: 34, level: 'N1', pattern: '〜を余儀なくされる',
    meaning: 'Be forced to ~',
    explanation: 'Noun + を余儀なくされる. Formal expression for being compelled by circumstances.',
    examples: [
      { jp: '台風のため、旅行は中止を余儀なくされた。', romaji: 'Taifuu no tame, ryokou wa chuushi wo yoginakusareta.', en: 'Due to the typhoon, the trip was forced to be cancelled.' },
      { jp: '資金不足で計画の変更を余儀なくされた。', romaji: 'Shikin busoku de keikaku no henkou wo yoginakusareta.', en: 'Due to a lack of funds, the plan had to be changed.' },
    ]
  },
  {
    id: 35, level: 'N1', pattern: '〜にほかならない',
    meaning: 'Is nothing but ~ / is precisely ~',
    explanation: 'Noun + にほかならない. Formal expression asserting that something is exactly what it seems.',
    examples: [
      { jp: 'これは努力の結果にほかならない。', romaji: 'Kore wa doryoku no kekka ni hokanaranai.', en: 'This is nothing but the result of hard work.' },
      { jp: '彼の成功は運にほかならない。', romaji: 'Kare no seikou wa un ni hokanaranai.', en: 'His success is nothing but luck.' },
    ]
  },
  {
    id: 36, level: 'N1', pattern: '〜きらいがある',
    meaning: 'Tend to ~ (negative tendency)',
    explanation: 'Verb (dictionary form) or noun + の + きらいがある. Points out an undesirable tendency.',
    examples: [
      { jp: '彼は物事を悲観的に考えるきらいがある。', romaji: 'Kare wa monogoto wo hikanteki ni kangaeru kirai ga aru.', en: 'He tends to think about things pessimistically.' },
      { jp: '彼女は完璧を求めすぎるきらいがある。', romaji: 'Kanojo wa kanpeki wo motomesugiru kirai ga aru.', en: 'She tends to demand too much perfection.' },
    ]
  },
  {
    id: 37, level: 'N1', pattern: '〜べからず',
    meaning: 'Must not ~ (formal prohibition)',
    explanation: 'Verb (dictionary form) + べからず. Very formal, often seen on signs.',
    examples: [
      { jp: '立ち入るべからず。', romaji: 'Tachiiru bekarazu.', en: 'Do not enter.' },
      { jp: '芝生に入るべからず。', romaji: 'Shibafu ni hairu bekarazu.', en: 'Do not walk on the grass.' },
    ]
  },
  {
    id: 38, level: 'N1', pattern: '〜たりとも〜ない',
    meaning: 'Not even ~ / not a single ~',
    explanation: 'Number/quantity + たりとも + negative. Emphasizes an absolute negation.',
    examples: [
      { jp: '一瞬たりとも油断できない。', romaji: 'Isshun taritomo yudan dekinai.', en: 'I can\'t let my guard down even for a moment.' },
      { jp: '一円たりとも無駄にしない。', romaji: 'Ichien taritomo muda ni shinai.', en: 'I won\'t waste even a single yen.' },
    ]
  },
  {
    id: 39, level: 'N1', pattern: '〜んがため',
    meaning: 'In order to ~ (formal, literary)',
    explanation: 'Verb (nai-form, drop nai) + んがため. A literary way to express purpose.',
    examples: [
      { jp: '目的を達成せんがため、努力を続けた。', romaji: 'Mokuteki wo tassei sen ga tame, doryoku wo tsuzuketa.', en: 'In order to achieve the goal, I continued to make efforts.' },
      { jp: '生きんがため、必死に働いた。', romaji: 'Ikin ga tame, hisshi ni hataraita.', en: 'In order to survive, I worked desperately.' },
    ]
  },
];