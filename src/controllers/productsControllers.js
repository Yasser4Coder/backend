import Product from "../models/Product.js";
import Flash from "../models/Flash.js";
import Deadline from "../models/Deadline.js";

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
};
export const getAllFlash = async (req, res) => {
  try {
    const data = await Flash.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
};

export const addproducts = async (req, res) => {
  const [data] = req.body;
  try {
    if (!data) {
      return res.status(404).json({ message: "the data are missing" });
    }
    await Product.insertMany(data);
    return res
      .status(200)
      .json({ message: "the products are added succesfully" });
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
};
export const addFlash = async (req, res) => {
  const { data } = req.body;
  try {
    if (!data) {
      return res.status(400).json({ message: "The data is missing" });
    }
    await Flash.insertMany(data);
    return res
      .status(200)
      .json({ message: "The products were added successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const getDeadline = async (req, res) => {
  try {
    const data = await Deadline.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
