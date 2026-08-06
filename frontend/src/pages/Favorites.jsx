import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites() {
    const response = await fetch("https://capstone-project-6qdz.onrender.com/api/favorites")
    setFavorites(await response.json());
  }

  async function updateNote(id) {
    const note = prompt("Note");

    await fetch(`https://capstone-project-6qdz.onrender.com/api/favorites/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });

    getFavorites();
  }

  async function deleteFavorite(id) {
    await fetch(`https://capstone-project-6qdz.onrender.com/api/favorites/${id}`, {
      method: "DELETE",
    });

    getFavorites();
  }

  return (
    <main>
      <h1>Favorites</h1>

      {favorites.map((favorite) => (
        <div key={favorite._id}>
          <h3>{favorite.title}</h3>

          {favorite.media_type === "video" ? (
            <iframe src={favorite.url} title={favorite.title} width="650" height="400" />
          ) : (
            <img src={favorite.url} alt={favorite.title} width="650" />
          )}

          <p>{favorite.note}</p>

          <button onClick={() => updateNote(favorite._id)}>Note</button>

          <button onClick={() => deleteFavorite(favorite._id)}>Delete</button>
        </div>
      ))}
   </main>
  );
}