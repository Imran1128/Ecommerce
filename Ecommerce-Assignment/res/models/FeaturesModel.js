import mongoose from "mongoose";

const FeaturesSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    img: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const FeaturesModel = mongoose.model("features", FeaturesSchema);
export default FeaturesModel;
