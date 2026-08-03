import express from "express";

const router = express.Router();

router.get("/apod", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error getting NASA data",
    });
  }
});

export default router;