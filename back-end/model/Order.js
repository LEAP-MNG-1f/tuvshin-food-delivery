import mongoose, { model } from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
export const Order = model("Order", OrderSchema);
