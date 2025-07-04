const Purchase = require("../models/Purchase");
const Book = require("../models/Book");

exports.buyBook = async (req, res, next) => {
try{
  const {quantity} = req.body;
  const bookId = req.params.bookId
  const purchases = await Purchase.create({
    user: req.user.id,
    book: bookId, quantity
  })
res.status(201).json(purchases);}
catch(err) {
  next(err)
}};

exports.getPurchases = async (req, res, next) => {
try {
  const purchases = await Purchase.find({
  user: req.user.id
}).populate("book");
res.status(200).json(purchases);
}
catch(err) {
  next(err)
}
};
