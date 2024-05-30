import {
  RemoveCartList,
  SaveCartList,
  ViewCartList,
} from "../services/CartServices.js";

export const ProductCartList = async (req, res) => {
  const list = await ViewCartList(req);
  return res.status(200).json(list);
};

export const SaveCartListForProduct = async (req, res) => {
  const list = await SaveCartList(req);
  return res.status(200).json(list);
};

export const RemoveCartListForProduct = async (req, res) => {
  const list = await RemoveCartList(req);
  return res.status(200).json(list);
};
