import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cus_add: {
      type: "string",
      required: true,
    },
    cus_city: {
      type: "string",
      required: true,
    },
    cus_country: {
      type: "string",
      required: true,
    },
    cus_fax: {
      type: "string",
      required: true,
    },
    cus_name: {
      type: "string",
      required: true,
    },
    cus_phone: {
      type: "string",
      required: true,
    },
    cus_postcode: {
      type: "string",
      required: true,
    },
    cus_state: {
      type: "string",
      required: true,
    },
    ship_add: {
      type: "string",
      required: true,
    },
    ship_city: {
      type: "string",
      required: true,
    },
    ship_country: {
      type: "string",
      required: true,
    },
    ship_name: {
      type: "string",
      required: true,
    },
    ship_phone: {
      type: "string",
      required: true,
    },
    ship_postcode: {
      type: "string",
      required: true,
    },
    ship_state: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProfileModel = mongoose.model("profiles", ProfileSchema);
export default ProfileModel;
