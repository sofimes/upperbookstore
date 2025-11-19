const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      maxlength: 100,
    },
    reviews: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "BookCategory",
      required: true,
    },
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", booksSchema);
