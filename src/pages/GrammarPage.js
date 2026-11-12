import React, { useState, useMemo } from 'react';
import { grammar } from '../data/grammar';

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

const GrammarPage = () => {
  const [level, setLevel] = useState('All');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    let list = level === 'All' ? grammar : grammar.filter(g => g.level === level);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(g =>
        g.pattern.includes(q) ||
        g.meaning.toLowerCase().includes(q) ||
        g.explanation.toLowerCase().includes(q)
      );
    }
    return list;
  }, [level, search]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>📝 文法 Grammar</h2>
        <p className="page-subtitle">Essential JLPT N5–N1 grammar patterns with formulas, explanations, and spoken examples</p>
      </div>

      <div className="filter-bar">
        <div className="level-filter">
          {LEVELS.map(l => (
            <button
              key={l}
              className={`filter-btn ${level === l ? 'active' : ''}`}
              onClick={() => setLevel(l)}
              style={level === l && l !== 'All' ? { background: levelColors[l], color: '#fff', borderColor: levelColors[l] } : {}}
            >
              {l} {l !== 'All' && `(${grammar.filter(g => g.level === l).length})`}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search grammar patterns (e.g., たるもの, わけ, ため)..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <p className="result-count">{filtered.length} grammar patterns found</p>

      <div className="grammar-list">
        {filtered.length === 0 ? (
          <div className="empty-state">No grammar patterns found matching "{search}".</div>
        ) : (
          filtered.map((g) => (
            <div key={g.id} className="grammar-card">
              <div className="grammar-header" onClick={() => setExpanded(expanded === g.id ? null : g.id)}>
                <span className="grammar-pattern">{g.pattern}</span>
                <span className="grammar-badge" style={{ background: levelColors[g.level] || '#6366f1' }}>
                  {g.level}
                </span>
                <span className="grammar-meaning">{g.meaning}</span>
                <span className="grammar-toggle">{expanded === g.id ? '▲' : '▼'}</span>
              </div>
              {expanded === g.id && (
                <div className="grammar-details">
                  <div className="grammar-explanation">
                    <strong>📖 Formula & Usage:</strong> {g.explanation}
                  </div>
                  <div className="grammar-examples">
                    <strong>✏️ Example Sentences:</strong>
                    {g.examples.map((ex, i) => (
                      <div key={i} className="grammar-example">
                        <div className="d-flex align-items-center gap-2">
                          <span className="ex-jp">{ex.jp}</span>
                          <button
                            className="audio-small-btn"
                            title="Hear Japanese audio"
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(ex.jp);
                            }}
                          >
                            🔊
                          </button>
                        </div>
                        <span className="ex-romaji">{ex.romaji}</span>
                        <span className="ex-en">{ex.en}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GrammarPage;
