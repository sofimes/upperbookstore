const { Router } = require("express");
const { requireLogin, requireRole } = require("../middleware/Auth.middleware");

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
bookRoute.post("/postbook", requireLogin, requireRole, addBookController);
bookRoute.put("/updatebook", requireLogin, requireRole, updateBookController);
bookRoute.delete(
  "/deletebook",
  requireLogin,
  requireRole,
  deleteBookController
);
bookRoute.post("/ratebook", requireLogin, rateBookController);

module.exports = bookRoute;
