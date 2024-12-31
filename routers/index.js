const express = require("express");
const bookRouter = require("./bookRouter");

const rootRouter = express.Router();

rootRouter.use("/books", bookRouter);

module.exports = rootRouter;
