import React from "react";

function SearchBar({ searchQuery, handleSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by title or category..."
        className="w-full p-2 border rounded"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
