const { Router } = require("express");
const { requireLogin } = require("../middleware/Auth.middleware");

const {
  getBookController,
  getBooksByGenreController,
  addBookController,
  updateBookController,
  deleteBookController,
  rateBookController,
} = require("../controller/book.controller");

const bookRoute = Router();

bookRoute.get("/getbook", requireLogin, getBookController);
bookRoute.get("/booksbygen", requireLogin, getBooksByGenreController);
bookRoute.post("/postbook", requireLogin, addBookController);
bookRoute.put("/getbook", requireLogin, updateBookController);
bookRoute.delete("/deletebook", requireLogin, deleteBookController);

module.exports = bookRoute;
