export const hiragana = [
  // Vowels
  { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' },
  { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
  // K row
  { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' },
  { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
  // S row
  { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' },
  { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
  // T row
  { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' },
  { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
  // N row
  { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' },
  { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
  // H row
  { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' },
  { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
  // M row
  { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' },
  { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
  // Y row
  { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
  // R row
  { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' },
  { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
  // W row
  { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' },
  // N
  { char: 'ん', romaji: 'n' },
  // Dakuten (voiced)
  { char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' },
  { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' },
  { char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' },
  { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' },
  { char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'di' }, { char: 'づ', romaji: 'du' },
  { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' },
  { char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' },
  { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' },
  // Handakuten
  { char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' },
  { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' },
];

export const hiraganaGroups = [
  { label: 'Vowels あ行', chars: ['あ','い','う','え','お'] },
  { label: 'K Row か行', chars: ['か','き','く','け','こ'] },
  { label: 'S Row さ行', chars: ['さ','し','す','せ','そ'] },
  { label: 'T Row た行', chars: ['た','ち','つ','て','と'] },
  { label: 'N Row な行', chars: ['な','に','ぬ','ね','の'] },
  { label: 'H Row は行', chars: ['は','ひ','ふ','へ','ほ'] },
  { label: 'M Row ま行', chars: ['ま','み','む','め','も'] },
  { label: 'Y Row や行', chars: ['や','ゆ','よ'] },
  { label: 'R Row ら行', chars: ['ら','り','る','れ','ろ'] },
  { label: 'W Row わ行', chars: ['わ','を'] },
  { label: 'N ん', chars: ['ん'] },
  { label: 'Voiced が行', chars: ['が','ぎ','ぐ','げ','ご'] },
  { label: 'Voiced ざ行', chars: ['ざ','じ','ず','ぜ','ぞ'] },
  { label: 'Voiced だ行', chars: ['だ','ぢ','づ','で','ど'] },
  { label: 'Voiced ば行', chars: ['ば','び','ぶ','べ','ぼ'] },
  { label: 'Semi-voiced ぱ行', chars: ['ぱ','ぴ','ぷ','ぺ','ぽ'] },
];
