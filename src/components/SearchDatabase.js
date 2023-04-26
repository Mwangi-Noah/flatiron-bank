import React from "react";

function SearchDatabase({searchDb}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={searchDb}
      />
    </div>
  );
}

export default SearchDatabase;