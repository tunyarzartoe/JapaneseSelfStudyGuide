import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const footerGroups = [
  {
    title: 'Learn',
    jp: '学ぶ',
    links: [
      { path: '/hiragana', label: 'Hiragana', jp: 'ひらがな', icon: 'あ' },
      { path: '/katakana', label: 'Katakana', jp: 'カタカナ', icon: 'ア' },
      { path: '/vocabulary', label: 'Vocabulary', jp: '語彙', icon: '📖' },
      { path: '/grammar', label: 'Grammar', jp: '文法', icon: '📝' },
    ],
  },
  {
    title: 'Practice',
    jp: '練習',
    links: [
      { path: '/kanji-quiz', label: 'Kanji Quiz', jp: '漢字', icon: '漢' },
      { path: '/exam', label: 'Exam Practice', jp: '試験', icon: '📋' },
      { path: '/listening', label: 'Listening', jp: 'リスニング', icon: '🎧' },
    ],
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner container">
      {/* Brand */}
      <div className="footer-brand-block">
        <Link to="/" className="footer-brand" aria-label="Japanese Self-Study Guide home">
          <img
            src={`${process.env.PUBLIC_URL}/favicon-256.png`}
            alt=""
            className="footer-logo-img"
            width="44"
            height="44"
          />
          <span className="footer-brand-text">
            <span className="footer-brand-main">学習ガイド</span>
            <span className="footer-brand-sub">Japanese Self-Study</span>
          </span>
        </Link>
        <p className="footer-tagline">
          Hiragana, katakana, vocabulary, grammar, kanji, exams and listening —
          everything you need to study Japanese at your own pace.
        </p>
      </div>

      {/* Tabs, grouped */}
      <nav className="footer-nav" aria-label="Footer">
        {footerGroups.map(group => (
          <div className="footer-group" key={group.title}>
            <h3 className="footer-group-title">
              {group.title} <span className="footer-group-jp">{group.jp}</span>
            </h3>
            <div className="footer-tabs">
              {group.links.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `footer-tab ${isActive ? 'active' : ''}`}
                >
                  <span className="footer-tab-icon" aria-hidden="true">{link.icon}</span>
                  <span className="footer-tab-text">
                    <span className="footer-tab-label">{link.label}</span>
                    <span className="footer-tab-jp">{link.jp}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} 学習ガイド — Built for Japanese learners worldwide 🇯🇵
        </div>
        <button
          type="button"
          className="footer-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;