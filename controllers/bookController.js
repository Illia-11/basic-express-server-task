const Book = require("../models/Book");

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.status(200).send(books);
};

module.exports.getBook = async (req, res) => {
  const {
    params: { bookId },
  } = req;

  const book = await Book.findOne(+bookId);
  res.send(book);
};

module.exports.createBook = async (req, res, next) => {
  const { book } = req;

  const newBook = await Book.create({ ...book });

  const { id, ...preparedBook } = newBook;

  res.status(201).send({ preparedBook });
};

module.exports.deleteBook = async (req, res) => {
  const {
    params: { userId },
  } = req;

  try {
    const deleteBook = await Book.delete(+userId);
    res.send(deleteBook);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports.updateBook = async (req, res) => {
  const {
    book,
    params: { bookId },
  } = req;

  try {
    const updatedBook = await Book.update(+bookId, book);
    res.send(updatedBook);
  } catch (err) {
    res.statuc(404).send(err.message);
  }
};
