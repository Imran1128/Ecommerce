import mongoose from "mongoose";

const ProductSliderSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    des: {
      type: "string",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
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

const ProductSliderModel = mongoose.model(
  "productsliders",
  ProductSliderSchema
);

export default ProductSliderModel;
