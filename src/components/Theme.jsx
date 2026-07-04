import { useState, useEffect } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function Theme() {
  const [theme, setTheme] = useState(getStorageTheme());
  const isLightTheme = theme === 'light-theme';

  const toggleTheme = () => {
    setTheme(isLightTheme ? 'dark-theme' : 'light-theme');
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="theme"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} mode`}
    >
      {isLightTheme ? (
        <BsMoonFill aria-hidden="true" />
      ) : (
        <BsFillSunFill aria-hidden="true" style={{ color: '#fbbb05' }} />
      )}
      {isLightTheme ? 'dark' : 'light'} Mode
    </button>
  );
}

export default Theme;
