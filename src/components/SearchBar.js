import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({}) => {
  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
