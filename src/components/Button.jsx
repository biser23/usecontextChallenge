import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={theme === 'light' ? 'light' : 'dark'}>
      Change Theme
    </button>
  );
}

export default Button;