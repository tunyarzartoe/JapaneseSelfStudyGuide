import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Home = () => {
  const { progress } = useApp();

  const sections = [
    { path: '/exam', label: 'JLPT Exam & 過去問', jp: '試験・過去問', icon: '📋', color: 'linear-gradient(135deg, #ea2027, #ee5253)', desc: 'JLPT N1–N5 mock exams & authentic past questions (過去問) with full explanations.' },
    { path: '/kanji-quiz', label: 'Kanji Quiz', jp: '漢字クイズ', icon: '漢', color: 'linear-gradient(135deg, #833471, #b53471)', desc: 'JLPT N5–N1 kanji quizzes on readings, stroke counts, and meanings.' },
    { path: '/vocabulary', label: 'Vocabulary', jp: '語彙', icon: '📖', color: 'linear-gradient(135deg, #10ac84, #1dd1a1)', desc: 'N5–N1 vocabulary bank with audio pronunciation & 3D flashcards.' },
    { path: '/grammar', label: 'Grammar', jp: '文法', icon: '📝', color: 'linear-gradient(135deg, #2e86de, #54a0ff)', desc: 'Comprehensive JLPT N5–N1 grammar patterns with spoken examples.' },
    { path: '/listening', label: 'Listening', jp: 'リスニング', icon: '🎧', color: 'linear-gradient(135deg, #00d2d3, #01a3a4)', desc: 'Practice Japanese listening with native speech for business, daily, & travel.' },
    { path: '/hiragana', label: 'Hiragana', jp: 'ひらがな', icon: 'あ', color: 'linear-gradient(135deg, #ff6b6b, #ee5253)', desc: 'Master all 46+ hiragana characters with stroke audio pronunciation.' },
    { path: '/katakana', label: 'Katakana', jp: 'カタカナ', icon: 'ア', color: 'linear-gradient(135deg, #ff9f43, #f368e0)', desc: 'Master katakana for foreign loanwords and modern Japanese.' },
  ];

  const totalScore = Object.values(progress).reduce((acc, p) => acc + (p.score || 0), 0);
  const totalQ = Object.values(progress).reduce((acc, p) => acc + (p.total || 0), 0);

  return (
    <div className="home-page">
      {/* Hero */}
      <div className="hero-banner">
        <div className="hero-text">
          <h1 className="hero-title">日本語 学習ガイド</h1>
          <p className="hero-subtitle">JLPT Self-Study & Exam Preparation Platform</p>
          <p className="hero-desc">Your ultimate interactive platform for mastering Hiragana, Katakana, Vocabulary, Kanji, and authentic JLPT N1–N5 Exam Past Questions (過去問)!</p>
          <div className="hero-badges">
            <span className="badge-level n1">N1 上級</span>
            <span className="badge-level n2">N2 中上級</span>
            <span className="badge-level n3">N3 中級</span>
            <span className="badge-level n4">N4 初級</span>
            <span className="badge-level n5">N5 入門</span>
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

      {/* Recommendations */}
      <div className="tips-box">
        <h5>💡 Recommended Study Route for JLPT Success</h5>
        <ul>
          <li><strong>Beginners (N5/N4):</strong> Start with <strong>Hiragana</strong> & <strong>Katakana</strong> charts with audio, then build essential daily vocabulary and basic particles.</li>
          <li><strong>Intermediate (N3):</strong> Solidify complex verb conjugations, intermediate vocabulary, and transition into authentic reading passages.</li>
          <li><strong>Advanced (N2/N1):</strong> Focus on <strong>JLPT Past Questions (過去問)</strong> and nuanced grammar patterns (such as <em>〜たるもの, 〜まじき, 〜余儀なくされる</em>) with thorough explanations.</li>
          <li><strong>All Levels:</strong> Test your skills under real test pressure using our <strong>Timed Mock Exam</strong> mode!</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
