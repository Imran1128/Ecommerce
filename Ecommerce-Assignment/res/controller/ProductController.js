import {
  ViewBrandList,
  ViewCategoryList,
  ViewProductByBrand,
  ViewProductByCategory,
  ViewProductByKeyword,
  ViewProductByRemark,
  ViewProductBySmiler,
  ViewProductDetail,
  ViewProductReviewsByID,
  ViewSliderList,
} from "../services/ProductServices.js";

export const ProductBrandList = async (req, res) => {
  const list = await ViewBrandList();
  return res.status(200).json(list);
};

export const ProductCategoryList = async (req, res) => {
  const list = await ViewCategoryList();
  return res.status(200).json(list);
};

export const ProductSliderList = async (req, res) => {
  const list = await ViewSliderList();
  return res.status(200).json(list);
};

export const ProductListByBrand = async (req, res) => {
  const list = await ViewProductByBrand(req);
  return res.status(200).json(list);
};

export const ProductListByCategory = async (req, res) => {
  const list = await ViewProductByCategory(req);
  return res.status(200).json(list);
};

export const ProductListBySmiler = async (req, res) => {
  const list = await ViewProductBySmiler(req);
  return res.status(200).json(list);
};

export const ProductListByKeyword = async (req, res) => {
  const list = await ViewProductByKeyword(req);
  return res.status(200).json(list);
};

export const ProductListByRemark = async (req, res) => {
  const list = await ViewProductByRemark(req);
  return res.status(200).json(list);
};

export const ProductDetailsByID = async (req, res) => {
  const list = await ViewProductDetail(req);
  return res.status(200).json(list);
};

export const ProductReviewListByID = async (req, res) => {
  const list = await ViewProductReviewsByID(req);
  return res.status(200).json(list);
};
