import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, [setSearchQuery]);

  return (
    <div className="relative w-full max-w-sm mb-4 mt-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-full px-4 py-2 pl-10 w-full"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SearchBar;
