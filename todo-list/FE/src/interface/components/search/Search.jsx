import React from "react";

const Search = () => {
  return (
    <div className="search-wrapper bg-white shadow-md max-w-250 rounded-lg">
      <div className="search-main flex">
        <input
        className="w-[100%] pr-1.5 pb-1.5 pt-1.5 pl-4 focus:outline-none"
          type="text"
          name="search"
          placeholder="Search your task here..."
        />
        <span className="pt-1.5 pb-1.5 pl-2.5 pr-2.5 bg-[#FF6767] rounded-lg">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </span>
      </div>
    </div>
  );
};

export default Search;
