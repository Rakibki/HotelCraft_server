const express = require("express");
const cors = require("cors");
const ConnectDb = require("./src/db/ConnectDb/ConnectDb");
const port = process.env.PORT || 3002;
const roomRoute = require("./src/routes/rooms/index");
const autheticationRoute = require("./src/routes/authentication/index");

const app = express();

app.use(express.json());
app.use(cors());

app.use(roomRoute);
app.use(autheticationRoute);

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
