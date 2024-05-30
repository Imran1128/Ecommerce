import UserModel from "../models/UserModel.js";
import SendMail from "../utility/EmailSender.js";
import { EncodeToken } from "../utility/AuthHelper.js";
import ProfileModel from "../models/ProfileModel.js";
import BrandModel from "../models/BrandModel.js";

export const OTPRequest = async (req) => {
  try {
    const { email } = req.params;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const subject = "User login OTP";
    const message = "Your requested OTP is: " + otp;
    await SendMail(email, subject, message);
    await UserModel.updateOne({ email: email }, { otp: otp }, { upsert: true });
    return {
      status: "success",
      response: `OTP sent to ${email} successfully. Please check your email inbox.`,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to send OTP. Please, try again.",
    };
  }
};

export const OTPVerified = async (req) => {
  try {
    const { email, otp } = req.params;
    const user = await UserModel.findOne({ email: email });
    if (user.otp === otp) {
      const token = EncodeToken(email, user._id);
      await UserModel.updateOne({ email: email }, { otp: "" });
      return {
        status: "success",
        response: "OTP verified successfully.",
        token: token,
      };
    } else {
      return {
        status: "error",
        response: "Invalid OTP.",
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to verified your OTP. Please, try again.",
    };
  }
};

export const SaveUserProfile = async (req) => {
  try {
    const user_id = req.user_id;
    const userData = req.body;
    const user = await ProfileModel.updateOne(
      { userID: user_id },
      { $set: userData },
      { upsert: true }
    );
    if (user.modifiedCount === 1) {
      return {
        status: "success",
        response: "User profile updated successfully",
      };
    }
    return { status: "success", response: "User profile created successfully" };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to save user profile. Please, try again",
    };
  }
};

export const ReadUserProfile = async (req) => {
  try {
    const user_id = req.user_id;
    const user = await ProfileModel.find({ userID: user_id });
    if (user.length === 0) {
      return {
        status: "success",
        response: "User profile not found. Please, update your profile.",
      };
    }
    return { status: "success", response: user[0] };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to read user profile. Please, try again",
    };
  }
};
