import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a album of your choice
"
      />
      <div className="search-icon">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
