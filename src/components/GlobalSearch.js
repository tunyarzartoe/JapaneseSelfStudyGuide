import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { vocabulary } from '../data/vocabulary';
import { kanji } from '../data/kanji';
import { grammar } from '../data/grammar';
import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';
import { listeningPhrases } from '../data/listening';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const CATEGORIES = [
  { id: 'all', label: 'All Results' },
  { id: 'vocab', label: '📖 Vocab' },
  { id: 'kanji', label: '漢 Kanji' },
  { id: 'grammar', label: '📝 Grammar' },
  { id: 'kana', label: 'あ/ア Kana' },
  { id: 'audio', label: '🎧 Audio' }
];

const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setActiveCategory('all');
    }
  }, [isOpen]);

  // Handle hotkeys (Escape, ArrowUp, ArrowDown, Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prepare searchable dataset
  const allItems = useMemo(() => {
    const items = [];

    // Vocabulary
    vocabulary.forEach(v => {
      items.push({
        id: `v-${v.id}`,
        type: 'vocab',
        typeLabel: 'Vocab',
        badgeColor: '#10b981',
        title: v.kanji,
        subtitle: `${v.reading} (${v.romaji})`,
        meaning: v.meaning,
        level: v.level,
        example: v.example,
        path: '/vocabulary',
        audioText: v.reading || v.kanji,
        searchString: `${v.kanji} ${v.reading} ${v.romaji} ${v.meaning} ${v.level}`.toLowerCase()
      });
    });

    // Kanji
    kanji.forEach(k => {
      items.push({
        id: `k-${k.id}`,
        type: 'kanji',
        typeLabel: 'Kanji',
        badgeColor: '#8b5cf6',
        title: k.char,
        subtitle: `Kun: ${k.reading_kun || '-'} | On: ${k.reading_on || '-'}`,
        meaning: k.meaning,
        level: k.level,
        example: k.examples?.join(', '),
        path: '/kanji-quiz',
        audioText: k.char,
        searchString: `${k.char} ${k.meaning} ${k.reading_on} ${k.reading_kun} ${k.level}`.toLowerCase()
      });
    });

    // Grammar
    grammar.forEach(g => {
      items.push({
        id: `g-${g.id}`,
        type: 'grammar',
        typeLabel: 'Grammar',
        badgeColor: '#3b82f6',
        title: g.pattern,
        subtitle: g.meaning,
        meaning: g.explanation,
        level: g.level,
        example: g.examples?.[0]?.jp,
        path: '/grammar',
        audioText: g.examples?.[0]?.jp || g.pattern,
        searchString: `${g.pattern} ${g.meaning} ${g.explanation} ${g.level}`.toLowerCase()
      });
    });

    // Hiragana
    hiragana.forEach((h, i) => {
      items.push({
        id: `h-${i}`,
        type: 'kana',
        typeLabel: 'Hiragana',
        badgeColor: '#ec4899',
        title: h.char,
        subtitle: `Romaji: ${h.romaji}`,
        meaning: `Hiragana '${h.romaji}'`,
        level: 'Basic',
        path: '/hiragana',
        audioText: h.char,
        searchString: `${h.char} ${h.romaji} hiragana`.toLowerCase()
      });
    });

    // Katakana
    katakana.forEach((k, i) => {
      items.push({
        id: `kt-${i}`,
        type: 'kana',
        typeLabel: 'Katakana',
        badgeColor: '#f97316',
        title: k.char,
        subtitle: `Romaji: ${k.romaji}`,
        meaning: `Katakana '${k.romaji}'`,
        level: 'Basic',
        path: '/katakana',
        audioText: k.char,
        searchString: `${k.char} ${k.romaji} katakana`.toLowerCase()
      });
    });

    // Listening
    listeningPhrases.forEach(l => {
      items.push({
        id: `l-${l.id}`,
        type: 'audio',
        typeLabel: 'Listening',
        badgeColor: '#06b6d4',
        title: l.jp,
        subtitle: l.romaji,
        meaning: l.en,
        level: l.category,
        path: '/listening',
        audioText: l.jp,
        searchString: `${l.jp} ${l.romaji} ${l.en} ${l.category}`.toLowerCase()
      });
    });

    return items;
  }, []);

  // Filter items based on query & category
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    let results = allItems;

    if (activeCategory !== 'all') {
      results = results.filter(item => item.type === activeCategory);
    }

    if (!q) {
      // Suggest top popular items
      return results.slice(0, 8);
    }

    return results
      .filter(item => item.searchString.includes(q))
      .slice(0, 25);
  }, [allItems, query, activeCategory]);

  const handleSelect = (item) => {
    navigate(item.path);
    onClose();
  };

  const handleKeyDownInInput = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredResults.length) % (filteredResults.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-card" onClick={e => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-modal-header">
          <span className="search-modal-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search Kanji, Kana, Vocab, Grammar, Romaji, English..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
          />
          {query && (
            <button className="search-modal-clear" onClick={() => setQuery('')}>
              ✕
            </button>
          )}
          <span className="search-modal-shortcut">ESC</span>
        </div>

        {/* Category Filter Pills */}
        <div className="search-modal-categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`search-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedIndex(0);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="search-modal-results" ref={resultsRef}>
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`search-result-row ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="search-result-left">
                    <span className="search-result-badge" style={{ background: item.badgeColor }}>
                      {item.typeLabel}
                    </span>
                    <span className="search-result-title">{item.title}</span>
                    <span className="search-result-subtitle">{item.subtitle}</span>
                  </div>

                  <div className="search-result-right">
                    <span className="search-result-meaning">{item.meaning}</span>
                    {item.level && (
                      <span className="search-result-level">{item.level}</span>
                    )}
                    {item.audioText && (
                      <button
                        className="search-audio-btn"
                        title="Listen pronunciation"
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(item.audioText);
                        }}
                      >
                        🔊
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="search-empty-state">
              <span className="search-empty-icon">🏮</span>
              <h6>No Japanese results found for "{query}"</h6>
              <p>Try searching for words like "食べる", "water", "N5", "dog", "ta-form", or romaji.</p>
            </div>
          )}
        </div>

        {/* Footer Tips */}
        <div className="search-modal-footer">
          <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd></span>
          <span>Select with <kbd>↵ Enter</kbd></span>
          <span>Close with <kbd>ESC</kbd></span>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
