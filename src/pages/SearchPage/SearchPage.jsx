import React, { useState } from "react";
import axios from "axios";
import ResultsList from "../../components/ResultsList";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );

      const books = response.data.items || [];
      setSearchResults(books);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <ResultsList results={searchResults} />
    </div>
  );
};
export default SearchPage;
