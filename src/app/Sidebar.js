import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', jp: 'ホーム', icon: '🏠', exact: true },
  { path: '/hiragana', label: 'Hiragana', jp: 'ひらがな', icon: 'あ' },
  { path: '/katakana', label: 'Katakana', jp: 'カタカナ', icon: 'ア' },
  { path: '/vocabulary', label: 'Vocabulary', jp: '語彙', icon: '📖' },
  { path: '/grammar', label: 'Grammar', jp: '文法', icon: '📝' },
  { path: '/kanji-quiz', label: 'Kanji Quiz', jp: '漢字', icon: '漢' },
  { path: '/exam', label: 'Exam', jp: '試験', icon: '📋' },
  { path: '/listening', label: 'Listening', jp: '聴解', icon: '🎧' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`main_sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="sidebar-collapse-btn" onClick={() => setCollapsed(c => !c)} title={collapsed ? 'Expand' : 'Collapse'}>
        {collapsed ? '›' : '‹'}
      </button>
      <nav>
        <ul className="sidebar__menu">
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `sidebar__link ${isActive ? 'active' : ''}`}
                title={item.label}
              >
                <span className="sidebar-icon">{item.icon}</span>
                {!collapsed && (
                  <span className="sidebar-label">
                    <span className="sidebar-en">{item.label}</span>
                    <span className="sidebar-jp">{item.jp}</span>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
