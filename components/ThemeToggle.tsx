import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="glass w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50 cursor-pointer"
      aria-label="Toggle Theme"
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
};
