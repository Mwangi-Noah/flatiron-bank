import React from "react";
import './SearchFilter.css'

function SearchFilter({ handleSearch }) {
  return (
    <div className="search-filter">
      
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