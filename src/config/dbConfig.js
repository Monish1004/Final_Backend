const mongoose = require("mongoose");
const ServerConfig = require("./serverConfig");
async function connectDb() {
  try {
    await mongoose.connect(ServerConfig.DB_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB");

    console.log(err);
  }
}

module.exports = connectDb;
