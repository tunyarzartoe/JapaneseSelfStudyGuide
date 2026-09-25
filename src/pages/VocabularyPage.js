import React, { useState, useMemo } from 'react';
import { vocabulary } from '../data/vocabulary';

const LEVELS = ['All', 'N5', 'N4', 'N3'];

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

  const levelColors = { N5: '#27ae60', N4: '#2980b9', N3: '#8e44ad', N2: '#c0392b' };

  const nextCard = () => { setCardIndex(i => (i + 1) % filtered.length); setFlipped(false); };
  const prevCard = () => { setCardIndex(i => (i - 1 + filtered.length) % filtered.length); setFlipped(false); };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>📖 語彙 Vocabulary</h2>
        <p className="page-subtitle">JLPT N5–N3 vocabulary with readings and example sentences</p>
        <div className="mode-toggle">
          <button className={`mode-btn ${mode === 'list' ? 'active' : ''}`} onClick={() => setMode('list')}>📋 List</button>
          <button className={`mode-btn ${mode === 'flashcard' ? 'active' : ''}`} onClick={() => { setMode('flashcard'); setCardIndex(0); setFlipped(false); }}>🃏 Flashcards</button>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        <div className="level-filter">
          {LEVELS.map(l => (
            <button key={l} className={`filter-btn ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}
              style={level === l && l !== 'All' ? { background: levelColors[l], color: '#fff', borderColor: levelColors[l] } : {}}>
              {l}
            </button>
          ))}
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search kanji, reading, meaning..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <p className="result-count">{filtered.length} words found</p>

      {mode === 'list' && (
        <div className="vocab-list">
          {filtered.map(v => (
            <div key={v.id} className="vocab-card">
              <div className="vocab-header">
                <span className="vocab-kanji">{v.kanji}</span>
                <span className="vocab-reading">{v.reading} ({v.romaji})</span>
                <span className="vocab-badge" style={{ background: levelColors[v.level] }}>{v.level}</span>
              </div>
              <div className="vocab-meaning">🇬🇧 {v.meaning}</div>
              <div className="vocab-example">
                <span className="example-jp">{v.example}</span>
                <span className="example-en">{v.exampleEn}</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="empty-state">No vocabulary found. Try a different search.</div>}
        </div>
      )}

      {mode === 'flashcard' && filtered.length > 0 && (
        <div className="flashcard-container">
          <div className="flashcard-progress">{cardIndex + 1} / {filtered.length}</div>
          <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
            <div className="flashcard-front">
              <div className="fc-kanji">{filtered[cardIndex].kanji}</div>
              <div className="fc-level" style={{ background: levelColors[filtered[cardIndex].level] }}>{filtered[cardIndex].level}</div>
              <p className="fc-hint">Tap to reveal</p>
            </div>
            <div className="flashcard-back">
              <div className="fc-reading">{filtered[cardIndex].reading} ({filtered[cardIndex].romaji})</div>
              <div className="fc-meaning">{filtered[cardIndex].meaning}</div>
              <div className="fc-example">{filtered[cardIndex].example}</div>
              <div className="fc-example-en">{filtered[cardIndex].exampleEn}</div>
            </div>
          </div>
          <div className="flashcard-nav">
            <button className="nav-btn" onClick={prevCard}>← Prev</button>
            <button className="nav-btn" onClick={nextCard}>Next →</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyPage;
