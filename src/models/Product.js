import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  ProductId: Number,
  ImageUrl: String,
  VideoUrl: String,
  ProductDesc: String,
  OriginPrice: String,
  DiscountPrice: String,
  Discount: String,
  Currency: String,
  Sales180Day: Number,
  PromotionUrl: String,
  Date: String,
  Coupons: [String],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
