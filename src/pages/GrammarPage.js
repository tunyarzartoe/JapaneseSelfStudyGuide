import React, { useState, useMemo } from 'react';
import { grammar } from '../data/grammar';

const LEVELS = ['All', 'N5', 'N4', 'N3'];
const levelColors = { N5: '#27ae60', N4: '#2980b9', N3: '#8e44ad' };

const GrammarPage = () => {
  const [level, setLevel] = useState('All');
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => level === 'All' ? grammar : grammar.filter(g => g.level === level), [level]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>📝 文法 Grammar</h2>
        <p className="page-subtitle">Essential JLPT grammar patterns with explanations and examples</p>
      </div>

      <div className="filter-bar">
        <div className="level-filter">
          {LEVELS.map(l => (
            <button key={l} className={`filter-btn ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}
              style={level === l && l !== 'All' ? { background: levelColors[l], color: '#fff', borderColor: levelColors[l] } : {}}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count">{filtered.length} grammar points</p>

      <div className="grammar-list">
        {filtered.map((g) => (
          <div key={g.id} className="grammar-card" onClick={() => setExpanded(expanded === g.id ? null : g.id)}>
            <div className="grammar-header">
              <span className="grammar-pattern">{g.pattern}</span>
              <span className="grammar-badge" style={{ background: levelColors[g.level] }}>{g.level}</span>
              <span className="grammar-meaning">{g.meaning}</span>
              <span className="grammar-toggle">{expanded === g.id ? '▲' : '▼'}</span>
            </div>
            {expanded === g.id && (
              <div className="grammar-details">
                <div className="grammar-explanation">
                  <strong>📖 Explanation:</strong> {g.explanation}
                </div>
                <div className="grammar-examples">
                  <strong>✏️ Examples:</strong>
                  {g.examples.map((ex, i) => (
                    <div key={i} className="grammar-example">
                      <div className="ex-jp">{ex.jp}</div>
                      <div className="ex-romaji">{ex.romaji}</div>
                      <div className="ex-en">{ex.en}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrammarPage;
