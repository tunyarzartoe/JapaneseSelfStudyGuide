import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('progress')) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress));
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
