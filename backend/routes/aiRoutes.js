import "dotenv/config";
import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/explain", async (req, res) => {
  const response = await ai.models.generateContent({
   model: "gemini-3.6-flash",
    contents: `Explain this astronomy information in simple English: ${req.body.explanation}`,
  });

  res.json({
    explanation: response.text,
  });
});

export default router;