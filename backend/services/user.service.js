const User = require("../models/User.model");

const { verifyPassword, hashPassword } = require("../utils/bcrypt");

const getUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User with specified email not found ");
  }
  const passwordMatch = await verifyPassword(password, user.password);
  if (!passwordMatch) {
    throw new Error("Incorrect password");
  }
  return user;
};

const registerUser = async ({ userData, role = "reader" }) => {
  const reader = await addUser({ ...userData, role });
  return reader;
};

const signInWithGoogle = async ({ userData, role = "reader" }) => {
  const user = await getUserByEmail(userData.email);
  if (user) {
    return user;
  }
  const reader = await addUser({ ...userData, role });
  return student;
};
const getUserByEmail = async (email) => {
  if (typeof email !== "string") {
    throw new Error("Email must be a string");
  }
  const query = { email };
  try {
    const user = await User.findOne(query);
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
};

const addUser = async (userData) => {
  try {
    const hashedPassword = userData.password
      ? await hashPassword(userData.password)
      : null;
    const user = new User({
      ...userData,
      password: hashedPassword,
    });
    const doc = await user.save();
    return doc;
  } catch (error) {
    if (error.name === "validationError") {
      const message = Object.values(error.errors).map((err) => err.message);
      throw new Error(`Validation Error : ${message.join(", ")}`);
    }
    if (error.code === 11000) {
      throw new Error(
        "Duplicate Key Error: A user with this email already exists "
      );
    }
    throw new Error(`Database Error: ${error.message}`);
  }
};

const updateUser = async (userId, userData) => {
  try {
    const newUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
      runValidators: true,
    });

    if (!newUser) throw new Error("User not found");
    return newUser;
  } catch (error) {
    if (error.name === "validationError") {
      const message = Object.values(error.errors).map((err) => err.message);
      throw new Error(`Validation Error : ${message.join(", ")}`);
    }

    throw new Error(`   Failed to update user: ${error.message}`);
  }
};

const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
  } catch (error) {
    throw new Error(`Filed to dlete courses: ${error.message}`);
  }
};

const getUsersByRole = async (role) => {
  if (typeof role !== "string") {
    throw new Error("Role must be a string");
  }

  const query = { role }; // Simplified, no need to repeat `role: role`
  try {
    const users = await User.find(query);
    return users;
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
};
module.exports = {
  getUser,
  loginUser,
  registerUser,
  signInWithGoogle,
  updateUser,
  deleteUser,
  getUsersByRole,
};
