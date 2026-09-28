import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// localStorage can throw (private mode, blocked storage) -> never let it crash the app
const readStorage = (key) => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const writeStorage = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
};

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = readStorage('darkMode');           // 'true' | 'false' | null
    if (saved !== null) return saved === 'true';
    // first visit: follow the device setting
    return window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
  });

  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(readStorage('progress')) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    const root = document.documentElement;            // <html>, same element the CSS variables use
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);        // Bootstrap dropdowns etc. follow too
    document.body.removeAttribute('data-theme');     // remove old attribute so it can't conflict
    writeStorage('darkMode', String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    writeStorage('progress', JSON.stringify(progress));
  }, [progress]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const updateProgress = (category, score, total) => {
    setProgress(prev => ({
      ...prev,
      [category]: { score, total, date: new Date().toISOString() }
    }));
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, progress, updateProgress }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);