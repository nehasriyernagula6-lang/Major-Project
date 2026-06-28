import express from "express";
import Result from "../models/Result.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  const result = new Result(req.body);
  await result.save();
  res.send("Result Saved");
});

router.get("/", async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

export default router;