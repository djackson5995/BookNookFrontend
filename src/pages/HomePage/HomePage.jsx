import React from "react";
import useAuth from "../../hooks/useAuth";
import FavoritesList from "../../components/FavoritesList/Favorites";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();

  return (
    <div className="container">
      <Link to="/">Go to Search Page</Link>
      <h1>Home Page for {user.userName}!</h1>

      <FavoritesList token={token} />
    </div>
  );
};

export default HomePage;
