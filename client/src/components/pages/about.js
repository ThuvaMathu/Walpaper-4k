import React, { useState } from "react";
import ThemeSwitch from "../elements/theme-switch";
import SearchIcon from "../icons/search-icon";

export default function About() {
  const [darkColor, setDarkColor] = useState(false);

  return (
    <div className={`${darkColor ? "dark" : ""}`}>
      <div className="flex flex-col justify-center items-center h-screen dark:bg-gray-900 bg-white">
        <button
          className="btn m-10 p-5 bg-blue-700 text-white rounded-lg px-10 shadow-sm  "
          type="button"
          onClick={() => setDarkColor(!darkColor)}
        >
          change
        </button>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <SearchIcon />
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes Upside-Down
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}
