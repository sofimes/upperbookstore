const { Schema, model } = require("mongoose");

const BookCategorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const BookCategory = model("BookCategory", BookCategorySchema);

module.exports = BookCategory;
