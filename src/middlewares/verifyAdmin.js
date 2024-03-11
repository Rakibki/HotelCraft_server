const users = require("../models/user");

const verifyAdmin = (req, res, next) => {
  const email = req.params.email;
//   const email = req.user?.email;
  const user = users.findOne({ email: email });
  if (user?.email === "Admin") {
    next();
  } else {
    res.json({ Message: "Forbiden Sccess" });
  }
};

module.exports = verifyAdmin;