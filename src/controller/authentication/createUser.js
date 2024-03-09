const users = require("../../models/user");

const createUser = async (req, res) => {
  const userInfo = req.body;
  const user = await users.find({ email: userInfo?.email });
  if (user) {
    return res.send("user already create");
  } else {
    const result = await users.create(userInfo);
    res.send(result);
  }
};

module.exports = createUser;
