import { useEffect, useState } from "react";

export default function Home() {
  const [spaceData, setSpaceData] = useState({});
  const [date, setDate] = useState("");
  const [aiExplanation, setAiExplanation] = useState("");

  useEffect(() => {
    getSpaceData();
  }, []);

  async function getSpaceData() {
    let url = "http://localhost:3000/api/nasa/apod";

    if (date) url += `?date=${date}`;

    const response = await fetch(url);
    setSpaceData(await response.json());
  }

  async function saveFavorite() {
    await fetch("http://localhost:3000/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spaceData),
    });

    alert("Saved!");
  }

async function aiExplain() {
  const response = await fetch("http://localhost:3000/api/ai/explain", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      explanation: spaceData.explanation,
    }),
  });

  const data = await response.json();
  setAiExplanation(data.explanation);
}

  return (
    <div>
      <h2>Discover the Universe</h2>

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={getSpaceData}>Search</button>

      <h3>{spaceData.title}</h3>

      {spaceData.media_type === "video" ? (
        <iframe src={spaceData.url} title={spaceData.title} />
      ) : (
        <img src={spaceData.url} alt={spaceData.title} width="600" />
      )}

      <p>{spaceData.explanation}</p>

<button onClick={aiExplain}>
  AI Explain
</button>

<p>{aiExplanation}</p>

<button onClick={saveFavorite}>
  Save Favorite
</button>

    </div>
  );
}