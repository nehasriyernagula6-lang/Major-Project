import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("Registered Successfully");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  res.send(user ? user : "Invalid Credentials");
});

export default router;