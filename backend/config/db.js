const mongoose = require("mongoose");
const { MONGO_URI } = require("../constants/env");
const User = require("../models/User.model.js");
const Admin = require("../models/Admin.model.js");
const bcrypt = require("bcryptjs");
const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: "admin" });
    if (adminExists) {
      console.log("Admin user already exists");
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("0991500027", salt);
    const admin = new User({
      fullName: "Sofanit Mesfin",
      password: hashedPassword,
      email: "sofanitmesfin19@gmail.com",
      role: "admin",
    });

    const savedAdminUser = await admin.save();

    const adminDetails = new Admin({
      userId: savedAdminUser._id,
      isSuperAdmin: true,
    });

    await adminDetails.save();
  } catch (error) {
    console.log("Error creating admin user:", error);
  }
};

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    await createAdmin();
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error connection to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
module.exports = { connectDB };
