import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useApp } from '../context/AppContext';
import GlobalSearch from '../components/GlobalSearch';

const navItems = [
  { path: '/', label: 'Home', jp: 'ホーム', icon: '🏠', exact: true },
  { path: '/hiragana', label: 'Hiragana', jp: 'ひらがな', icon: 'あ' },
  { path: '/katakana', label: 'Katakana', jp: 'カタカナ', icon: 'ア' },
  { path: '/vocabulary', label: 'Vocabulary', jp: '語彙', icon: '📖' },
  { path: '/grammar', label: 'Grammar', jp: '文法', icon: '📝' },
  { path: '/kanji-quiz', label: 'Kanji Quiz', jp: '漢字', icon: '漢' },
  { path: '/exam', label: 'Exams', jp: '試験', icon: '📋' },
  { path: '/listening', label: 'Listening', jp: 'リスニング', icon: '🎧' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useApp();

  // Listen for Cmd+K or Ctrl+K shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="navbar-top">
        <div className="container-fluid px-lg-4 navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <span className="logo-char">日</span>
            <div className="logo-text">
              <span className="logo-main">学習ガイド</span>
              <span className="logo-sub">Japanese Self-Study</span>
            </div>
          </Link>

          {/* Desktop Top Navigation Bar (replaces the old sidebar) */}
          <nav className="desktop-nav-tabs">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Right Section: Global Search + Theme Toggle + User */}
          <div className="navbar__right">
            {/* Interactive Spotlight Search Trigger */}
            <button
              className="navbar-search-trigger"
              onClick={() => setIsSearchOpen(true)}
              title="Search Guide (⌘K or Ctrl+K)"
            >
              <span className="search-trigger-icon">🔍</span>
              <span className="search-trigger-text">Search anything...</span>
              <kbd className="search-trigger-kbd">⌘K</kbd>
            </button>

            {/* Dark / Night Mode Toggle */}
            <button
              className="dark-mode-btn"
              onClick={toggleDarkMode}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Night Mode'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Profile Menu */}
            <div className="btn-group">
              <div data-bs-toggle="dropdown" aria-expanded="false" className="profile-trigger" title="User Menu">
                <FaUserCircle size={26} />
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/exam">JLPT Exams</Link></li>
                <li><Link className="dropdown-item" to="/kanji-quiz">Kanji Practice</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-start border-0 bg-transparent" onClick={toggleDarkMode}>
                    {darkMode ? '☀️ Light Mode' : '🌙 Night Mode'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="navbar__menu-btn"
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-panel">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-text">
                  <span className="mobile-en">{item.label}</span>
                  <span className="mobile-jp">{item.jp}</span>
                </span>
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && <div className="backdrop" onClick={() => setMobileMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
