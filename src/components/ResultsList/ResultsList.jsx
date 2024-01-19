import React from "react";
import { Link } from "react-router-dom";
import "./Results.css";

const ResultsList = ({ results }) => {
  console.log(results);

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <div className="list-group">
        {results.map((book) => (
          <Link
            to={`/book/${book.id}`}
            className="list-group-item list-group-item-action"
            key={book.id}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{book.volumeInfo.title}</h5>
              <small className="text-muted">
                {book.volumeInfo.publishedDate}
              </small>
            </div>
            <p className="mb-1">{book.volumeInfo.description}</p>
            <small className="text-muted">
              Authors:{" "}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown"}
            </small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
