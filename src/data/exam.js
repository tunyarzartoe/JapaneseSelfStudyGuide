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
  },

  {
    id: 'vocabulary-n4',
    title: '語彙 N4 (Vocabulary N4)',
    titleEn: 'Vocabulary N4',
    timeLimit: 300,
    questions: [
      {
        id: 21, type: 'meaning',
        question: '「天気」の意味はどれですか？',
        questionEn: 'What is the meaning of 「天気」?',
        options: ['weather', 'mood', 'plan', 'invitation'],
        answer: 'weather'
      },
      {
        id: 22, type: 'meaning',
        question: '「予定」の意味はどれですか？',
        questionEn: 'What is the meaning of 「予定」?',
        options: ['schedule, plan', 'mood', 'convenience', 'patience'],
        answer: 'schedule, plan'
      },
      {
        id: 23, type: 'reading',
        question: '「都合」の読み方はどれですか？',
        questionEn: 'How do you read 「都合」?',
        options: ['つごう', 'とごう', 'つがい', 'とがい'],
        answer: 'つごう'
      },
      {
        id: 24, type: 'fill',
        question: 'すみませんが、明日は（　　）が悪いです。',
        questionEn: 'Sorry, tomorrow doesn\'t work for me. Fill in the blank.',
        options: ['都合', '天気', '迷惑', '我慢'],
        answer: '都合'
      },
      {
        id: 25, type: 'meaning',
        question: '「迷惑」の意味はどれですか？',
        questionEn: 'What is the meaning of 「迷惑」?',
        options: ['trouble, nuisance', 'invitation', 'preparation', 'consultation'],
        answer: 'trouble, nuisance'
      },
      {
        id: 26, type: 'fill',
        question: '困ったときは、先生に（　　）。',
        questionEn: 'When in trouble, consult the teacher. Fill in the blank.',
        options: ['相談します', '我慢します', '招待します', '用意します'],
        answer: '相談します'
      },
    ]
  },
  {
    id: 'grammar-n4',
    title: '文法 N4 (Grammar N4)',
    titleEn: 'Grammar N4',
    timeLimit: 360,
    questions: [
      {
        id: 27, type: 'fill',
        question: '明日は早く起き（　　）。',
        questionEn: 'I have to wake up early tomorrow.',
        options: ['なければなりません', 'てもいいです', 'かもしれません', 'つもりです'],
        answer: 'なければなりません'
      },
      {
        id: 28, type: 'fill',
        question: 'ここで写真を撮っ（　　）か。',
        questionEn: 'May I take a photo here?',
        options: ['てもいいです', 'てはいけません', 'なければなりません', 'ながら'],
        answer: 'てもいいです'
      },
      {
        id: 29, type: 'fill',
        question: '図書館で大きい声で話し（　　）。',
        questionEn: 'You must not talk loudly in the library.',
        options: ['てはいけません', 'てもいいです', 'かもしれません', 'つもりです'],
        answer: 'てはいけません'
      },
      {
        id: 30, type: 'fill',
        question: 'テレビを見（　　）、ご飯を食べます。',
        questionEn: 'I eat while watching TV.',
        options: ['ながら', 'つもり', 'かもしれない', 'なければ'],
        answer: 'ながら'
      },
      {
        id: 31, type: 'fill',
        question: '来月、国へ帰る（　　）です。',
        questionEn: 'I plan to return to my country next month.',
        options: ['つもり', 'ながら', 'はず', 'そう'],
        answer: 'つもり'
      },
      {
        id: 32, type: 'fill',
        question: '明日は雨が降る（　　）。',
        questionEn: 'It might rain tomorrow.',
        options: ['かもしれません', 'つもりです', 'なければなりません', 'てもいいです'],
        answer: 'かもしれません'
      },
    ]
  },
  {
    id: 'kanji-n4',
    title: '漢字 N4 (Kanji N4)',
    titleEn: 'Kanji N4',
    timeLimit: 300,
    questions: [
      {
        id: 33, type: 'reading',
        question: '「開く」の読み方はどれですか？',
        questionEn: 'How do you read 「開く」?',
        options: ['ひらく', 'とじる', 'うごく', 'あつまる'],
        answer: 'ひらく'
      },
      {
        id: 34, type: 'meaning',
        question: '「忙しい」の意味はどれですか？',
        questionEn: 'What does 「忙しい」 mean?',
        options: ['busy', 'free', 'late', 'hurried'],
        answer: 'busy'
      },
      {
        id: 35, type: 'reading',
        question: '「働く」の読み方はどれですか？',
        questionEn: 'How do you read 「働く」?',
        options: ['はたらく', 'うごく', 'あつまる', 'いそぐ'],
        answer: 'はたらく'
      },
      {
        id: 36, type: 'meaning',
        question: '「返す」の意味はどれですか？',
        questionEn: 'What does 「返す」 mean?',
        options: ['to return (something)', 'to send', 'to borrow', 'to lend'],
        answer: 'to return (something)'
      },
      {
        id: 37, type: 'reading',
        question: '「急ぐ」の読み方はどれですか？',
        questionEn: 'How do you read 「急ぐ」?',
        options: ['いそぐ', 'おくれる', 'はたらく', 'あらう'],
        answer: 'いそぐ'
      },
      {
        id: 38, type: 'meaning',
        question: '「決める」の意味はどれですか？',
        questionEn: 'What does 「決める」 mean?',
        options: ['to decide', 'to separate', 'to hurry', 'to close'],
        answer: 'to decide'
      },
    ]
  },
  {
    id: 'vocabulary-n3',
    title: '語彙 N3 (Vocabulary N3)',
    titleEn: 'Vocabulary N3',
    timeLimit: 300,
    questions: [
      {
        id: 39, type: 'meaning',
        question: '「環境」の意味はどれですか？',
        questionEn: 'What is the meaning of 「環境」?',
        options: ['environment', 'situation', 'effect', 'proposal'],
        answer: 'environment'
      },
      {
        id: 40, type: 'reading',
        question: '「状況」の読み方はどれですか？',
        questionEn: 'How do you read 「状況」?',
        options: ['じょうきょう', 'じょうこう', 'しょうきょう', 'しょうこう'],
        answer: 'じょうきょう'
      },
      {
        id: 41, type: 'meaning',
        question: '「検討」の意味はどれですか？',
        questionEn: 'What is the meaning of 「検討」?',
        options: ['consideration', 'realization', 'maintenance', 'tendency'],
        answer: 'consideration'
      },
      {
        id: 42, type: 'fill',
        question: 'この問題について、もう少し（　　）します。',
        questionEn: 'I will consider this problem a bit more.',
        options: ['検討', '維持', '提案', '対応'],
        answer: '検討'
      },
      {
        id: 43, type: 'meaning',
        question: '「傾向」の意味はどれですか？',
        questionEn: 'What is the meaning of 「傾向」?',
        options: ['tendency', 'effect', 'environment', 'situation'],
        answer: 'tendency'
      },
      {
        id: 44, type: 'fill',
        question: '会議で新しいアイデアを（　　）しました。',
        questionEn: 'I proposed a new idea at the meeting.',
        options: ['提案', '検討', '維持', '対策'],
        answer: '提案'
      },
    ]
  },
  {
    id: 'grammar-n3',
    title: '文法 N3 (Grammar N3)',
    titleEn: 'Grammar N3',
    timeLimit: 360,
    questions: [
      {
        id: 45, type: 'fill',
        question: 'さっき着いた（　　）です。',
        questionEn: 'I just arrived.',
        options: ['ばかり', 'おかげ', 'せい', 'つつ'],
        answer: 'ばかり'
      },
      {
        id: 46, type: 'fill',
        question: '先生の（　　）、合格できました。',
        questionEn: 'Thanks to the teacher, I was able to pass.',
        options: ['おかげで', 'せいで', 'ばかりで', 'において'],
        answer: 'おかげで'
      },
      {
        id: 47, type: 'fill',
        question: '台風の（　　）、電車が止まった。',
        questionEn: 'Because of the typhoon, the train stopped.',
        options: ['せいで', 'おかげで', 'ばかりで', 'つつ'],
        answer: 'せいで'
      },
      {
        id: 48, type: 'fill',
        question: 'この分野（　　）、彼は有名です。',
        questionEn: 'In this field, he is famous.',
        options: ['において', 'に違いない', 'おかげで', 'ばかり'],
        answer: 'において'
      },
      {
        id: 49, type: 'fill',
        question: '彼は忙しい（　　）。',
        questionEn: 'He must be busy.',
        options: ['に違いない', 'ばかりだ', 'おかげだ', 'せいだ'],
        answer: 'に違いない'
      },
      {
        id: 50, type: 'fill',
        question: '経済は回復し（　　）あります。',
        questionEn: 'The economy is in the process of recovering.',
        options: ['つつ', 'ばかり', 'おかげ', 'せい'],
        answer: 'つつ'
      },
    ]
  },
  {
    id: 'n2-mixed',
    title: '総合 N2 (Mixed N2)',
    titleEn: 'Mixed N2',
    timeLimit: 480,
    questions: [
      {
        id: 51, type: 'meaning',
        question: '「矛盾」の意味はどれですか？',
        questionEn: 'What is the meaning of 「矛盾」?',
        options: ['contradiction', 'agreement', 'analysis', 'policy'],
        answer: 'contradiction'
      },
      {
        id: 52, type: 'fill',
        question: '大雨（　　）、試合は行われた。',
        questionEn: 'Despite the heavy rain, the match was held.',
        options: ['にもかかわらず', 'からこそ', 'を通じて', '上で'],
        answer: 'にもかかわらず'
      },
      {
        id: 53, type: 'fill',
        question: '彼がそんなことを言う（　　）。',
        questionEn: 'There\'s no way he would say such a thing.',
        options: ['わけがない', 'ざるを得ない', 'ものの', 'つつ'],
        answer: 'わけがない'
      },
      {
        id: 54, type: 'fill',
        question: '状況を考えると、計画を変更（　　）。',
        questionEn: 'Considering the situation, we have no choice but to change the plan.',
        options: ['せざるを得ない', 'するわけがない', 'するからこそ', 'した上で'],
        answer: 'せざるを得ない'
      },
      {
        id: 55, type: 'fill',
        question: '人口の増加（　　）、交通渋滞も増えている。',
        questionEn: 'Along with the increase in population, traffic jams are also increasing.',
        options: ['に伴って', 'を通じて', 'にもかかわらず', 'からこそ'],
        answer: 'に伴って'
      },
      {
        id: 56, type: 'fill',
        question: '努力した（　　）、結果を出せた。',
        questionEn: 'It\'s precisely because I made an effort that I achieved results.',
        options: ['からこそ', 'ものの', 'ばかり', 'つつ'],
        answer: 'からこそ'
      },
      {
        id: 57, type: 'meaning',
        question: '「根拠」の意味はどれですか？',
        questionEn: 'What is the meaning of 「根拠」?',
        options: ['grounds, basis', 'crisis', 'trend', 'contradiction'],
        answer: 'grounds, basis'
      },
      {
        id: 58, type: 'fill',
        question: 'よく考えた（　　）、返事をします。',
        questionEn: 'I will reply after thinking it over carefully.',
        options: ['上で', 'ものの', 'からこそ', 'にもかかわらず'],
        answer: '上で'
      },
    ]
  },
  {
    id: 'n1-mixed',
    title: '総合 N1 (Mixed N1)',
    titleEn: 'Mixed N1',
    timeLimit: 480,
    questions: [
      {
        id: 59, type: 'meaning',
        question: '「妥協」の意味はどれですか？',
        questionEn: 'What is the meaning of 「妥協」?',
        options: ['compromise', 'deviation', 'exclusion', 'tension'],
        answer: 'compromise'
      },
      {
        id: 60, type: 'fill',
        question: '台風のため、試合は中止（　　）。',
        questionEn: 'Due to the typhoon, the match was forced to be cancelled.',
        options: ['を余儀なくされた', 'にほかならない', 'きらいがある', 'べからず'],
        answer: 'を余儀なくされた'
      },
      {
        id: 61, type: 'fill',
        question: 'これは努力の結果（　　）。',
        questionEn: 'This is nothing but the result of effort.',
        options: ['にほかならない', 'を余儀なくされる', 'きらいがある', 'べからず'],
        answer: 'にほかならない'
      },
      {
        id: 62, type: 'meaning',
        question: '「顕著」の意味はどれですか？',
        questionEn: 'What is the meaning of 「顕著」?',
        options: ['remarkable', 'latent', 'balanced', 'excluded'],
        answer: 'remarkable'
      },
      {
        id: 63, type: 'fill',
        question: '彼は物事を悲観的に考える（　　）がある。',
        questionEn: 'He tends to think about things pessimistically.',
        options: ['きらい', 'わけ', 'つもり', 'はず'],
        answer: 'きらい'
      },
      {
        id: 64, type: 'meaning',
        question: '「普及」の意味はどれですか？',
        questionEn: 'What is the meaning of 「普及」?',
        options: ['diffusion, spread', 'exclusion', 'compromise', 'balance'],
        answer: 'diffusion, spread'
      },
      {
        id: 65, type: 'fill',
        question: '立ち入る（　　）。',
        questionEn: 'Do not enter. (formal prohibition sign)',
        options: ['べからず', 'てもいい', 'かもしれない', 'つもりだ'],
        answer: 'べからず'
      },
      {
        id: 66, type: 'meaning',
        question: '「均衡」の意味はどれですか？',
        questionEn: 'What is the meaning of 「均衡」?',
        options: ['balance', 'tension', 'deviation', 'fusion'],
        answer: 'balance'
      },
    ]
  },
];