import Product from "../models/Product.js";
import Flash from "../models/Flash.js";

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

export const setDeadline = async (req, res) => {
  const { deadline } = req.params;

  const month = deadline.slice(0, 2);
  const day = deadline.slice(3, 5);
  const year = deadline.slice(6, 10);
  let mo;
  //07-18-2024
  if (month === "01") {
    mo = "January";
  }
  if (month === "02") {
    mo = "February";
  }
  if (month === "03") {
    mo = "March";
  }
  if (month === "04") {
    mo = "April";
  }
  if (month === "05") {
    mo = "May";
  }
  if (month === "06") {
    mo = "June";
  }
  if (month === "07") {
    mo = "July";
  }
  if (month === "08") {
    mo = "August";
  }
  if (month === "09") {
    mo = "September";
  }
  if (month === "10") {
    mo = "October";
  }
  if (month === "11") {
    mo = "November";
  }
  if (month === "12") {
    mo = "December";
  }

  try {
    if (!deadline) {
      return res.status(400).json({ message: "some information are missing" });
    }

    const realDeadline = `${mo}, ${day}, ${year}`;
    // "July, 20, 2024" exp;

    return res.status(200).json({ deadline: realDeadline });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
