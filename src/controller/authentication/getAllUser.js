const users = require("../../models/user");

const getAlluser = async (req, res) => {
  const result = await users.find();
  res.send(result);
};

module.exports = getAlluser;
