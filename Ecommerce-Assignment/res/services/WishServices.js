import WishModel from "../models/WishModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export const SaveWishListForUser = async (req) => {
  try {
    const userID = new ObjectId(req.user_id);
    console.log(userID);
    const { productID } = req.body;
    console.log(productID);
    await WishModel.updateOne(
      { userID: userID, productID: productID },
      { $set: { userID: userID, productID: productID } },
      { upsert: true }
    );
    return { status: "success", response: "Wish added successfully" };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to save wish of this user. Please, try again",
    };
  }
};

export const ViewWishListForUser = async (req) => {
  try {
    const user_id = new ObjectId(req.user_id);
    const productList = await WishModel.aggregate([
      { $match: { userID: user_id } },
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
      response: "Failed to get wish of this user. Please, try again.",
    };
  }
};

export const RemoveWishListForUser = async (req) => {
  try {
    const user_id = new ObjectId(req.user_id);
    const { productID } = req.body;
    await WishModel.deleteOne({ userID: user_id, productID: productID });
    return { status: "success", response: "Wish removed successfully" };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to remove wish of this user. Please, try again",
    };
  }
};
