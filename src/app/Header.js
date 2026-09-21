import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

const navItems = [
  { path: '/', label: 'Home', exact: true },
  { path: '/hiragana', label: 'Hiragana' },
  { path: '/katakana', label: 'Katakana' },
  { path: '/vocabulary', label: 'Vocabulary' },
  { path: '/grammar', label: 'Grammar' },
  { path: '/kanji-quiz', label: 'Kanji Quiz' },
  { path: '/exam', label: 'Exam' },
  { path: '/listening', label: 'Listening' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useApp();

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <span className="logo-char">日</span>
            <span className="logo-text">
              <span className="logo-main">学習ガイド</span>
              <span className="logo-sub">Japanese Study</span>
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="navbar-search desktop-only">
            <div className="input-group search-group">
              <input
                className="form-control search-input-nav"
                type="search"
                placeholder="Search Japanese..."
                aria-label="Search"
              />
              <span className="search-icon"><i className="bi bi-search"></i></span>
            </div>
          </div>

          {/* Right controls */}
          <div className="navbar__right">
            {/* Dark mode toggle */}
            <button
              className="dark-mode-btn"
              onClick={toggleDarkMode}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Profile */}
            <div className="btn-group">
              <div data-bs-toggle="dropdown" aria-expanded="false" className="profile-trigger">
                <FaUserCircle size={26} />
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Home</Link></li>
              </ul>
            </div>

            {/* Hamburger for mobile */}
            <button className="navbar__menu-btn" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `mobile-menu-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && <div className="backdrop" onClick={() => setMobileMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
