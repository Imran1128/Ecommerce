import {
  OTPRequest,
  OTPVerified,
  ReadUserProfile,
  SaveUserProfile,
} from "../services/UserServices.js";

export const UserOTPRequest = async (req, res) => {
  const response = await OTPRequest(req);
  return res.status(200).json(response);
};

export const UserOTPVerified = async (req, res) => {
  const response = await OTPVerified(req);
  if (response.status === "success") {
    res.cookie("token", response.token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    });
  }
  return res.status(200).json(response);
};

export const UserLogout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    maxAge: 0,
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  });
  return res
    .status(200)
    .json({ status: "success", response: "User logged out successfully" });
};

export const SaveProfile = async (req, res) => {
  const response = await SaveUserProfile(req);
  return res.status(200).json(response);
};

export const ReadProfile = async (req, res) => {
  const response = await ReadUserProfile(req);
  return res.status(200).json(response);
};
