import React, { createContext, useState, useEffect } from "react";

export const Themecontext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </Themecontext.Provider>
  );
};
