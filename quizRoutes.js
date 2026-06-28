import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

// Create Quiz
router.post("/create", async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.send("Quiz Created");
});

// Get Quiz
router.get("/", async (req, res) => {
  const quiz = await Quiz.find();
  res.json(quiz);
});

export default router;