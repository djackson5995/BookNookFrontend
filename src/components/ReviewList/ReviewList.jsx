import React, { useState } from "react";
import axios from "axios";
import "./ReviewList.css";
const ReviewForm = ({ bookId, token }) => {
  const [reviewContent, setReviewContent] = useState("");
  const [error, setError] = useState(null);

  const handleReviewSubmit = async () => {
    try {
      await axios.post(
        "https://localhost:5001/api/Reviews",
        {
          bookId,
          content: reviewContent,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
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
    <form className="row row-cols-lg-auto g-3 align-items-center">
      <div className="col-12">
        <label className="visually-hidden" htmlFor="reviewContent">
          Review Content
        </label>
        <textarea
          className="form-control"
          id="reviewContent"
          placeholder="Write your review here..."
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
      </div>

      {error && (
        <div className="col-12">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}

      <div className="col-12">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleReviewSubmit}
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
