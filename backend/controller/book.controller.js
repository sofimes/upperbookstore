const {
  getBooksByGenre,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
  rateBook,
  addBook,
} = require("../services/book.service");

const getBooksController = async (req, res) => {
  try {
    const allbooks = await getBooks();
    if (!allbooks)
      return res.status(404).json({ error: true, message: "Books not found" });

    res.json(allbooks);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `error in bookscontroller: ${error.message}`,
    });
  }
};

// GET /api/books/getbook
const getBookController = async (req, res) => {
  try {
    const bookId = req.query.id; // pass ?id=<bookId>
    if (!bookId)
      return res
        .status(400)
        .json({ error: true, message: "Book ID is required" });

    const book = await getBook(bookId);
    if (!book)
      return res.status(404).json({ error: true, message: "Book not found" });

    res.json(book);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `error in bookscontroller: ${error.message}`,
    });
  }
};

// GET /api/books/booksbygen?category=...
const getBooksByGenreController = async (req, res) => {
  try {
    const { category } = req.query;
    if (!category)
      return res
        .status(400)
        .json({ error: true, message: "Category is required" });

    const books = await getBooksByGenre(category);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// POST /api/books/postbook
const addBookController = async (req, res) => {
  try {
    const book = await addBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: true, message: ` error in controller ${error.message}` });
  }
};

// PUT /api/books/updatebook?id=...
const updateBookController = async (req, res) => {
  try {
    const bookId = req.query.id;
    if (!bookId)
      return res
        .status(400)
        .json({ error: true, message: "Book ID is required" });

    const updated = await updateBook(bookId, req.body);
    if (!updated)
      return res.status(404).json({ error: true, message: "Book not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// DELETE /api/books/deletebook?id=...
const deleteBookController = async (req, res) => {
  try {
    const bookId = req.query.id;
    if (!bookId)
      return res
        .status(400)
        .json({ error: true, message: "Book ID is required" });

    const deleted = await deleteBook(bookId);
    if (!deleted)
      return res.status(404).json({ error: true, message: "Book not found" });

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// POST /api/books/ratebook?id=...
const rateBookController = async (req, res) => {
  try {
    const bookId = req.query.id;
    const userId = req.user._id;
    const { rating } = req.body;

    if (!bookId)
      return res
        .status(400)
        .json({ error: true, message: "Book ID is required" });
    if (!rating || rating < 1 || rating > 5)
      return res
        .status(400)
        .json({ error: true, message: "Rating must be 1-5" });

    const book = await rateBook(bookId, userId, rating);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = {
  getBookController,
  getBooksController,
  getBooksByGenreController,
  addBookController,
  updateBookController,
  deleteBookController,
  rateBookController,
};
