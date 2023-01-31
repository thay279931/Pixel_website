import React, { useState } from "react";

function Search({ search, setInput }) {
  return (
    <div className="search">
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <button onClick={search}>Search</button>
    </div>
  );
}

export default Search;
