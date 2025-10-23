const bcrypt = require("bcrypt");
const verifyPassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};

const hashPassword = async (plainPassword) => {
  return bcrypt.hash(plainPassword, 10);
};
module.exports = { verifyPassword, hashPassword };
