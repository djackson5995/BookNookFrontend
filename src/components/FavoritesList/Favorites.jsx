import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Favorites.css";

const FavoritesList = ({ token }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFavorites();
  }, [token]);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        "https://localhost:5001/api/Favorites/myFavorites",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setFavorites(response.data);
    } catch (error) {
      console.log("Error fetching favorites:", error);
      setError("Error fetching favorites. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Favorites List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <p>Title: {favorite.title}</p>
          <img src={favorite.thumbnailUrl} alt="Book Thumbnail" />
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
