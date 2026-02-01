"use client";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/src/app/hooks/useTheme";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-200/50 dark:border-white/10">
      <div className="w-full px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a className="hover:opacity-70 transition-opacity" href="#">
            <span className="material-icons-round text-xl">terminal</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-tight text-gray-600 dark:text-gray-400">
            <a
              className="hover:text-primary transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#certificates"
            >
              Certificates
            </a>
            <a className="hover:text-primary transition-colors" href="#stack">
              Stack
            </a>
            <a className="hover:text-primary transition-colors" href="#about">
              About
            </a>
            <a className="hover:text-primary transition-colors" href="#gallery">
              Gallery
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="https://wa.me/6288233181003"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <a
            className="bg-primary text-white text-[11px] px-3 py-1 rounded-full font-medium hover:opacity-90 transition-opacity"
            href="https://drive.google.com/drive/folders/10WkW0B3esW7et5pE7mqmNvgvUQA9x3qb?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
