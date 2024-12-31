const express = require("express");
const { bookValidationMW } = require("../middlewares/booksMW");
const bookController = require("../controllers/bookController");

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks);
bookRouter.get("/:bookId", bookController.getBook);
bookRouter.post("/", bookValidationMW, bookController.createBook);
bookRouter.delete("/", bookController.deleteBook);

module.exports = bookRouter;
