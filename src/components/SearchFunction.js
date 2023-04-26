import React from "react";

function SearchFunction (searchItems){
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search ......"
        onChange={() => searchItems()}
      />
      <i className="icon"></i>
    </div>
  );
}

export default SearchFunction;