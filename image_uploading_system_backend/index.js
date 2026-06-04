const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

const cloudinary = require("./config/cloudinary");
const upload = require("./middleware/multer");

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

    app.post("/upload", upload.single("image"), async (req, res) => {
      try {
        const file = req.file;
        if (!file) {
          return res.status(400).json({ message: "No files found!" });
        }
        const fileBase64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
        const result = await cloudinary.uploader.upload(fileBase64, {
          folder: "image_upload_system",
        });

        const imageDoc = {
          url: result.secure_url,
          public_id: result.public_id,
          createdAt: new Date(),
        };

        const dbResult = await imageCollections.insertOne(imageDoc);
        res.status(200).json({
          message: "Image uploaded successfully",
          image: imageDoc,
          mongoResult: dbResult,
        });
      } catch (err) {
        return res.status(403).json({ message: "Something went wrong" });
      }
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(PORT, console.log(`PORT is listening on yes ${PORT}`));
