import { useContext } from "react";
import ThemeTogglerButton from "@/component/butonContext";
import { ThemeContext } from "@/component/themeContext";

const TestPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <ThemeTogglerButton theme={theme} toggleTheme={toggleTheme} />
    </>
  )
}

export default TestPage