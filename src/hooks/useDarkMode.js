import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('salon-dark-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = saved !== null ? saved === 'true' : prefersDark;
    setIsDark(shouldBeDark);

    // Apply class to html element
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem('salon-dark-mode', newValue);

      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return newValue;
    });
  };

  return [isDark, toggleDarkMode];
};
