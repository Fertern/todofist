import React from "react";
import s from "./Search.module.css";

const Search = () => {
  return (
    <div className={s.wrapper}>
      <img
        src="http://www.clker.com/cliparts/z/w/Q/7/f/C/search-logo-hi.png"
        alt=""
      />
      <input
        className={s.bar}
        type="text"
        size="40"
        placeholder="search by title..."
      />
    </div>
  );
};

export default Search;
