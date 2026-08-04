import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites() {
    const response = await fetch("http://localhost:3000/api/favorites");
    const data = await response.json();
    setFavorites(data);
  }

  async function deleteFavorite(id) {
  await fetch(`http://localhost:3000/api/favorites/${id}`, {
    method: "DELETE",
  });

  getFavorites();
}

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.map((favorite) => (
        <div key={favorite._id}>
          <h3>{favorite.title}</h3>

          <img
            src={favorite.url}
            alt={favorite.title}
            width="300"
          />

          <p>{favorite.date}</p>

          <button onClick={() => deleteFavorite(favorite._id)}>
  Delete
</button>

        </div>
      ))}
    </div>
  );
}