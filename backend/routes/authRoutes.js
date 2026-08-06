import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });

  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.json({ message: "User not found" });

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.json({ message: "Incorrect password" });
  }

  res.json({
    token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET),
    name: user.name,
  });
});

export default router;