const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const postsRoutes = require("./routes/posts")
const app = express();
const port = 4000;
const uri = process.env.MONGO_URI;

// middleares
app.use(express.json());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello react" });
});

app.use("/api/user",postsRoutes)
// connected mongoDB
mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`App listen on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
