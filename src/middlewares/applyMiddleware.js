const express = require("express");
const cors = require("cors");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
};

module.exports = applyMiddleware;
