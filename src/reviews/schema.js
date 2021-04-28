import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ReviewsSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Reviews", ReviewsSchema);
