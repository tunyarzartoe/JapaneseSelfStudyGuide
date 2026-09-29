export const katakana = [
  // Vowels
  { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' },
  { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
  // K row
  { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' },
  { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
  // S row
  { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' },
  { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
  // T row
  { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' },
  { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
  // N row
  { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' },
  { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
  // H row
  { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' },
  { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
  // M row
  { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' },
  { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
  // Y row
  { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
  // R row
  { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' },
  { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
  // W row
  { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' },
  // N
  { char: 'ン', romaji: 'n' },
  // Voiced
  { char: 'ガ', romaji: 'ga' }, { char: 'ギ', romaji: 'gi' }, { char: 'グ', romaji: 'gu' },
  { char: 'ゲ', romaji: 'ge' }, { char: 'ゴ', romaji: 'go' },
  { char: 'ザ', romaji: 'za' }, { char: 'ジ', romaji: 'ji' }, { char: 'ズ', romaji: 'zu' },
  { char: 'ゼ', romaji: 'ze' }, { char: 'ゾ', romaji: 'zo' },
  { char: 'ダ', romaji: 'da' }, { char: 'ヂ', romaji: 'di' }, { char: 'ヅ', romaji: 'du' },
  { char: 'デ', romaji: 'de' }, { char: 'ド', romaji: 'do' },
  { char: 'バ', romaji: 'ba' }, { char: 'ビ', romaji: 'bi' }, { char: 'ブ', romaji: 'bu' },
  { char: 'ベ', romaji: 'be' }, { char: 'ボ', romaji: 'bo' },
  // Semi-voiced
  { char: 'パ', romaji: 'pa' }, { char: 'ピ', romaji: 'pi' }, { char: 'プ', romaji: 'pu' },
  { char: 'ペ', romaji: 'pe' }, { char: 'ポ', romaji: 'po' },
  // Yōon (combination sounds)
  { char: 'キャ', romaji: 'kya' }, { char: 'キュ', romaji: 'kyu' }, { char: 'キョ', romaji: 'kyo' },
  { char: 'シャ', romaji: 'sha' }, { char: 'シュ', romaji: 'shu' }, { char: 'ショ', romaji: 'sho' },
  { char: 'チャ', romaji: 'cha' }, { char: 'チュ', romaji: 'chu' }, { char: 'チョ', romaji: 'cho' },
  { char: 'ニャ', romaji: 'nya' }, { char: 'ニュ', romaji: 'nyu' }, { char: 'ニョ', romaji: 'nyo' },
  { char: 'ヒャ', romaji: 'hya' }, { char: 'ヒュ', romaji: 'hyu' }, { char: 'ヒョ', romaji: 'hyo' },
  { char: 'ミャ', romaji: 'mya' }, { char: 'ミュ', romaji: 'myu' }, { char: 'ミョ', romaji: 'myo' },
  { char: 'リャ', romaji: 'rya' }, { char: 'リュ', romaji: 'ryu' }, { char: 'リョ', romaji: 'ryo' },
  { char: 'ギャ', romaji: 'gya' }, { char: 'ギュ', romaji: 'gyu' }, { char: 'ギョ', romaji: 'gyo' },
  { char: 'ジャ', romaji: 'ja' }, { char: 'ジュ', romaji: 'ju' }, { char: 'ジョ', romaji: 'jo' },
  { char: 'ビャ', romaji: 'bya' }, { char: 'ビュ', romaji: 'byu' }, { char: 'ビョ', romaji: 'byo' },
  { char: 'ピャ', romaji: 'pya' }, { char: 'ピュ', romaji: 'pyu' }, { char: 'ピョ', romaji: 'pyo' },
  // Extended katakana (for foreign loanwords)
  { char: 'ファ', romaji: 'fa' }, { char: 'フィ', romaji: 'fi' }, { char: 'フェ', romaji: 'fe' }, { char: 'フォ', romaji: 'fo' },
  { char: 'ティ', romaji: 'ti' }, { char: 'ディ', romaji: 'di' }, { char: 'トゥ', romaji: 'tu' }, { char: 'ドゥ', romaji: 'du' },
  { char: 'ウィ', romaji: 'wi' }, { char: 'ウェ', romaji: 'we' }, { char: 'ウォ', romaji: 'wo' }, { char: 'ツァ', romaji: 'tsa' },
  { char: 'ツィ', romaji: 'tsi' }, { char: 'ツェ', romaji: 'tse' }, { char: 'ツォ', romaji: 'tso' }, { char: 'ヴ', romaji: 'vu' },
  { char: 'ヴァ', romaji: 'va' }, { char: 'ヴィ', romaji: 'vi' }, { char: 'ヴェ', romaji: 've' }, { char: 'ヴォ', romaji: 'vo' },
  { char: 'シェ', romaji: 'she' }, { char: 'ジェ', romaji: 'je' }, { char: 'チェ', romaji: 'che' },
];

export const katakanaGroups = [
  { label: 'Vowels ア行', chars: ['ア','イ','ウ','エ','オ'] },
  { label: 'K Row カ行', chars: ['カ','キ','ク','ケ','コ'] },
  { label: 'S Row サ行', chars: ['サ','シ','ス','セ','ソ'] },
  { label: 'T Row タ行', chars: ['タ','チ','ツ','テ','ト'] },
  { label: 'N Row ナ行', chars: ['ナ','ニ','ヌ','ネ','ノ'] },
  { label: 'H Row ハ行', chars: ['ハ','ヒ','フ','ヘ','ホ'] },
  { label: 'M Row マ行', chars: ['マ','ミ','ム','メ','モ'] },
  { label: 'Y Row ヤ行', chars: ['ヤ','ユ','ヨ'] },
  { label: 'R Row ラ行', chars: ['ラ','リ','ル','レ','ロ'] },
  { label: 'W Row ワ行', chars: ['ワ','ヲ'] },
  { label: 'N ン', chars: ['ン'] },
  { label: 'Voiced ガ行', chars: ['ガ','ギ','グ','ゲ','ゴ'] },
  { label: 'Voiced ザ行', chars: ['ザ','ジ','ズ','ゼ','ゾ'] },
  { label: 'Voiced ダ行', chars: ['ダ','ヂ','ヅ','デ','ド'] },
  { label: 'Voiced バ行', chars: ['バ','ビ','ブ','ベ','ボ'] },
  { label: 'Semi-voiced パ行', chars: ['パ','ピ','プ','ペ','ポ'] },

  { label: 'Combo キャ行', chars: ['キャ','キュ','キョ'] },
  { label: 'Combo シャ行', chars: ['シャ','シュ','ショ'] },
  { label: 'Combo チャ行', chars: ['チャ','チュ','チョ'] },
  { label: 'Combo ニャ行', chars: ['ニャ','ニュ','ニョ'] },
  { label: 'Combo ヒャ行', chars: ['ヒャ','ヒュ','ヒョ'] },
  { label: 'Combo ミャ行', chars: ['ミャ','ミュ','ミョ'] },
  { label: 'Combo リャ行', chars: ['リャ','リュ','リョ'] },
  { label: 'Voiced combo ギャ行', chars: ['ギャ','ギュ','ギョ'] },
  { label: 'Voiced combo ジャ行', chars: ['ジャ','ジュ','ジョ'] },
  { label: 'Voiced combo ビャ行', chars: ['ビャ','ビュ','ビョ'] },
  { label: 'Semi-voiced combo ピャ行', chars: ['ピャ','ピュ','ピョ'] },
  { label: 'Extended ファ行', chars: ['ファ','フィ','フェ','フォ'] },
  { label: 'Extended ティ/ディ/トゥ/ドゥ', chars: ['ティ','ディ','トゥ','ドゥ'] },
  { label: 'Extended ウィ行', chars: ['ウィ','ウェ','ウォ'] },
  { label: 'Extended ツァ行', chars: ['ツァ','ツィ','ツェ','ツォ'] },
  { label: 'Extended ヴ行', chars: ['ヴ','ヴァ','ヴィ','ヴェ','ヴォ'] },
  { label: 'Extended シェ/ジェ/チェ', chars: ['シェ','ジェ','チェ'] },
];