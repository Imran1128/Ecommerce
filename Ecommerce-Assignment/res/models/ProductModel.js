import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    shortDes: {
      type: "string",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Boolean,
      default: false,
    },
    discountPrice: {
      type: Number,
    },
    image: {
      type: "string",
      required: true,
    },
    star: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    remark: {
      type: "string",
    },
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = mongoose.model("products", ProductSchema);
export default ProductModel;
