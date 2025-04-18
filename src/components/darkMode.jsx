import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.theme === "dark") {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="toggleTheme">
      {darkMode ? (
        <MoonIcon className="w-10 h-10" />
      ) : (
        <SunIcon className="w-10 h-10" />
      )}
    </button>
  );
}
