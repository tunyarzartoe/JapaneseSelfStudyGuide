import React, { useState, useMemo } from 'react';
import { listeningPhrases, listeningCategories } from '../data/listening';

const speak = (text, rate = 0.8) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  }
};

const ListeningPage = () => {
  const [category, setCategory] = useState('All');
  const [speed, setSpeed] = useState(0.8);
  const [showRomaji, setShowRomaji] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);
  const [playingId, setPlayingId] = useState(null);

  const filtered = useMemo(() =>
    category === 'All' ? listeningPhrases : listeningPhrases.filter(p => p.category === category),
    [category]
  );

  const handleSpeak = (phrase) => {
    setPlayingId(phrase.id);
    speak(phrase.jp, speed);
    setTimeout(() => setPlayingId(null), 2000);
  };

  const speakAll = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const texts = filtered.map(p => p.jp + '。');
      let i = 0;
      const speakNext = () => {
        if (i >= texts.length) return;
        const u = new SpeechSynthesisUtterance(texts[i]);
        u.lang = 'ja-JP';
        u.rate = speed;
        u.onend = speakNext;
        window.speechSynthesis.speak(u);
        i++;
      };
      speakNext();
    }
  };

  const stopAll = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setPlayingId(null);
  };

  const categoryEmojis = {
    'All': '🌐', 'Greetings': '👋', 'Numbers': '🔢', 'Common Phrases': '💬', 'Days': '📅', 'Colors': '🎨'
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>🎧 リスニング Listening</h2>
        <p className="page-subtitle">Listen to Japanese phrases with the Web Speech API. Train your ear for real Japanese!</p>
      </div>

      {/* Controls */}
      <div className="listening-controls">
        <div className="filter-bar">
          <div className="level-filter">
            {listeningCategories.map(c => (
              <button key={c} className={`filter-btn ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>
                {categoryEmojis[c]} {c}
              </button>
            ))}
          </div>
        </div>

        <div className="listening-options">
          <div className="speed-control">
            <label>Speed: <strong>{speed === 1 ? 'Normal' : speed === 0.5 ? 'Slow' : 'Medium'}</strong></label>
            <div className="speed-btns">
              <button className={`speed-btn ${speed === 0.5 ? 'active' : ''}`} onClick={() => setSpeed(0.5)}>🐢 Slow</button>
              <button className={`speed-btn ${speed === 0.8 ? 'active' : ''}`} onClick={() => setSpeed(0.8)}>🚶 Medium</button>
              <button className={`speed-btn ${speed === 1 ? 'active' : ''}`} onClick={() => setSpeed(1)}>🏃 Normal</button>
            </div>
          </div>
          <div className="display-toggles">
            <label className="toggle-label">
              <input type="checkbox" checked={showRomaji} onChange={e => setShowRomaji(e.target.checked)} /> Show Romaji
            </label>
            <label className="toggle-label">
              <input type="checkbox" checked={showMeaning} onChange={e => setShowMeaning(e.target.checked)} /> Show Meaning
            </label>
          </div>
        </div>

        <div className="listening-bulk-actions">
          <button className="action-btn play-all" onClick={speakAll}>▶ Play All</button>
          <button className="action-btn stop-all" onClick={stopAll}>⏹ Stop</button>
        </div>
      </div>

      <p className="result-count">{filtered.length} phrases</p>

      {/* Phrase Cards */}
      <div className="listening-grid">
        {filtered.map(phrase => (
          <div key={phrase.id} className={`listening-card ${playingId === phrase.id ? 'playing' : ''}`}>
            <div className="lc-category">{categoryEmojis[phrase.category]} {phrase.category}</div>
            <div className="lc-jp">{phrase.jp}</div>
            {showRomaji && <div className="lc-romaji">{phrase.romaji}</div>}
            {showMeaning && <div className="lc-en">{phrase.en}</div>}
            <button className="speak-btn" onClick={() => handleSpeak(phrase)}>
              {playingId === phrase.id ? '🔊 Playing...' : '▶ Listen'}
            </button>
          </div>
        ))}
      </div>

      {!('speechSynthesis' in window) && (
        <div className="no-speech-warning">
          ⚠ Your browser does not support Web Speech API. Please use Chrome or Edge for audio playback.
        </div>
      )}
    </div>
  );
};

export default ListeningPage;
