import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, SparklesIcon } from "@heroicons/react/24/solid";
import StarsBackground from "./Particles";

export default function CycleThemes() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) {
      return localStorage.theme;
    } else {
      <StarsBackground />;
      return "stars";
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark", "stars"); // Remove all theme classes
    root.classList.add(theme); // Add current theme class
    localStorage.theme = theme;
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === "dark") {
        return "light";
      } else if (prev === "light") {
        return "stars";
      } else {
        return "dark";
      }
    });
  };

  let nextThemeIcon;

  if (theme === "dark") {
    nextThemeIcon = <SunIcon className="w-6 h-6" />; // light next
  } else if (theme === "light") {
    nextThemeIcon = <SparklesIcon className="w-6 h-6" />; // stars next
  } else {
    nextThemeIcon = <MoonIcon className="w-6 h-6" />; // dark next
  }

  return (
    <div>
      {theme === "stars" && <StarsBackground />}
      <button onClick={cycleTheme} className="toggleTheme">
        {nextThemeIcon}
      </button>
    </div>
  );
}
