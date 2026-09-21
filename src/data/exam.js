// JLPT-style exam questions for practice
export const examSections = [
  {
    id: 'vocabulary',
    title: '語彙 (Vocabulary)',
    titleEn: 'Vocabulary',
    timeLimit: 300, // seconds
    questions: [
      {
        id: 1, type: 'meaning',
        question: '「食べる」の意味はどれですか？',
        questionEn: 'What is the meaning of 「食べる」?',
        options: ['to eat', 'to drink', 'to sleep', 'to run'],
        answer: 'to eat'
      },
      {
        id: 2, type: 'meaning',
        question: '「大きい」の意味はどれですか？',
        questionEn: 'What is the meaning of 「大きい」?',
        options: ['small', 'big', 'fast', 'slow'],
        answer: 'big'
      },
      {
        id: 3, type: 'reading',
        question: '「学校」の読み方はどれですか？',
        questionEn: 'How do you read 「学校」?',
        options: ['がっこう', 'がくこう', 'がくしゃ', 'がくせい'],
        answer: 'がっこう'
      },
      {
        id: 4, type: 'reading',
        question: '「先生」の読み方はどれですか？',
        questionEn: 'How do you read 「先生」?',
        options: ['せんせい', 'せんしょう', 'さきせい', 'さきしょう'],
        answer: 'せんせい'
      },
      {
        id: 5, type: 'fill',
        question: '私は毎朝コーヒーを（　　）。',
        questionEn: 'I drink coffee every morning. Fill in the blank.',
        options: ['食べます', '飲みます', '見ます', '行きます'],
        answer: '飲みます'
      },
      {
        id: 6, type: 'meaning',
        question: '「友達」の意味はどれですか？',
        questionEn: 'What is the meaning of 「友達」?',
        options: ['teacher', 'student', 'friend', 'family'],
        answer: 'friend'
      },
      {
        id: 7, type: 'reading',
        question: '「水曜日」の読み方はどれですか？',
        questionEn: 'How do you read 「水曜日」?',
        options: ['もくようび', 'かようび', 'すいようび', 'きんようび'],
        answer: 'すいようび'
      },
      {
        id: 8, type: 'fill',
        question: '明日、学校に（　　）。',
        questionEn: 'I will go to school tomorrow. Fill in the blank.',
        options: ['来ます', '帰ります', '行きます', '食べます'],
        answer: '行きます'
      },
    ]
  },
  {
    id: 'grammar',
    title: '文法 (Grammar)',
    titleEn: 'Grammar',
    timeLimit: 360,
    questions: [
      {
        id: 9, type: 'fill',
        question: '日本語（　　）勉強しています。',
        questionEn: 'I am studying Japanese. Fill in the particle.',
        options: ['で', 'を', 'が', 'に'],
        answer: 'を'
      },
      {
        id: 10, type: 'fill',
        question: '学校（　　）行きます。',
        questionEn: 'I go to school. Fill in the particle.',
        options: ['を', 'は', 'に', 'が'],
        answer: 'に'
      },
      {
        id: 11, type: 'select',
        question: '彼女は音楽が（　　）です。',
        questionEn: 'She likes music. Fill in the blank.',
        options: ['好き', '嫌い', '得意', '苦手'],
        answer: '好き'
      },
      {
        id: 12, type: 'fill',
        question: '一緒に食べ（　　）か？',
        questionEn: 'Won\'t you eat together with me?',
        options: ['ます', 'ません', 'ましょう', 'たい'],
        answer: 'ません'
      },
      {
        id: 13, type: 'fill',
        question: '宿題をして（　　）、テレビを見ます。',
        questionEn: 'After doing homework, I watch TV. Fill in the blank.',
        options: ['から', 'ので', 'が', 'は'],
        answer: 'から'
      },
      {
        id: 14, type: 'select',
        question: '雨が降り（　　）です。（It looks like it will rain.）',
        questionEn: 'Choose the correct ending to express "it looks like it will rain".',
        options: ['そう', 'らしい', 'ようだ', 'はず'],
        answer: 'そう'
      },
    ]
  },
  {
    id: 'kanji',
    title: '漢字 (Kanji)',
    titleEn: 'Kanji',
    timeLimit: 300,
    questions: [
      {
        id: 15, type: 'reading',
        question: '「山」の読み方はどれですか？',
        questionEn: 'How do you read 「山」?',
        options: ['かわ', 'やま', 'うみ', 'もり'],
        answer: 'やま'
      },
      {
        id: 16, type: 'meaning',
        question: '「火」の意味はどれですか？',
        questionEn: 'What does 「火」 mean?',
        options: ['water', 'earth', 'fire', 'wind'],
        answer: 'fire'
      },
      {
        id: 17, type: 'reading',
        question: '「月」の読み方はどれですか？',
        questionEn: 'How do you read 「月」 (for month)?',
        options: ['ひ', 'つき・げつ', 'ほし', 'かぜ'],
        answer: 'つき・げつ'
      },
      {
        id: 18, type: 'meaning',
        question: '「手」の意味はどれですか？',
        questionEn: 'What does 「手」 mean?',
        options: ['foot', 'eye', 'hand', 'ear'],
        answer: 'hand'
      },
      {
        id: 19, type: 'reading',
        question: '「大学」の読み方はどれですか？',
        questionEn: 'How do you read 「大学」?',
        options: ['しょうがく', 'だいがく', 'ちゅうがく', 'こうがく'],
        answer: 'だいがく'
      },
      {
        id: 20, type: 'meaning',
        question: '「本」の意味はどれですか？',
        questionEn: 'What does 「本」 mean?',
        options: ['pen', 'notebook', 'book', 'paper'],
        answer: 'book'
      },
    ]
  }
];
