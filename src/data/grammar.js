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
];
