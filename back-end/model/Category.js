import mongoose, { model } from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
export const Category = model("Category", CategorySchema);
