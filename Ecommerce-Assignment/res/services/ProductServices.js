import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";
import ProductSliderModel from "../models/ProductSliderModel.js";
import mongoose from "mongoose";
import ProductModel from "../models/ProductModel.js";
import ReviewModel from "../models/ReviewModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const ViewBrandList = async () => {
  try {
    const viewBrand = await BrandModel.aggregate([
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);
    return { status: "success", response: viewBrand };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get brand list. Please, try again.",
    };
  }
};

export const ViewCategoryList = async () => {
  try {
    const ViewCategory = await CategoryModel.aggregate([
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);
    return { status: "success", response: ViewCategory };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get category list. Please, try again.",
    };
  }
};

export const ViewSliderList = async () => {
  try {
    const ViewSlider = await ProductSliderModel.aggregate([
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);
    return { status: "success", response: ViewSlider };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get slider list. Please, try again.",
    };
  }
};

export const ViewProductByBrand = async (req) => {
  try {
    const BrandID = new ObjectId(req.params.BrandID);
    const productList = await ProductModel.aggregate([
      { $match: { brandID: BrandID } },
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryID: 0,
          brandID: 0,
          createdAt: 0,
          updatedAt: 0,
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
      response: "Failed to get product list based on brand. Please, try again.",
    };
  }
};

export const ViewProductByCategory = async (req) => {
  try {
    const categoryID = new ObjectId(req.params.CategoryID);
    const productList = await ProductModel.aggregate([
      { $match: { categoryID: categoryID } },
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryID: 0,
          brandID: 0,
          createdAt: 0,
          updatedAt: 0,
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
      response:
        "Failed to get product list based on category. Please, try again.",
    };
  }
};

export const ViewProductBySmiler = async (req) => {
  try {
    const categoryID = new ObjectId(req.params.CategoryID);
    const productList = await ProductModel.aggregate([
      { $match: { categoryID: categoryID } },
      { $limit: 10 },
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryID: 0,
          brandID: 0,
          createdAt: 0,
          updatedAt: 0,
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
      response:
        "Failed to get product list based on category. Please, try again.",
    };
  }
};

export const ViewProductByKeyword = async (req) => {
  try {
    const keyWordRegex = { $regex: req.params.Keyword, $options: "i" };
    const searchMatchRegex = [
      { title: keyWordRegex },
      { shortDes: keyWordRegex },
    ];
    const productList = await ProductModel.aggregate([
      { $match: { $or: searchMatchRegex } },
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryID: 0,
          brandID: 0,
          createdAt: 0,
          updatedAt: 0,
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
      response:
        "Failed to get product list based on category. Please, try again.",
    };
  }
};

export const ViewProductByRemark = async (req) => {
  try {
    const remark = req.params.Remark;
    const productList = await ProductModel.aggregate([
      { $match: { remark: remark } },
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryID: 0,
          brandID: 0,
          createdAt: 0,
          updatedAt: 0,
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
      response: "Failed to get product list based on brand. Please, try again.",
    };
  }
};

export const ViewProductDetail = async (req) => {
  try {
    const productID = new ObjectId(req.params.ProductID);
    const productList = await ProductModel.aggregate([
      { $match: { _id: productID } },
      {
        $lookup: {
          from: "productdetails",
          localField: "_id",
          foreignField: "productID",
          as: "details",
        },
      },
      { $unwind: "$details" },
      {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brand",
        },
      },
      { $unwind: "$brand" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryID: 0,
          brandID: 0,
          createdAt: 0,
          updatedAt: 0,
          "category.createdAt": 0,
          "category.updatedAt": 0,
          "brand.createdAt": 0,
          "brand.updatedAt": 0,
          "details.productID": 0,
          "details.createdAt": 0,
          "details.updatedAt": 0,
        },
      },
    ]);

    return { status: "success", response: productList };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get product details. Please, try again.",
    };
  }
};

export const ViewProductReviewsByID = async (req) => {
  try {
    const productID = new ObjectId(req.params.ProductID);
    const reviews = await ReviewModel.aggregate([
      { $match: { productID: productID } },
      {
        $lookup: {
          from: "profiles",
          localField: "userID",
          foreignField: "userID",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          des: 1,
          rating: 1,
          "user.cus_name": 1,
        },
      },
    ]);

    return { status: "success", reviews: reviews };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get product reviews. Please, try again.",
    };
  }
};
