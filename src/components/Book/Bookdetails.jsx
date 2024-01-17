import React from "react";

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
    <div>
      <h2>{title}</h2>
      <p>Authors: {authors.join(", ")}</p>
      <p>Published Date: {publishedDate}</p>
      <img src={thumbnail} alt="Book Thumbnail" />
      <p>Description: {description}</p>

      <button onClick={handleFavoriteClick} disabled={isFavorite}>
        {isFavorite ? "Favorited" : "Favorite"}
      </button>
    </div>
  );
};

export default BookDetails;
