import express from "express";
import {
  getAllProducts,
  addproducts,
  getAllFlash,
  addFlash,
  getDeadline,
} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", addproducts);
router.get("/flash", getAllFlash);
router.post("/flash", addFlash);
router.get("/deadline/", getDeadline);

export default router;
