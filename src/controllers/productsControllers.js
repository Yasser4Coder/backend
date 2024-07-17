import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
};
