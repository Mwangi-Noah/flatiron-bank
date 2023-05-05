import React from "react";
import './SearchFilter.css'

function SearchFilter({ handleSearch }) {
  return (
    <div className="search-filter">
      {/* Create the SearchContainer and a call-back function to handle input values */}
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search by description"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchFilter;