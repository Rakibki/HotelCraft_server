const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(400).json({ error: "User not authenticated!" });
  }

  jwt.verify(accessToken, process.env.JTW_SECRET, (error, decoded) => {
    if (error) {
      res.status(401).json({ message: "forbiden" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = verifyToken;
