const users = require("../../models/user");
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
  const data = req.body;
  const userInfo = {
    ...data,
    userId: uuidv4(),
  };
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
