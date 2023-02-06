import React, { useState } from "react";
import { useProvider } from "../../context/provider";
import SearchIcon from "../icons/search-icon";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const { setheaderValue } = useProvider();

  const getImage = (e) => {
    e.preventDefault();
    setheaderValue(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={(e) => getImage(e)}>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:outline-none "
            placeholder="Search "
            required=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-3 top-1   bg-white  font-medium rounded-lg text-sm px-4 py-2"
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
