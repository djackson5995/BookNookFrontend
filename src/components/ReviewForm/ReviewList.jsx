import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ bookId, token }) => {
  const [reviewContent, setReviewContent] = useState("");
  const [error, setError] = useState(null);

  const handleReviewSubmit = async () => {
    try {
      await axios.post(
        "https://localhost:5001/api/Reviews", // Update the API endpoint
        {
          bookId,
          content: reviewContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReviewContent("");
      setError(null);
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Error submitting review. Please try again later.");
    }
  };

  return (
    <div>
      <h3>Write a Review:</h3>
      <textarea
        value={reviewContent}
        onChange={(e) => setReviewContent(e.target.value)}
        placeholder="Write your review here..."
        rows="4"
        cols="50"
      ></textarea>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
