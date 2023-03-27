import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useProvider } from "../../context/provider";
import SearchIcon from "../icons/search-icon";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const { setheaderValue } = useProvider();
  const navigate = useNavigate();
  const getImage = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setheaderValue(inputValue);
      setInputValue("");
    }
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => getImage(e)}>
        <div className=" flex flex-row ">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-tl-lg rounded-bl-lg bg-white focus:ring-blue-500 focus:outline-none "
            placeholder="Search "
            required=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-white border-none  font-medium rounded-tr-lg rounded-br-lg text-sm px-4 py-2"
          >
            <SearchIcon className="w-6 h-6 text-[#dc4100] " />
          </button>
        </div>
      </form>
    </div>
  );
}
