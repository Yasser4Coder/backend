import express from "express";
import {
  getAllProducts,
  addproducts,
  getAllFlash,
  addFlash,
  getDeadline,
  getBySearch,
} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:searchterm", getBySearch);
router.post("/products", addproducts);
router.get("/flash", getAllFlash);
router.post("/flash", addFlash);
router.get("/deadline/", getDeadline);

export default router;
