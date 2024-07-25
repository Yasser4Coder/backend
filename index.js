import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./src/routes/products.routes.js";
import bodyParser from "body-parser";
import { verifySignature } from "@chargily/chargily-pay";
import nodemailer from "nodemailer";

dotenv.config();

const PORT = 8080;
const CONNECTION_URL = process.env.MONGODB_URL;
const API_SECRET_KEY = process.env.API_SECRET_KEY;

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf;
    },
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "by.benseghier.yasser@gmail.com",
    pass: "znzglcaznyqclqgl",
  },
});

app.post("/webhook", async (req, res) => {
  const signature = req.get("signature") || "";
  const payload = req.rawBody;

  if (!signature) {
    console.log("Signature header is missing");
    res.sendStatus(400);
    return;
  }

  try {
    if (!verifySignature(payload, signature, API_SECRET_KEY)) {
      console.log("Signature is invalid");
      res.sendStatus(403);
      return;
    }
  } catch (error) {
    console.log(
      "Something happened while trying to process the request to the webhook"
    );
    res.sendStatus(403);
    return;
  }

  const event = req.body;
  // You can use the event.type here to implement your own logic
  if (event) {
    if (event.data.status === "paid") {
      const product = { email: "test@gmail.com", password: "testest123" };
      const mailOptions = {
        from: "by.benseghier.yasser@gmail.com",
        to: event.data.metadata.email,
        subject: "Your order from ExpressDZ",
        html: `<div>
                  <img src="https://c.top4top.io/p_31270lx9m1.jpg" alt="banner" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <h2 style="text-align: center">This is your product:</h2>
                  <h4 style="text-align: center">email: ${product.email}</h4>
                  <h4 style="text-align: center">password: ${product.password}</h4>
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <br>
                  <img src="https://k.top4top.io/p_3127fpi861.jpg" alt="banner" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
               </div>`,
      };

      const info = await transporter.sendMail(mailOptions);
    }
  }

  res.sendStatus(200);
});

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
