import React from "react";
import useAuth from "../../hooks/useAuth";
import FavoritesList from "../../components/FavoritesList/Favorites";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();

  return (
    <div className="container">
      <div className="welcome-container">
        <h2 className="welcome-message">
          Welcome to your Home Page, {user.userName}!
        </h2>
        <p className="instruction">
          Please navigate to the search page link to begin your search.
        </p>
        <Link to="/" className="search-link">
          Go to Search Page
        </Link>
      </div>

      <FavoritesList token={token} />
    </div>
  );
};

export default HomePage;
