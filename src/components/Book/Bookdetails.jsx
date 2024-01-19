import React from "react";
import "./Bookdetails.css";
const BookDetails = ({
  title,
  authors,
  publishedDate,
  thumbnail,
  description,
  handleFavoriteClick,
  isFavorite,
}) => {
  return (
    <div className="book-details-container">
      <div className="book-details">
        <div className="d-flex w-100 justify-content-between">
          <h2>{title}</h2>
          <small className="text-muted">Published Date: {publishedDate}</small>
        </div>
        <p>Authors: {authors.join(", ")}</p>
        <img src={thumbnail} alt="Book Thumbnail" />
        <p>Description: {description}</p>
        <button onClick={handleFavoriteClick} disabled={isFavorite}>
          {isFavorite ? "Favorited" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
