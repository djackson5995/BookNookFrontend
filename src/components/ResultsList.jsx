import React from "react";
import { Link } from "react-router-dom";
import "./Results.css";

const ResultsList = ({ results }) => {
  console.log(results);

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>
              <h3>{book.volumeInfo.title}</h3>
            </Link>
            {book.volumeInfo.authors && (
              <p>Authors: {book.volumeInfo.authors.join(", ")}</p>
            )}
            {book.volumeInfo.publishedDate && (
              <p>Published Date: {book.volumeInfo.publishedDate}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
