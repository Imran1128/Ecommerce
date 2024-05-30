import {
  RemoveWishListForUser,
  SaveWishListForUser,
  ViewWishListForUser,
} from "../services/WishServices.js";

export const ProductWishList = async (req, res) => {
  const list = await ViewWishListForUser(req);
  return res.status(200).json(list);
};

export const SaveWishListForProduct = async (req, res) => {
  const list = await SaveWishListForUser(req);
  return res.status(200).json(list);
};

export const RemoveWishListForProduct = async (req, res) => {
  const list = await RemoveWishListForUser(req);
  return res.status(200).json(list);
};
