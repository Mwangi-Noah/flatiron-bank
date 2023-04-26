import React from "react";

function SearchDatabase({searchDb}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search....."
        onChange={searchDb}
      />
    </div>
  );
}

export default SearchDatabase;