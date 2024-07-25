import mongoose from "mongoose";

const flashSchema = mongoose.Schema({
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

const Flash = mongoose.model("Flash", flashSchema);

export default Flash;
