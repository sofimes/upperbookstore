const {
  getBookCategories,
  getBookCategory,
  addBookCategory,
  updateBookCategory,
  deleteBookCategory,
} = require("../services/BookCategory.service");

const getBookCategoriesController = async (req, res) => {
  try {
    const bookCategories = await getBookCategories();

    res.json(bookCategories);
  } catch (error) {
    //TODO: add better error handling

    console.error(error.message);
  }
};

const getBookCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      throw new Error("Invalid Book category id");
    }

    const bookCategory = await getBookCategory(categoryId);

    res.json(bookCategory);
  } catch (error) {
    console.error(error.message);
  }
};

const postBookCategoryController = async (req, res) => {
  try {
    const categoryData = req.body;

    if (!categoryData) {
      throw new Error("Invalid Book category data");
    }

    const bookCategory = await addBookCategory(categoryData);

    res.json(bookCategory);
  } catch (err) {
    //TODO: add better error handling

    console.error(err.message);
  }
};

const updateBookCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const categoryData = req.body;

    if (!categoryId) {
      throw new Error("Invalid Book category id");
    }
    if (!categoryData) {
      throw new Error("Invalid Book category data");
    }

    const bookCategory = await updateBookCategory(categoryId, categoryData);

    res.json(bookCategory);
  } catch (err) {
    //TODO: add better error handling
    console.error(err.message);
  }
};
const deleteBookCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      throw new Error("Invalid Book category id");
    }

    const bookCategory = await deleteBookCategory(categoryId);

    res.json(bookCategory);
  } catch (err) {
    //TODO: add better error handling

    console.error(err.message);
  }
};

module.exports = {
  getBookCategoriesController,
  getBookCategoryController,
  postBookCategoryController,
  updateBookCategoryController,
  deleteBookCategoryController,
};
