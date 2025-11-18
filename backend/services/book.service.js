const Books = require("../models/Books.model");

const getBooksByGenre = async (category) => {
  try {
    const bookbygen = await Books.find({ category });
    return bookbygen;
  } catch (error) {
    throw new Error(`Failed to fetch books by genre:${error.message}`);
  }
};
const getBooks = async () => {
  try {
    const allbooks = await Books.find();
    return allbooks;
  } catch (error) {
    throw new Error(`Failed to fetch a books:${error.message}`);
  }
};
const getBook = async (bookId) => {
  try {
    const booksin = await Books.findById(bookId);
    return booksin;
  } catch (error) {
    throw new Error(`Failed to fetch a book:${error.message}`);
  }
};
const updateBook = async (bookId, updateData) => {
  try {
    const bookup = await Books.findByIdAndUpdate(bookId, updateData, {
      new: true,
    });
    return bookup;
  } catch (error) {
    throw new Error(`Failed to update a book:${error.message}`);
  }
};
const deleteBook = async (bookId) => {
  try {
    const bookdel = await Books.findByIdAndDelete(bookId);
    return bookdel;
  } catch (error) {
    throw new Error(`Failed to delete a book:${error.message}`);
  }
};
const rateBook = async (bookId, userId, rating) => {
  try {
    const book = await Books.findById(bookId);
    if (!book) throw new Error("Book not found");

    const existing = book.ratings.find((r) => r.user.toString() === userId);
    if (existing) {
      existing.rating = rating;
    } else {
      book.ratings.push({ user: userId, rating });
    }

    return await book.save();
  } catch (error) {
    throw new Error(`Failed to rate book: ${error.message}`);
  }
};

const addBook = async (bookData) => {
  try {
    const book = new Books(bookData);
    return await book.save();
  } catch (error) {
    throw new Error(`Failed to fetch books:${error.message}`);
  }
};

module.exports = {
  getBooks,
  getBooksByGenre,
  getBook,
  updateBook,
  deleteBook,
  rateBook,
  addBook,
};
