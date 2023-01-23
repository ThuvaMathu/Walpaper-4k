import React, { useRef, useState } from "react";
import { useProvider } from "../../context/provider";
import { commonUrl } from "../../services/config";
import SearchIcon from "../icons/search-icon";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const { setImageRes, setIsLoading, setheaderValue } = useProvider();
  const inputRef = useRef();
  const btnRef = useRef();

  const getImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reqData: inputValue, reqPage: 1 }),
    };
    fetch(`${commonUrl}/searchimage`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response, "data");

        if (response.total_results > 0) {
          console.log("data i am working");
          setheaderValue(inputValue);
          setImageRes(response.photos);
          setIsLoading(false);
        } else {
          console.log(response, "no data");
        }
      })
      .then(() => {
        setInputValue("");
      })
      .catch((err) => console.error(err, "error from client"));
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
