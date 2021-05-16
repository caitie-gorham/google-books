const mongoose = require("mongoose");
const { stringify } = require("qs");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: string,
  link: string,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;