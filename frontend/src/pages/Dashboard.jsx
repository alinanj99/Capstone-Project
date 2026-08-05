import { useEffect, useState } from "react";

export default function Dashboard() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites() {
    const response = await fetch("http://localhost:3000/api/favorites");
    const data = await response.json();
    setFavorites(data);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Total Favorites</h2>
      <p>{favorites.length}</p>
    </div>
  );
}