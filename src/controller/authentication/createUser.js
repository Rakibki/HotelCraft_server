const users = require("../../models/user");

const createUser = async (req, res) => {
  const userInfo = req.body;
  const user = await users.findOne({ email: userInfo?.email });
  console.log(user);
  if (user) {
    return res.send("user already create");
  } else {
    const result = await users.create(userInfo);
    res.send(result);
  }
};

module.exports = createUser;
