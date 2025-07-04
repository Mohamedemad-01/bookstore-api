const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
