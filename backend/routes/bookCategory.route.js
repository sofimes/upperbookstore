const { Router } = require("express");
const { requireLogin, requireRole } = require("../middleware/Auth.middleware");
const {
  getBookCategoriesController,
  getBookCategoryController,
  postBookCategoryController,
  updateBookCategoryController,
  deleteBookCategoryController,
} = require("../controller/bookCategory.controller");
const upload = require("../middleware/upload.middleware");
const bookCategoryRoute = Router();

bookCategoryRoute.get("/", requireLogin, getBookCategoriesController);
bookCategoryRoute.get("/:categoryId", requireLogin, getBookCategoryController);
bookCategoryRoute.post(
  "/",
  requireLogin,
  // requireRole,
  upload.single("image"),
  postBookCategoryController
);
bookCategoryRoute.put(
  "/:categoryId",
  requireLogin,
  // requireRole,
  updateBookCategoryController
);
bookCategoryRoute.delete(
  "/:categoryId",
  requireLogin,
  // requireRole,
  deleteBookCategoryController
);

module.exports = bookCategoryRoute;
