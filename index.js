import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./src/routes/products.routes.js";
import bodyParser from "body-parser";
dotenv.config();

const PORT = 8080;
const CONNECTION_URL = process.env.MONGODB_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ExpressDZ API");
});
app.use("/api", productRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`the server is running on: http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
