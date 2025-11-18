const { Router } = require("express");
const { requireLogin } = require("../middleware/Auth.middleware");

const {
  getBookController,
  getBooksController,
  getBooksByGenreController,
  addBookController,
  updateBookController,
  deleteBookController,
  rateBookController,
} = require("../controller/book.controller");

const bookRoute = Router();

bookRoute.get("/getbook", requireLogin, getBookController);
bookRoute.get("/allbooks", requireLogin, getBooksController);
bookRoute.get("/booksbygen", requireLogin, getBooksByGenreController);
bookRoute.post("/postbook", requireLogin, addBookController);
bookRoute.put("/updatebook", requireLogin, updateBookController);
bookRoute.delete("/deletebook", requireLogin, deleteBookController);
bookRoute.post("/ratebook", requireLogin, rateBookController);

module.exports = bookRoute;
