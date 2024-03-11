const users = require("../../models/user");

const currentUser = async (req, res) => {
  const userEmail = req.params?.userEmail;
  const result = await users.findOne({ email: userEmail });
  res.send(result)
};

module.exports = currentUser;
