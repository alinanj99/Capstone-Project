import express from "express";

const router = express.Router();

router.get("/apod", async (req, res) => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

  if (req.query.date) {
    url += `&date=${req.query.date}`;
  }

  const response = await fetch(url);

  res.json(await response.json());
});

export default router;