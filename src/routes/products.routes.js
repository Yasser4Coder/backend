import express from "express";
import { getAllProducts } from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/products", getAllProducts);
export default router;
