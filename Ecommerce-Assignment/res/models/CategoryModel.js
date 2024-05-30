import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: "string",
      required: true,
    },
    categoryImg: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoryModel = mongoose.model("categories", CategorySchema);
export default CategoryModel;
