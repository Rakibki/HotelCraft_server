const express = require("express");
const cors = require("cors");
const ConnectDb = require("./src/db/ConnectDb/ConnectDb");
const port = process.env.PORT || 3002;
const roomRoute = 

const app = express();
app.use()

app.use(express.json());
app.use(cors());

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
