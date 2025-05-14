// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const aiRoutes = require("./routes/ai");

app.use(cors());
app.use(express.json()); // Needed to parse JSON request bodies
app.use("/api/ai", aiRoutes); // Now you POST to /api/ai/generate

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/ping", (req, res) => {
  res.send("pong");
});
