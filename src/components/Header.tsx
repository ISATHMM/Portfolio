"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-800 shadow-md py-2" : "bg-transparent dark:bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Mohamed Isath

        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="mr-4">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors capitalize dark:text-gray-300 dark:hover:text-blue-400"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <MoonIcon className="h-5 w-5 text-gray-700" /> : <SunIcon className="h-5 w-5 text-yellow-300" />}
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center md:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <MoonIcon className="h-4 w-4 text-gray-700" /> : <SunIcon className="h-4 w-4 text-yellow-300" />}
          </button>

          {/* Menu Button */}
          <button className="text-gray-700 dark:text-gray-300 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors capitalize dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
