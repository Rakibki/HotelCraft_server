const mongoose = require("mongoose");

const ConnectDb = () => {
  const uri =
    "mongodb+srv://HotelCraft:HDDcjst9hb7ASgyH@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  console.log("connecting db....");
  mongoose.connect(uri, { DbName: "HotelCraft" });
  console.log("connected db");
};

module.exports = ConnectDb;