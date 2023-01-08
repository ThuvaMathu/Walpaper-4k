import React, { useState } from "react";
import SearchIcon from "../icons/search-icon";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("loading...");
    setTimeout(() => setInputValue("here is your result"), 1000);
    setTimeout(() => setInputValue(""), 2000);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:outline-none "
            placeholder="Search "
            required=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-3 top-1  bg-gray-100  font-medium rounded-lg text-sm px-4 py-2"
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
