var jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (req, res) => {
  const tokenData = req.body;
  const token = jwt.sign(tokenData, process.env.JTW_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("accessToken", token, {
    maxAge: 60 * 60 * 24 * 30 * 1000,
    secure: false,
    httpOnly: false,
  });
  res.send(token);
};

module.exports = createToken;
