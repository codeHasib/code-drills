const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, console.log(`PORT is listening on ${PORT}`));
