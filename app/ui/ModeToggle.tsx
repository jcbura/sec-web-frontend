"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex justify-center items-center"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-black/50 dark:text-white/50 hover:fill-blue-500 dark:hover:text-blue-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-black/50 dark:text-white/50 hover:fill-blue-500 hover:text-blue-500" />
      )}
    </button>
  );
};

export default ModeToggle;
