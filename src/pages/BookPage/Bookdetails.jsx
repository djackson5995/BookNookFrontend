import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams, Link } from "react-router-dom";
import BookDetails from "../../components/Book/Bookdetails";
import ReviewForm from "../../components/ReviewList/ReviewList";

const BookDetailPage = () => {
  const { id: BookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, token] = useAuth();

  useEffect(() => {
    fetchBookDetails();
  }, [BookId, token]);

  const fetchBookDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${BookId}`
      );

      setBookDetails(response.data.volumeInfo);
    } catch (error) {
      console.error("Error fetching book details:", error);
      setError("Error fetching book details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteClick = async () => {
    try {
      await axios.post(
        "https://localhost:5001/api/Favorites",
        { title: BookId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setIsFavorite(true);
    } catch (error) {
      console.error("Error favoriting the book:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="book-detail-page-container">
      <Link to="/home" className="back-to-home-link">
        Go to Home Page
      </Link>
      <BookDetails
        title={bookDetails.title}
        authors={bookDetails.authors}
        publishedDate={bookDetails.publishedDate}
        thumbnail={bookDetails.imageLinks.thumbnail}
        description={bookDetails.description}
        handleFavoriteClick={handleFavoriteClick}
        isFavorite={isFavorite}
      />
      <ReviewForm bookId={BookId} token={token} />
    </div>
  );
};

export default BookDetailPage;
