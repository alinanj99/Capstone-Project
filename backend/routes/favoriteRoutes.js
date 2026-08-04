import express from "express";
import Favorite from "../models/Favorite.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const favorites = await Favorite.find();
  res.json(favorites);
});

router.post("/", async (req, res) => {
  const favorite = await Favorite.create(req.body);
  res.json(favorite);
});

router.delete("/:id", async (req, res) => {
  await Favorite.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

export default router;