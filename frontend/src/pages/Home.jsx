import { useEffect, useState } from "react";

export default function Home() {
  const [spaceData, setSpaceData] = useState({});

  useEffect(() => {
    getSpaceData();
  }, []);

  async function getSpaceData() {
    const response = await fetch("http://localhost:3000/api/nasa/apod");
    const data = await response.json();
    setSpaceData(data);
  }

  async function saveFavorite() {
    await fetch("http://localhost:3000/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spaceData),
    });

    alert("Saved!");
  }

  return (
    <div>
      <h1>Nova</h1>
      <h2>Discover the Universe</h2>

      <h3>{spaceData.title}</h3>

      <img src={spaceData.url} alt={spaceData.title} />

      <p>{spaceData.explanation}</p>

      <button onClick={saveFavorite}>Save Favorite</button>
    </div>
  );
}