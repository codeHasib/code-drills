const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const uri = `${process.env.DB_URI}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("Image_Uploading_System");
    const imageCollections = db.collection("images");

    app.get("/", async (req, res) => {
      const cursor = imageCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(PORT, console.log(`PORT is listening on ${PORT}`));
