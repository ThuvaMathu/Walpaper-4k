import React, { useRef, useState } from "react";

export default function ThemeSwitch() {
  const [isDarkMode, setisDarkMode] = useState(false);
  const switchToggle = useRef(null);
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

  const toggleTheme = () => {
    setisDarkMode(!isDarkMode);
    localStorage.setItem("isDarkmode", isDarkMode);
    switchTheme();
  };

  function switchTheme() {
    if (isDarkMode) {
      switchToggle.current.classList.remove("bg-yellow-500", "-translate-x-2");
      switchToggle.current.classList.add("bg-gray-700", "translate-x-full");
      setTimeout(() => {
        switchToggle.current.innerHTML = darkIcon;
      }, 250);
    } else {
      switchToggle.current.classList.add("bg-yellow-500", "-translate-x-2");
      switchToggle.current.classList.remove("bg-gray-700", "translate-x-full");
      setTimeout(() => {
        switchToggle.current.innerHTML = lightIcon;
      }, 250);
    }
  }
  return (
    <div className=" p-2 m-2 ">
      <button
        className="h-4 w-8 rounded-full bg-slate-300 flex items-center transition duration-300 focus:outline-none shadow"
        onClick={() => toggleTheme()}
      >
        <div
          id="switch-toggle"
          ref={switchToggle}
          className="w-6 h-6 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
