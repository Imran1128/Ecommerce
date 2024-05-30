import mongoose from "mongoose";

const ProductDetailsSchema = new mongoose.Schema(
  {
    img1: {
      type: "string",
      required: true,
    },
    img2: {
      type: "string",
      required: true,
    },
    img3: {
      type: "string",
    },
    img4: {
      type: "string",
    },
    des: {
      type: "string",
      required: true,
    },
    color: {
      type: "string",
      required: true,
    },
    size: {
      type: "string",
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductDetailsModel = mongoose.model(
  "productdetails",
  ProductDetailsSchema
);
export default ProductDetailsModel;
