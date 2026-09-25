import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Home = () => {
  const { progress } = useApp();

  const sections = [
    { path: '/hiragana', label: 'Hiragana', jp: 'ひらがな', icon: 'あ', color: 'linear-gradient(135deg, #ff6b6b, #ee5253)', desc: 'Learn all 46+ hiragana characters with practice.' },
    { path: '/katakana', label: 'Katakana', jp: 'カタカナ', icon: 'ア', color: 'linear-gradient(135deg, #ff9f43, #f368e0)', desc: 'Master katakana for foreign loanwords.' },
    { path: '/vocabulary', label: 'Vocabulary', jp: '語彙', icon: '📖', color: 'linear-gradient(135deg, #10ac84, #1dd1a1)', desc: 'N5–N3 vocabulary with example sentences.' },
    { path: '/grammar', label: 'Grammar', jp: '文法', icon: '📝', color: 'linear-gradient(135deg, #2e86de, #54a0ff)', desc: 'Key JLPT grammar patterns explained clearly.' },
    { path: '/kanji-quiz', label: 'Kanji Quiz', jp: '漢字クイズ', icon: '漢', color: 'linear-gradient(135deg, #833471, #b53471)', desc: 'Quiz yourself on kanji readings and meanings.' },
    { path: '/exam', label: 'Exam Practice', jp: '試験練習', icon: '📋', color: 'linear-gradient(135deg, #ea2027, #ee5253)', desc: 'Full JLPT mock exam with timer and results.' },
    { path: '/listening', label: 'Listening', jp: 'リスニング', icon: '🎧', color: 'linear-gradient(135deg, #00d2d3, #01a3a4)', desc: 'Hear Japanese phrases and build listening skills.' },
  ];

  const totalScore = Object.values(progress).reduce((acc, p) => acc + (p.score || 0), 0);
  const totalQ = Object.values(progress).reduce((acc, p) => acc + (p.total || 0), 0);

  return (
    <div className="home-page">
      {/* Hero */}
      <div className="hero-banner">
        <div className="hero-text">
          <h1 className="hero-title">日本語 学習ガイド</h1>
          <p className="hero-subtitle">Welcome to Japanese Self-Study Guide</p>
          <p className="hero-desc">Your ultimate interactive platform for mastering Hiragana, Katakana, Vocabulary, Kanji, and JLPT Exams!</p>
          <div className="hero-badges">
            <span className="badge-level n5">N5</span>
            <span className="badge-level n4">N4</span>
            <span className="badge-level n3">N3</span>
            <span className="badge-level n2">N2</span>
          </div>
        </div>
        <div className="hero-char">日</div>
      </div>

      {/* Progress Summary */}
      {totalQ > 0 && (
        <div className="progress-summary">
          <h5>📊 Your Practice Progress</h5>
          <div className="progress-bar-wrap">
            <div className="progress-bar-fill" style={{ width: `${Math.round((totalScore/totalQ)*100)}%` }}></div>
          </div>
          <p>{totalScore} / {totalQ} correct overall ({Math.round((totalScore/totalQ)*100)}%)</p>
        </div>
      )}

      {/* Section Cards */}
      <h4 className="section-heading">Start Learning & Practice</h4>
      <div className="home-cards-grid">
        {sections.map((s) => {
          const prog = progress[s.label];
          return (
            <Link to={s.path} key={s.path} className="home-card" style={{ '--card-accent-grad': s.color }}>
              <div className="home-card-icon" style={{ background: s.color }}>{s.icon}</div>
              <div className="home-card-body">
                <h5 className="home-card-title">{s.label} <span className="home-card-jp">{s.jp}</span></h5>
                <p className="home-card-desc">{s.desc}</p>
                {prog && (
                  <div className="home-card-prog">
                    ✅ Score: {prog.score}/{prog.total}
                  </div>
                )}
              </div>
              <span className="home-card-arrow">→</span>
            </Link>
          );
        })}
      </div>

      {/* Tips */}
      <div className="tips-box">
        <h5>💡 Study Recommendations</h5>
        <ul>
          <li>Start with <strong>Hiragana</strong> & <strong>Katakana</strong> to build your Japanese reading foundation.</li>
          <li>Review <strong>Vocabulary</strong> and <strong>Grammar</strong> with interactive flashcards.</li>
          <li>Take the <strong>Kanji Quiz</strong> to master JLPT character readings.</li>
          <li>Practice <strong>Listening</strong> with Japanese native audio playback.</li>
          <li>Challenge yourself with simulated <strong>Exam Practice</strong> to get exam-ready!</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
