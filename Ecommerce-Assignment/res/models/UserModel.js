import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
    },
    otp: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
