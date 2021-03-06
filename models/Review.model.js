const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    text: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  },
  { timestamps: true }
);
const Review = model("Review", reviewSchema);
module.exports = Review;
