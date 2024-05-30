import mongoose from "mongoose";
import CartModel from "../models/CartModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const SaveCartList = async (req) => {
  try {
    const userID = req.user_id;
    const cartItem = req.body;
    cartItem.userID = userID;
    await CartModel.create(cartItem);
    return {
      status: "success",
      response: "Item saved in CartList successfully",
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to save CartList. Please, try again",
    };
  }
};

export const RemoveCartList = async (req) => {
  try {
    const userID = req.user_id;
    const cartItem = req.body;
    cartItem.userID = userID;
    await CartModel.deleteOne(cartItem);
    return {
      status: "success",
      response: "Item removed from CartList successfully",
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to removed CartList. Please, try again",
    };
  }
};

export const ViewCartList = async (req) => {
  try {
    const userID = new ObjectId(req.user_id);
    const productList = await CartModel.aggregate([
      { $match: { userID: userID } },
      {
        $lookup: {
          from: "products",
          localField: "productID",
          foreignField: "_id",
          as: "product",
        },
      },
      { $unwind: "$product" },
      {
        $lookup: {
          from: "brands",
          localField: "product.brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "product.categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          productID: 0,
          createdAt: 0,
          updatedAt: 0,
          "product.categoryID": 0,
          "product.brandID": 0,
          "product.createdAt": 0,
          "product.updatedAt": 0,
          "category.createdAt": 0,
          "category.updatedAt": 0,
          "brand.createdAt": 0,
          "brand.updatedAt": 0,
        },
      },
    ]);

    return { status: "success", response: productList };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get CartList. Please, try again",
    };
  }
};
