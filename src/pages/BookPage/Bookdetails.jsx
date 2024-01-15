import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => setBookDetails(data.volumeInfo))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <p>Authors: {bookDetails.authors.join(", ")}</p>
      <p>Published Date: {bookDetails.publishedDate}</p>
      <img src={bookDetails.imageLinks.thumbnail} alt="Book Thumbnail" />
      <p>Description: {bookDetails.description}</p>
    </div>
  );
};

export default BookDetailPage;
