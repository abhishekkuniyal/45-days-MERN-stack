const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const mongo_url = "mongodb://localhost:27017/resumeData";

app.use(express.json());

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");

    app.get("/api/status", (req, res) => {
      res.json({
        message: "MongoDB connection successful!",
        database: mongoose.connection.name,
        status: "connected",
        timestamp: new Date().toISOString(),
      });
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      console.log(`Check status: http://localhost:${port}/api/status`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });