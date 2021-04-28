import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const ArticleSchema = new Schema(
  {
    headLine: {
      type: String,
      required: true,
    },
    subHead: String,
    content: {
      type: String,
      required: true,
    },
    category: {
      name: String,
      img: String,
    },
    author: String,
    reviews: Array,
    cover: String,
  },
  { timestamps: true }
);

export default model("Articles", ArticleSchema);
