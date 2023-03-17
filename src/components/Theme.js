import React, { useState, useEffect } from "react";
import { BsMoonStars } from "react-icons/bs";
import { GiSun } from "react-icons/gi";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Theme = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme" onClick={toggleTheme}>
      {theme === "light-theme" ? (
        <BsMoonStars />
      ) : (
        <GiSun style={{ color: "#fbbb05" }} />
      )}
      {theme === "light-theme" ? "dark" : "light"} Mode
    </div>
  );
};

export default Theme;
