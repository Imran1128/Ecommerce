import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    color: {
      type: "string",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    size: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CartModel = mongoose.model("carts", CartSchema);
export default CartModel;
