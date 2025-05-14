// server/routes/ai.js
const express = require("express");
const router = express.Router();

// Make sure this line points to your exported function
const { generateTodo } = require("../controllers/aiController");

router.post("/generate", generateTodo); // generateTodo must be a function

module.exports = router;
