// server/controllers/aiController.js
require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateTodo = async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Give me 3 todo list items." }],
    });

    res.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error generating todo:", error);
    res.status(500).json({ error: "Failed to generate todo." });
  }
};

module.exports = { generateTodo };
