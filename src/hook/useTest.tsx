import { ThemeContext, themes } from '@/component/themeContext';
import { useState } from 'react';
// import { themes, ThemeContext } from '../component/themeContext/index';
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    console.log(1)
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};