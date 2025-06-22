// src/components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setIsDark(!isDark)}
      title={isDark ? "Light Mode" : "Dark Mode"}
    >
      <span className={`icon ${isDark ? 'rotate' : 'scale'}`}>
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
