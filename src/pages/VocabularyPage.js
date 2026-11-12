import React, { useState, useMemo } from 'react';
import { vocabulary } from '../data/vocabulary';

const LEVELS = ['All', 'N1', 'N2', 'N3', 'N4', 'N5'];

const levelColors = {
  N1: '#e11d48',
  N2: '#ea580c',
  N3: '#8b5cf6',
  N4: '#3b82f6',
  N5: '#10b981'
};

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const VocabularyPage = () => {
  const [level, setLevel] = useState('All');
  const [mode, setMode] = useState('list'); // 'list' | 'flashcard'
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = level === 'All' ? vocabulary : vocabulary.filter(v => v.level === level);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(v =>
        v.kanji.includes(q) || v.reading.includes(q) || v.romaji.includes(q) || v.meaning.toLowerCase().includes(q)
      );
    }
    return list;
  }, [level, search]);

  const nextCard = () => { setCardIndex(i => (i + 1) % filtered.length); setFlipped(false); };
  const prevCard = () => { setCardIndex(i => (i - 1 + filtered.length) % filtered.length); setFlipped(false); };

  const currentCard = filtered[cardIndex];

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>📖 語彙 Vocabulary</h2>
        <p className="page-subtitle">JLPT N5–N1 vocabulary with native audio readings, flashcards, and bilingual example sentences</p>
        <div className="mode-toggle">
          <button className={`mode-btn ${mode === 'list' ? 'active' : ''}`} onClick={() => setMode('list')}>
            📋 List View
          </button>
          <button className={`mode-btn ${mode === 'flashcard' ? 'active' : ''}`} onClick={() => { setMode('flashcard'); setCardIndex(0); setFlipped(false); }}>
            🃏 3D Flashcards
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        <div className="level-filter">
          {LEVELS.map(l => (
            <button
              key={l}
              className={`filter-btn ${level === l ? 'active' : ''}`}
              onClick={() => { setLevel(l); setCardIndex(0); }}
              style={level === l && l !== 'All' ? { background: levelColors[l], color: '#fff', borderColor: levelColors[l] } : {}}
            >
              {l} {l !== 'All' && `(${vocabulary.filter(v => v.level === l).length})`}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Filter vocabulary by kanji, reading, meaning..."
          value={search}
          onChange={e => { setSearch(e.target.value); setCardIndex(0); }}
        />
      </div>

      <p className="result-count">{filtered.length} vocabulary words available</p>

      {/* List Mode */}
      {mode === 'list' && (
        <div className="vocab-list">
          {filtered.length === 0 ? (
            <div className="empty-state">No vocabulary matches your search criteria.</div>
          ) : (
            filtered.map((v) => (
              <div key={v.id} className="vocab-card">
                <div className="vocab-header">
                  <span className="vocab-kanji">{v.kanji}</span>
                  <button
                    className="audio-small-btn"
                    title="Listen pronunciation"
                    onClick={() => speak(v.reading || v.kanji)}
                  >
                    🔊
                  </button>
                  <span className="vocab-reading">【{v.reading}】 ({v.romaji})</span>
                  <span className="vocab-badge" style={{ background: levelColors[v.level] || '#6366f1' }}>
                    {v.level}
                  </span>
                </div>
                <div className="vocab-meaning">👉 {v.meaning}</div>
                {v.example && (
                  <div className="vocab-example">
                    <div className="d-flex align-items-center gap-2">
                      <span className="example-jp">{v.example}</span>
                      <button
                        className="audio-small-btn"
                        title="Listen to sentence"
                        onClick={() => speak(v.example)}
                      >
                        🔊
                      </button>
                    </div>
                    <span className="example-en">{v.exampleEn}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Flashcard Mode */}
      {mode === 'flashcard' && currentCard && (
        <div className="flashcard-container">
          <div className="flashcard-progress">
            Card {cardIndex + 1} of {filtered.length} • JLPT {currentCard.level}
          </div>
          <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="flashcard-front">
              <span className="fc-kanji">{currentCard.kanji}</span>
              <span className="fc-level" style={{ background: levelColors[currentCard.level] }}>{currentCard.level}</span>
              <span className="fc-hint">💡 Tap to reveal reading & meaning</span>
            </div>
            <div className="flashcard-back">
              <span className="fc-reading">【{currentCard.reading}】</span>
              <span className="fc-meaning">{currentCard.meaning}</span>
              <p className="fc-example mt-2">{currentCard.example}</p>
              <p className="fc-example-en text-muted">{currentCard.exampleEn}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3 align-items-center mb-3">
            <button
              className="audio-small-btn"
              title="Pronounce word"
              onClick={() => speak(currentCard.reading || currentCard.kanji)}
            >
              🔊 Hear Word
            </button>
            <button
              className="audio-small-btn"
              title="Pronounce example sentence"
              onClick={() => speak(currentCard.example)}
            >
              🔊 Hear Example Sentence
            </button>
          </div>
          <div className="flashcard-nav">
            <button className="nav-btn" onClick={prevCard}>← Previous</button>
            <button className="nav-btn" onClick={() => setFlipped(!flipped)}>🔄 Flip</button>
            <button className="nav-btn" onClick={nextCard}>Next →</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyPage;
