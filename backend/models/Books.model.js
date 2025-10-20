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
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", booksSchema);
