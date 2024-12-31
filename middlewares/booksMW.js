const { BOOK_SCHEMA } = require("../validation/bookValidation");

module.exports.bookValidationMW = async (req, res, next) => {
  try {
    const book = await BOOK_SCHEMA.validate(req.body);
    req.send = book;
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
}