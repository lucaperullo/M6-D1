import mongoose from "mongoose";
const { Schema, model } = mongoose;
export const AuthorSchema = new Schema(
  {
    name: String,
    img: String,
    articles: [{ type: Schema.Types.ObjectId, ref: "Articles" }],
  },
  { timestamps: true }
);

AuthorSchema.static(
  "addArticleIdToAuthor",
  async function (articleID, authorID) {
    await AuthorModel.findByIdAndUpdate(
      authorID,
      {
        $push: {
          articles: articleID,
        },
      },
      { runValidators: true, new: true }
    );
  }
);

export default model("Author", AuthorSchema);
