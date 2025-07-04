const Book = require("../models/Book");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  }
  catch (err) {
  next(err);
  }};
  
  
exports.createBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  }
  catch (err) {
    next(err);
  }
  };

exports.updateBook = async (req, res, next) => {
try {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!updatedBook) {
    return res.status(404).json({message: "Book not found"});
  }
  res.status(200).json(updatedBook);
}
catch (err) {
  next(err);
}
};

exports.deleteBook = async (req, res, next) => {
try {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  if (!deletedBook) {
    return res.status(404).json({message:"Book not found"});
  }
  res.status(200).json({message:"Book deleted successfully"});
}
catch (err){
  next(err);
}
};
