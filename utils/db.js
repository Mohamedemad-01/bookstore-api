const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;
