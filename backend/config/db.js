const mongoose = require("mongoose");
const { MONGO_URI } = require("../constants/env");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error connection to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
module.exports = { connectDB };
