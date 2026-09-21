import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner container">
      <div className="footer-brand">
        <span className="footer-logo">日</span>
        <span>学習ガイド — Japanese Self-Study Guide</span>
      </div>
      <div className="footer-links">
        <Link to="/hiragana">Hiragana</Link>
        <Link to="/katakana">Katakana</Link>
        <Link to="/vocabulary">Vocabulary</Link>
        <Link to="/grammar">Grammar</Link>
        <Link to="/kanji-quiz">Kanji Quiz</Link>
        <Link to="/exam">Exam Practice</Link>
        <Link to="/listening">Listening</Link>
      </div>
      <div className="footer-copy">
        © 2024 学習ガイド — Built for Japanese learners worldwide 🇯🇵
      </div>
    </div>
  </footer>
);

export default Footer;
