import express from "express";
import {
  getAllProducts,
  addproducts,
  getAllFlash,
  addFlash,
} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", addproducts);
router.get("/flash", getAllFlash);
router.post("/flash", addFlash);

export default router;
