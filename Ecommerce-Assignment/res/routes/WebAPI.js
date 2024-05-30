import { Router } from "express";
import {
  ReadProfile,
  SaveProfile,
  UserLogout,
  UserOTPRequest,
  UserOTPVerified,
} from "../controller/UserController.js";
import { AuthVerified } from "../middlewares/AuthVerification.js";
import {
  ProductBrandList,
  ProductCategoryList,
  ProductDetailsByID,
  ProductListByBrand,
  ProductListByCategory,
  ProductListByKeyword,
  ProductListByRemark,
  ProductListBySmiler,
  ProductReviewListByID,
  ProductSliderList,
} from "../controller/ProductController.js";
import {
  ProductWishList,
  RemoveWishListForProduct,
  SaveWishListForProduct,
} from "../controller/WishController.js";
import {
  ProductCartList,
  RemoveCartListForProduct,
  SaveCartListForProduct,
} from "../controller/CartController.js";

const router = Router();

// Product Related API
router.get("/ProductBrandList", AuthVerified, ProductBrandList);
router.get("/ProductCategoryList", AuthVerified, ProductCategoryList);
router.get("/ProductSliderList", AuthVerified, ProductSliderList);
router.get("/ProductListByBrand/:BrandID", AuthVerified, ProductListByBrand);
router.get(
  "/ProductListByCategory/:CategoryID",
  AuthVerified,
  ProductListByCategory
);
router.get(
  "/ProductListBySmilier/:CategoryID",
  AuthVerified,
  ProductListBySmiler
);
router.get(
  "/ProductListByKeyword/:Keyword",
  AuthVerified,
  ProductListByKeyword
);
router.get("/ProductListByRemark/:Remark", AuthVerified, ProductListByRemark);
router.get("/ProductDetails/:ProductID", AuthVerified, ProductDetailsByID);
router.get(
  "/ProductReviewList/:ProductID",
  AuthVerified,
  ProductReviewListByID
);

// User Related API
router.get("/UserOTP/:email", UserOTPRequest);
router.get("/VerifyLogin/:email/:otp", UserOTPVerified);
router.get("/UserLogout", AuthVerified, UserLogout);
router.post("/CreateProfile", AuthVerified, SaveProfile);
router.post("/UpdateProfile", AuthVerified, SaveProfile);
router.get("/ReadProfile", AuthVerified, ReadProfile);

// Wish List Related API
router.post("/SaveWishList", AuthVerified, SaveWishListForProduct);
router.post("/RemoveWishList", AuthVerified, RemoveWishListForProduct);
router.get("/WishList", AuthVerified, ProductWishList);

// Cart List Related API
router.post("/SaveCartList", AuthVerified, SaveCartListForProduct);
router.post("/RemoveCartList", AuthVerified, RemoveCartListForProduct);
router.get("/CartList", AuthVerified, ProductCartList);

export default router;
