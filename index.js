const express = require("express");
const ConnectDb = require("./src/db/ConnectDb/ConnectDb");
const port = process.env.PORT || 3002;
const roomRoute = require("./src/routes/rooms/index");
const autheticationRoute = require("./src/routes/authentication/index");
const commentRoute = require("./src/routes/comment/index");
const applyMiddleware = require("./src/middlewares/applyMiddleware");

const app = express();
applyMiddleware(app);

app.use(roomRoute);
app.use(autheticationRoute);
app.use(commentRoute);

app.get("/", (req, res) => {
  res.send({ message: "server is running" });
});

const main = async () => {
  await ConnectDb();
  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
};

main();
