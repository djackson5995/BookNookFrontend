import React from "react";
import useAuth from "../../hooks/useAuth";
import FavoritesList from "../../components/FavoritesList/Favorites";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h2>Welcome to your Home Page {user.userName}!</h2>
      <h4>Please navigate to the search page link to begin your search!</h4>
      <Link to="/">Go to Search Page</Link>

      <FavoritesList token={token} />
    </div>
  );
};

export default HomePage;
