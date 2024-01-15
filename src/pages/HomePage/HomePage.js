import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, [token]);

  const fetchFavorites = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/Favorites", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setFavorites(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      {console.log(user)}
      <h1>Home Page for {user.userName}!</h1>

      {favorites &&
        favorites.map((favorite) => <p key={favorite.id}>{favorite.title}</p>)}
    </div>
  );
};

export default HomePage;
