interface Theme {
  white: string;
  background: string;
}

interface ThemeProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeTogglerButton = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.background,
        color: theme.white,
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeTogglerButton;
