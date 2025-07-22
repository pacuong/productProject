import React from "react";

export const themes = {
  light: {
    white: "#000000",
    background: "#eeeeee",
  },
  dark: {
    white: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});


