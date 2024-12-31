const yup = require("yup");

module.exports.BOOK_SCHEMA = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  synopsis: yup.string().required(),
  pages: yup.number().required(),
  price: yup.number().required(),
  isExists: yup.boolean().required()
});