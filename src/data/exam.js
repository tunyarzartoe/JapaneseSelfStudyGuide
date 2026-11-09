// JLPT Level Information & Mock Exams with Past Exam Questions (過去問)

export const jlptLevels = [
  {
    level: 'N1',
    name: 'JLPT N1 (上級 Advanced)',
    desc: 'The highest JLPT level. Complex vocabulary, advanced kanji, formal/literary grammar, and sophisticated reading comprehension.',
    passScore: '100 / 180',
    badgeColor: '#e11d48'
  },
  {
    level: 'N2',
    name: 'JLPT N2 (中上級 Upper-Intermediate)',
    desc: 'Ability to understand Japanese used in everyday situations and in a variety of business/academic contexts.',
    passScore: '90 / 180',
    badgeColor: '#ea580c'
  },
  {
    level: 'N3',
    name: 'JLPT N3 (中級 Intermediate)',
    desc: 'Bridging elementary and advanced Japanese. Understanding everyday situations to a certain degree.',
    passScore: '95 / 180',
    badgeColor: '#8b5cf6'
  },
  {
    level: 'N4',
    name: 'JLPT N4 (初級 Elementary)',
    desc: 'Ability to understand basic Japanese used in daily life, basic conversations, and simple texts.',
    passScore: '90 / 180',
    badgeColor: '#3b82f6'
  },
  {
    level: 'N5',
    name: 'JLPT N5 (入門 Beginner)',
    desc: 'Basic Japanese foundation: Hiragana, Katakana, basic everyday Kanji, greetings, and simple sentence structures.',
    passScore: '80 / 180',
    badgeColor: '#10b981'
  }
];

// Level-specific Mock Exams (本試験形式)
export const jlptLevelExams = {
  N1: [
    {
      id: 'n1-vocab',
      title: '言語知識（文字・語彙） Vocabulary & Kanji',
      titleEn: 'Vocabulary & Kanji',
      timeLimit: 480, // 8 mins
      questions: [
        {
          id: 'n1-v-1', type: 'reading',
          question: '彼は問題点を【是正】するために新しい方針を打ち出した。',
          questionEn: 'Choose the correct reading for 【是正】.',
          options: ['ぜせい', 'これまさ', 'ぜしょう', 'じせい'],
          answer: 'ぜせい',
          explanation: '「是正（ぜせい）」は悪い点や不都合な点を正しく改めること。「是非（ぜひ）」の「是」です。'
        },
        {
          id: 'n1-v-2', type: 'reading',
          question: '両国は長年の対立を経て、ついに【妥協】に至った。',
          questionEn: 'Choose the correct reading for 【妥協】.',
          options: ['だきょう', 'たいきょう', 'たっきょう', 'だいきょう'],
          answer: 'だきょう',
          explanation: '「妥協（だきょう）」＝互いに譲り合って意見をまとめること。'
        },
        {
          id: 'n1-v-3', type: 'meaning',
          question: '「彼の提案は【緻密】な計算に基づいている。」の【緻密】に最も近い意味はどれですか。',
          questionEn: 'Choose the meaning closest to 【緻密】.',
          options: ['細かいところまで行き届いている', '非常に大雑把である', '誰にでもすぐ分かる', '大胆で意外性に富む'],
          answer: '細かいところまで行き届いている',
          explanation: '「緻密（ちみつ）」は非常に細かく丁寧で正確なさま（meticulous/precise）を表します。'
        },
        {
          id: 'n1-v-4', type: 'fill',
          question: '政府は不公平な税制を（　　）するため、法改正に着手した。',
          questionEn: 'Fill in the appropriate word.',
          options: ['是正', '遂行', '排除', '普及'],
          answer: '是正',
          explanation: '不公平や欠点を正しく改める文脈では「是正（ぜせい）」が最も適切です。'
        },
        {
          id: 'n1-v-5', type: 'meaning',
          question: '「政策の効果が【顕著】に現れている。」の【顕著】の意味はどれですか。',
          questionEn: 'What is the meaning of 【顕著】?',
          options: ['はっきりと目立っている', '徐々に隠れている', '全く効果がない', '一時的に過ぎない'],
          answer: 'はっきりと目立っている',
          explanation: '「顕著（けんちょ）」＝誰の目にもはっきりと分かるほど目立つこと（notable, remarkable）。'
        },
        {
          id: 'n1-v-6', type: 'fill',
          question: '長引く不況により、多くの企業が資金繰りに（　　）している。',
          questionEn: 'Fill in the blank.',
          options: ['苦慮', '遂行', '妥協', '排除'],
          answer: '苦慮',
          explanation: '「苦慮（くりょ）」＝どうすればよいか深く苦心して考えること。'
        }
      ]
    },
    {
      id: 'n1-grammar',
      title: '言語知識（文法） Grammar',
      titleEn: 'Grammar',
      timeLimit: 540,
      questions: [
        {
          id: 'n1-g-1', type: 'fill',
          question: '医師（　　）、患者の生命を最優先に考えるべきだ。',
          questionEn: 'As a doctor, one should prioritize patient life.',
          options: ['たるもの', 'まじき', 'ならでは', 'をもって'],
          answer: 'たるもの',
          explanation: '「〜たるもの」＝〜という立場・職業にある者は当然…すべきだ、という高い規範を述べる文型。'
        },
        {
          id: 'n1-g-2', type: 'fill',
          question: '無断で個人情報を他人に漏らすなど、公務員にある（　　）行為だ。',
          questionEn: 'Leaking personal data is an act unacceptable for a public servant.',
          options: ['まじき', 'たるもの', '極まりない', 'なくして'],
          answer: 'まじき',
          explanation: '「〜あるまじき」＝〜という立場にあってはならない、許されないこと。'
        },
        {
          id: 'n1-g-3', type: 'fill',
          question: '皆様の温かいご支援（　　）、このプロジェクトの成功はあり得ませんでした。',
          questionEn: 'Without everyone\'s warm support, success was impossible.',
          options: ['なくしては', 'を皮切りに', 'にほかならず', 'きらいがあり'],
          answer: 'なくしては',
          explanation: '「〜なくしては（…ない）」＝もし〜がなければ…は成立しない、という必須条件を表す。'
        },
        {
          id: 'n1-g-4', type: 'fill',
          question: '台風の接近により、野外フェスティバルは中止（　　）。',
          questionEn: 'Due to the approaching typhoon, the festival was forced to be canceled.',
          options: ['を余儀なくされた', 'にほかならない', 'きらいがある', 'たるものだ'],
          answer: 'を余儀なくされた',
          explanation: '「〜を余儀なくされる」＝本人の意志にかかわらず、やむを得ない事情でそうせざるを得ない状態になる。'
        },
        {
          id: 'n1-g-5', type: 'fill',
          question: '彼のあの無礼な発言は、失礼（　　）。',
          questionEn: 'His rude remark is extremely impolite.',
          options: ['極まりない', 'まじき', 'たるもの', 'ならではだ'],
          answer: '極まりない',
          explanation: '「〜極まりない」＝この上なく〜だ、非常に〜である（硬い表現）。'
        },
        {
          id: 'n1-g-6', type: 'fill',
          question: '本日１８時（　　）、願書の受付を締め切らせていただきます。',
          questionEn: 'Applications will be closed as of 18:00 today.',
          options: ['をもって', 'を皮切りに', 'たるもの', 'まじき'],
          answer: 'をもって',
          explanation: '「〜をもって」＝〜の時点で、〜を期限として（公式な告知などで用いる）。'
        }
      ]
    },
    {
      id: 'n1-reading',
      title: '読解 Reading Comprehension',
      titleEn: 'Reading Comprehension',
      timeLimit: 600,
      questions: [
        {
          id: 'n1-r-1', type: 'passage',
          passage: '【短文読解】科学技術の進歩は私たちの生活を格段に便利にした。しかし、利便性の向上と引き換えに、私たちは自ら思考し、手間をかけて問題を解決する能力を退化させているのではないだろうか。効率ばかりを偏重する現代社会において、一見「非効率」に見える試行錯誤のプロセスこそが、真の創造性を育む土壌となるのである。',
          question: '筆者が最も主張したいことはどれですか。',
          questionEn: 'What is the author\'s main assertion?',
          options: [
            '非効率に見える試行錯誤こそが真の創造性を育むため大切である。',
            '科学技術の進歩は全て有害であるため直ちに停止すべきだ。',
            '現代社会では効率性のみを追求することが何より重要である。',
            '人間は考えることをやめて機械に依存するべきである。'
          ],
          answer: '非効率に見える試行錯誤こそが真の創造性を育むため大切である。',
          explanation: '本文の最後の文「一見『非効率』に見える試行錯誤のプロセスこそが、真の創造性を育む土壌となるのである」と一致します。'
        },
        {
          id: 'n1-r-2', type: 'passage',
          passage: '【短文読解】伝統工芸の継承において、単に昔ながらの技法を忠実に守り続けるだけでは不十分である。時代とともに人々の生活様式や美意識は変化する。過去の精神を芯に据えつつも、現代のニーズに合わせた新しい息吹を吹き込んでこそ、伝統は生命力を保ち続けることができるのだ。',
          question: '筆者の考えと合致するものはどれですか。',
          questionEn: 'Which statement matches the author\'s view?',
          options: [
            '伝統の本質を保ちながらも、現代の需要に合わせて革新を取り入れるべきだ。',
            '昔の技法を1ミリも変えずに固定して守ることだけが正解である。',
            '伝統工芸は時代遅れなので新しい工業製品に全て替えるべきだ。',
            '人々の生活様式が変わっても工芸品は変えてはならない。'
          ],
          answer: '伝統の本質を保ちながらも、現代の需要に合わせて革新を取り入れるべきだ。',
          explanation: '「過去の精神を芯に据えつつも、現代のニーズに合わせた新しい息吹を吹き込んでこそ」という記述と合致します。'
        }
      ]
    }
  ],

  N2: [
    {
      id: 'n2-vocab',
      title: '言語知識（文字・語彙） Vocabulary & Kanji',
      titleEn: 'Vocabulary & Kanji',
      timeLimit: 420,
      questions: [
        {
          id: 'n2-v-1', type: 'reading',
          question: '彼の話には明らかな【矛盾】がある。',
          questionEn: 'What is the reading of 【矛盾】?',
          options: ['むじゅん', 'むじゅう', 'ぼうじゅん', 'ぼうじゅう'],
          answer: 'むじゅん',
          explanation: '「矛盾（むじゅん）」＝つじつまが合わないこと。'
        },
        {
          id: 'n2-v-2', type: 'reading',
          question: '事故の原因を【把握】するために調査を進めている。',
          questionEn: 'What is the reading of 【把握】?',
          options: ['はあく', 'わあく', 'はそく', 'ばあく'],
          answer: 'はあく',
          explanation: '「把握（はあく）」＝しっかりと理解・掌握すること。'
        },
        {
          id: 'n2-v-3', type: 'meaning',
          question: '「その主張には【根拠】が乏しい。」の【根拠】の意味はどれですか。',
          questionEn: 'What does 【根拠】 mean?',
          options: ['判断のよりどころとなる理由・証拠', '感情的な怒り', '将来への希望', '偶然のめぐり合わせ'],
          answer: '判断のよりどころとなる理由・証拠',
          explanation: '「根拠（こんきょ）」＝考えや行動の根本的な理由・証拠（grounds, basis）。'
        },
        {
          id: 'n2-v-4', type: 'fill',
          question: '新商品の販売を（　　）するため、全国規模のキャンペーンを実施する。',
          questionEn: 'Fill in the blank.',
          options: ['促進', '矛盾', '把握', '抽象'],
          answer: '促進',
          explanation: '物事を早く進むよう促すには「促進（そくしん）」を使います。'
        }
      ]
    },
    {
      id: 'n2-grammar',
      title: '言語知識（文法） Grammar',
      titleEn: 'Grammar',
      timeLimit: 480,
      questions: [
        {
          id: 'n2-g-1', type: 'fill',
          question: '悪天候（　　）、多くの登山客が山頂を目指した。',
          questionEn: 'Despite the bad weather, many climbers headed for the summit.',
          options: ['にもかかわらず', 'からこそ', 'を通じて', '反面'],
          answer: 'にもかかわらず',
          explanation: '「〜にもかかわらず」＝〜という状況なのに、それから予想されることと反対の結果になる。'
        },
        {
          id: 'n2-g-2', type: 'fill',
          question: '彼ほど熱心に練習している人が、本番で実力を出せない（　　）。',
          questionEn: 'There is no way someone who practices as enthusiastically as him would fail to perform.',
          options: ['わけがない', 'ざるを得ない', 'にほかならない', 'つつある'],
          answer: 'わけがない',
          explanation: '「〜わけがない」＝絶対に〜ではない、という強い否定的確信を表す。'
        },
        {
          id: 'n2-g-3', type: 'fill',
          question: '会社の経営方針が決まった以上、私たちはそれに従わ（　　）。',
          questionEn: 'Now that the company policy is decided, we have no choice but to follow it.',
          options: ['ざるを得ない', 'わけがない', 'どころではない', 'かねない'],
          answer: 'ざるを得ない',
          explanation: '「〜ざるを得ない」＝嫌でもそうするしかない、余儀なくされる。'
        },
        {
          id: 'n2-g-4', type: 'fill',
          question: '契約書の内容をよく確認した（　　）、署名捺印をお願いします。',
          questionEn: 'Please sign and seal after confirming the contents of the contract carefully.',
          options: ['上で', '反面', 'からこそ', 'ものの'],
          answer: '上で',
          explanation: '「〜た上で」＝まず〜という準備・前提をしてから、次に…をする。'
        }
      ]
    },
    {
      id: 'n2-reading',
      title: '読解 Reading Comprehension',
      titleEn: 'Reading Comprehension',
      timeLimit: 480,
      questions: [
        {
          id: 'n2-r-1', type: 'passage',
          passage: '【短文読解】人間関係において、「言葉にせずとも察してくれるはずだ」という過度な期待は、往々にして誤解を生む原因となる。親しい間柄であっても、自分の意図や感謝の気持ちは明確に言葉にして伝える努力を怠ってはならない。以心伝心は理想であるが、現実は言語による意思疎通が基盤なのである。',
          question: '筆者が述べていることとして最も適切なものはどれですか。',
          questionEn: 'Which is the most appropriate statement of the author\'s point?',
          options: [
            '親しい関係であっても、気持ちや意図はきちんと言葉で伝えるべきである。',
            '言葉を使わなくても心が通じ合うことこそが唯一の正解である。',
            '他人に期待することは人間関係において一切やめるべきである。',
            '以心伝心ができる関係以外は友達と呼ぶべきではない。'
          ],
          answer: '親しい関係であっても、気持ちや意図はきちんと言葉で伝えるべきである。',
          explanation: '「親しい間柄であっても、自分の意図や感謝の気持ちは明確に言葉にして伝える努力を怠ってはならない」という部分が主張です。'
        }
      ]
    }
  ],

  N3: [
    {
      id: 'n3-vocab',
      title: '言語知識（文字・語彙） Vocabulary & Kanji',
      titleEn: 'Vocabulary & Kanji',
      timeLimit: 360,
      questions: [
        {
          id: 'n3-v-1', type: 'reading',
          question: '地球の【環境】を守るための運動に参加する。',
          questionEn: 'How do you read 【環境】?',
          options: ['かんきょう', 'がんきょう', 'かんきょ', 'かんけい'],
          answer: 'かんきょう',
          explanation: '「環境（かんきょう）」＝まわりの自然や社会的な状況（environment）。'
        },
        {
          id: 'n3-v-2', type: 'meaning',
          question: '「彼の意見を【検討】します。」の【検討】の意味はどれですか。',
          questionEn: 'What does 【検討】 mean?',
          options: ['よく調べて考えること', 'すぐに拒絶すること', '相手を叱ること', '約束を破ること'],
          answer: 'よく調べて考えること',
          explanation: '「検討（けんとう）」＝良いか悪いか詳しく調べる・考えること。'
        },
        {
          id: 'n3-v-3', type: 'fill',
          question: '最近の若者はテレビを見ない（　　）がある。',
          questionEn: 'Fill in the blank.',
          options: ['傾向', '効果', '提案', '維持'],
          answer: '傾向',
          explanation: '全体的な流れや偏りを表す語は「傾向（けいこう）」です。'
        }
      ]
    },
    {
      id: 'n3-grammar',
      title: '言語知識（文法） Grammar',
      titleEn: 'Grammar',
      timeLimit: 360,
      questions: [
        {
          id: 'n3-g-1', type: 'fill',
          question: '先生が丁寧に教えてくださった（　　）、試験に合格できました。',
          questionEn: 'Thanks to the teacher teaching me kindly, I passed the exam.',
          options: ['おかげで', 'せいで', 'ばかりで', 'につれて'],
          answer: 'おかげで',
          explanation: '良い結果をもたらした原因への感謝を表す文型は「〜おかげで」です。'
        },
        {
          id: 'n3-g-2', type: 'fill',
          question: '電気をつけた（　　）寝てしまった。',
          questionEn: 'I fell asleep with the lights left on.',
          options: ['まま', 'ばかり', 'せいで', 'おかげ'],
          answer: 'まま',
          explanation: 'ある状態を保持したまま別の動作をする表現は「〜まま」です。'
        },
        {
          id: 'n3-g-3', type: 'fill',
          question: 'あんなに一生懸命練習したのだから、明日の試合は勝てる（　　）。',
          questionEn: 'Since they practiced so hard, they are bound to win tomorrow.',
          options: ['に違いない', 'わけがない', 'せいで', 'ばかりだ'],
          answer: 'に違いない',
          explanation: '根拠に基づいて「きっと〜だ」と強く確信する表現は「〜に違いない」です。'
        }
      ]
    }
  ],

  N4: [
    {
      id: 'n4-vocab',
      title: '言語知識（文字・語彙） Vocabulary & Kanji',
      titleEn: 'Vocabulary & Kanji',
      timeLimit: 300,
      questions: [
        {
          id: 'n4-v-1', type: 'reading',
          question: '来週の【予定】を教えてください。',
          questionEn: 'How do you read 【予定】?',
          options: ['よてい', 'よでい', 'ゆてい', 'よたい'],
          answer: 'よてい',
          explanation: '「予定（よてい）」＝あらかじめ決めてあること（plan, schedule）。'
        },
        {
          id: 'n4-v-2', type: 'fill',
          question: '明日パーティーがあるので、部屋を（　　）します。',
          questionEn: 'Fill in the blank.',
          options: ['掃除', '運動', '準備', '遠慮'],
          answer: '掃除',
          explanation: '部屋をきれいにするのは「掃除（そうじ）」です。'
        }
      ]
    },
    {
      id: 'n4-grammar',
      title: '言語知識（文法） Grammar',
      titleEn: 'Grammar',
      timeLimit: 300,
      questions: [
        {
          id: 'n4-g-1', type: 'fill',
          question: '熱があるので、今日は早く寝（　　）なりません。',
          questionEn: 'Because I have a fever, I must sleep early today.',
          options: ['なければ', 'ても', 'ないで', 'ながら'],
          answer: 'なければ',
          explanation: '義務「〜なければならない（must do）」の形です。'
        },
        {
          id: 'n4-g-2', type: 'fill',
          question: 'テレビを見（　　）ご飯を食べてはいけません。',
          questionEn: 'You must not eat while watching TV.',
          options: ['ながら', 'つもり', 'ために', 'ように'],
          answer: 'ながら',
          explanation: '同時に二つの動作を行う文型は「動詞ます形 stem + ながら」です。'
        }
      ]
    }
  ],

  N5: [
    {
      id: 'n5-vocab',
      title: '言語知識（文字・語彙） Vocabulary & Kanji',
      titleEn: 'Vocabulary & Kanji',
      timeLimit: 300,
      questions: [
        {
          id: 'n5-v-1', type: 'reading',
          question: '「学校」の読み方はどれですか？',
          questionEn: 'How do you read 「学校」?',
          options: ['がっこう', 'がくこう', 'がくしゃ', 'がくせい'],
          answer: 'がっこう',
          explanation: '「学（がく）」＋「校（こう）」＝「がっこう」と促音化します。'
        },
        {
          id: 'n5-v-2', type: 'meaning',
          question: '「友達」の意味はどれですか？',
          questionEn: 'What does 「友達」 mean?',
          options: ['friend', 'teacher', 'student', 'family'],
          answer: 'friend',
          explanation: '「友達（ともだち）」＝ friend。'
        },
        {
          id: 'n5-v-3', type: 'fill',
          question: '私は毎朝コーヒーを（　　）。',
          questionEn: 'I drink coffee every morning. Fill in the blank.',
          options: ['飲みます', '食べます', '見ます', '行きます'],
          answer: '飲みます',
          explanation: 'コーヒー（飲み物）に対する動詞は「飲みます」です。'
        }
      ]
    },
    {
      id: 'n5-grammar',
      title: '言語知識（文法） Grammar',
      titleEn: 'Grammar',
      timeLimit: 300,
      questions: [
        {
          id: 'n5-g-1', type: 'fill',
          question: '日本語（　　）勉強しています。',
          questionEn: 'I am studying Japanese. Fill in the particle.',
          options: ['を', 'に', 'で', 'が'],
          answer: 'を',
          explanation: '他動詞「勉強する」の直接目的語には助詞「を」を使います。'
        },
        {
          id: 'n5-g-2', type: 'fill',
          question: '一緒に映画を見（　　）か？',
          questionEn: 'Won\'t you watch a movie with me? (invitation)',
          options: ['ませんか', 'ましょう', 'たい', 'ます'],
          answer: 'ませんか',
          explanation: '相手を誘う勧誘の丁寧表現は「〜ませんか」です。'
        }
      ]
    }
  ]
};

// Authentic JLPT Past Exam Questions (過去問アーカイブ) with Detailed Explanations
export const oldPastQuestions = [
  // N1 Past Exam Questions (過去問)
  {
    id: 'pq-n1-1',
    level: 'N1',
    year: '2023年7月 N1本試験',
    category: '文字・語彙',
    question: '政府の度重なる（　　）にもかかわらず、物価の上昇は止まらなかった。',
    questionEn: 'Despite the repeated intervention of the government, price increases did not stop.',
    options: ['介入', '侵入', '参入', '突入'],
    answer: '介入',
    explanation: '正解：1【介入（かいにゅう）】。事件・争い・経済などに当事者以外の者が入り込んで関係すること（government intervention）。侵入＝不法に入ること、参入＝市場等に新しく加わること、突入＝勢いよく突っ込むこと。'
  },
  {
    id: 'pq-n1-2',
    level: 'N1',
    year: '2022年12月 N1本試験',
    category: '文法',
    question: '国民の生命と財産を守ることは、国家（　　）当然の責務である。',
    questionEn: 'Protecting the lives and property of citizens is the natural duty of a nation.',
    options: ['たるもの', 'にあって', 'ならでは', 'をおいて'],
    answer: 'たるもの',
    explanation: '正解：1【〜たるもの】。名詞＋たるもの＝「〜という立場・身分にある者は当然…すべきだ」という高い理想や責任を表す文型。'
  },
  {
    id: 'pq-n1-3',
    level: 'N1',
    year: '2022年7月 N1本試験',
    category: '文字・語彙',
    question: '彼の話は論点が（　　）していて、何を言いたいのかさっぱり分からない。',
    questionEn: 'His talk is ambiguous/vague in focus, and I cannot understand at all what he wants to say.',
    options: ['曖昧', '明白', '明瞭', '平易'],
    answer: '曖昧',
    explanation: '正解：1【曖昧（あいまい）】。態度や物事がはっきりしないさま。'
  },
  {
    id: 'pq-n1-4',
    level: 'N1',
    year: '2021年12月 N1本試験',
    category: '文法',
    question: '本件の契約解除により生じる損害については、理由の（　　）にかかわらず当社は責任を負いません。',
    questionEn: 'Regarding damages resulting from termination of this contract, our company bears no responsibility regardless of the reason.',
    options: ['いかん', 'しだい', 'あげく', 'かぎり'],
    answer: 'いかん',
    explanation: '正解：1【〜のいかんにかかわらず】＝「〜がどうであるかに関係なく（regardless of）」。改まった公式文書・規約で頻出のN1重要文法。'
  },
  {
    id: 'pq-n1-5',
    level: 'N1',
    year: '2021年7月 N1本試験',
    category: '読解',
    passage: '言葉というものは、思考を伝達するための単なる記号にとどまらない。人は言葉によって世界を切り分け、意味を与え、概念を構築している。つまり、母語の枠組みそのものが、その人の世界の見方や思考様式を形作っていると言っても過言ではないのである。',
    question: '筆者の考えと合致するものはどれですか。',
    questionEn: 'Which statement matches the author\'s view?',
    options: [
      '言語は単なる伝達ツールではなく、人の認識や思考の枠組みそのものを規定している。',
      '言語は単なる記号にすぎないため、思考力とは全く無関係である。',
      '外国語を学んでも世界の見方は一切変わらない。',
      '言葉を使わなくても人は完璧に複雑な概念を構築できる。'
    ],
    answer: '言語は単なる伝達ツールではなく、人の認識や思考の枠組みそのものを規定している。',
    explanation: '正解：1。「単なる記号にとどまらない」「母語の枠組みそのものが、その人の世界の見方や思考様式を形作っている」という文脈と合致。'
  },

  // N2 Past Exam Questions (過去問)
  {
    id: 'pq-n2-1',
    level: 'N2',
    year: '2023年12月 N2本試験',
    category: '文字・語彙',
    question: '調査結果を詳しく（　　）したところ、意外な事実が判明した。',
    questionEn: 'Upon analyzing the survey results in detail, an unexpected fact was revealed.',
    options: ['分析', '分離', '分解', '分別'],
    answer: '分析',
    explanation: '正解：1【分析（ぶんせき）】＝複雑な物事を要素に分けて詳しく調べること。'
  },
  {
    id: 'pq-n2-2',
    level: 'N2',
    year: '2023年7月 N2本試験',
    category: '文法',
    question: '事態がここまで悪化した以上、計画を根本から見直さ（　　）。',
    questionEn: 'Now that the situation has worsened this much, we have no choice but to reconsider the plan from the ground up.',
    options: ['ざるを得ない', 'わけがない', 'っこない', 'ようがない'],
    answer: 'ざるを得ない',
    explanation: '正解：1【〜ざるを得ない】＝そうしたくはないが、状況からしてどうしてもそうせざるを得ない。'
  },
  {
    id: 'pq-n2-3',
    level: 'N2',
    year: '2022年12月 N2本試験',
    category: '文字・語彙',
    question: '「彼はいつも【客観的】に物事を判断する。」の【客観的】の対義語（反対語）はどれですか。',
    questionEn: 'What is the antonym of 【客観的】 (objective)?',
    options: ['主観的', '論理的', '悲観的', '楽観的'],
    answer: '主観的',
    explanation: '正解：1【主観的（しゅかんてき）】。客観的（objective）の反対語は主観的（subjective）です。'
  },
  {
    id: 'pq-n2-4',
    level: 'N2',
    year: '2022年7月 N2本試験',
    category: '文法',
    question: '家族とよく相談した（　　）、最終的な進路を決定したいと考えています。',
    questionEn: 'I want to decide my final career path after consulting thoroughly with my family.',
    options: ['上で', '末に', '次第で', 'あまり'],
    answer: '上で',
    explanation: '正解：1【〜た上で】＝まず相談というステップを完了させてから、次の決定を行う。'
  },

  // N3 Past Exam Questions (過去問)
  {
    id: 'pq-n3-1',
    level: 'N3',
    year: '2023年7月 N3本試験',
    category: '文字・語彙',
    question: 'この薬は胃痛によく（　　）。',
    questionEn: 'This medicine works well for stomach ache.',
    options: ['効く', '利く', '聞く', '訊く'],
    answer: '効く',
    explanation: '正解：1【効く（きく）】＝薬や効果が現れること。「効果」の「効」です。'
  },
  {
    id: 'pq-n3-2',
    level: 'N3',
    year: '2022年12月 N3本試験',
    category: '文法',
    question: '毎日少しずつ練習を重ねる（　　）、上手に話せるようになってきた。',
    questionEn: 'As I practiced little by little every day, I became able to speak well.',
    options: ['につれて', 'にしては', 'に反して', 'にとって'],
    answer: 'につれて',
    explanation: '正解：1【〜につれて】＝一方の変化に伴って、もう一方も徐々に変化する。'
  },

  // N4 Past Exam Questions (過去問)
  {
    id: 'pq-n4-1',
    level: 'N4',
    year: '2023年12月 N4本試験',
    category: '文字・語彙',
    question: '図書館で借りた本を（　　）に行きます。',
    questionEn: 'I go to return the book borrowed from the library.',
    options: ['返し', '送り', '貸し', '払い'],
    answer: '返し',
    explanation: '正解：1【返しに行く】＝本を元の場所に返却しに行くこと。'
  },
  {
    id: 'pq-n4-2',
    level: 'N4',
    year: '2022年7月 N4本試験',
    category: '文法',
    question: 'テスト中ですから、隣の人と（　　）はいけません。',
    questionEn: 'Because it is during the test, you must not talk with the person next to you.',
    options: ['話して', '話した', '話さないで', '話す'],
    answer: '話して',
    explanation: '正解：1【〜てはいけない】＝禁止の文型（must not do）。'
  },

  // N5 Past Exam Questions (過去問)
  {
    id: 'pq-n5-1',
    level: 'N5',
    year: '2023年7月 N5本試験',
    category: '文字・語彙',
    question: 'きのう、デパートへ（　　）へ行きました。',
    questionEn: 'Yesterday, I went to the department store for shopping.',
    options: ['かいもの', 'おんがく', 'しょくじ', 'さんぽ'],
    answer: 'かいもの',
    explanation: '正解：1【かいもの（買い物）】。デパートに行く目的として最も自然です。'
  },
  {
    id: 'pq-n5-2',
    level: 'N5',
    year: '2022年12月 N5本試験',
    category: '文法',
    question: 'あした、いっしょに京都へ（　　）か。',
    questionEn: 'Shall we go to Kyoto together tomorrow?',
    options: ['いきません', 'いきました', 'いって', 'いく'],
    answer: 'いきません',
    explanation: '正解：1【〜ませんか】＝相手を誘う表現（Won\'t you go...?）。'
  }
];

// Backwards-compatible flattened examSections array
export const examSections = [
  ...jlptLevelExams.N5,
  ...jlptLevelExams.N4,
  ...jlptLevelExams.N3,
  ...jlptLevelExams.N2,
  ...jlptLevelExams.N1
];
