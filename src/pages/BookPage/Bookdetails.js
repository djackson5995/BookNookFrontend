import React from "react";

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      {/* Display other details of the book */}
    </div>
  );
};

export default BookDetails;
