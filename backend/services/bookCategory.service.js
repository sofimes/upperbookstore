const BookCategory = require("../models/BookCategory.model");

const getBookCategories = async () => {
  try {
    const bookCategories = await BookCategory.find();
    return bookCategories;
  } catch (error) {
    throw new Error(`Failed to fetch Book categories: ${error.message}`);
  }
};

const getBookCategory = async (categoryId) => {
  try {
    const book = await BookCategory.findById(categoryId);

    return book;
  } catch (error) {
    throw new Error(`Failed to fetch Book category: ${error.message}`);
  }
};

const addBookCategory = async (categoryData) => {
  try {
    const bookCategory = new BookCategory(categoryData);
    const doc = await bookCategory.save();

    return doc;
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);

      throw new Error(`Validation Error: ${messages.join(", ")}`);
    }

    // Handle other errors
    throw new Error(`Database Error: ${error.message}`);
  }
};

const updateBookCategory = async (categoryId, categoryData) => {
  try {
    const newBookCategory = await BookCategory.findByIdAndUpdate(
      categoryId,
      categoryData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!newBookCategory) throw new Error("Book category not found");

    return newBookCategory;
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      throw new Error(`Validation Error: ${messages.join(", ")}`);
    }
    throw new Error(`Failed to update Book category: ${error.message}`);
  }
};

const deleteBookCategory = async (categoryId) => {
  try {
    const deletedBookCategory = await BookCategory.findByIdAndDelete(
      categoryId
    );
    if (!deletedBookCategory) throw new Error("Book category not found.");

    return deletedBookCategory;
  } catch (error) {
    throw new Error(`Failed to delete Book category: ${error.message}`);
  }
};

module.exports = {
  getBookCategory,
  getBookCategories,
  addBookCategory,
  updateBookCategory,
  deleteBookCategory,
};
