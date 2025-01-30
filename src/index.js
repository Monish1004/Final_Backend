const express = require("express");

const ServerConfig = require("./config/serverConfig");
const connectDb = require("./config/dbConfig");
const app = express();

app.listen(ServerConfig.PORT, async () => {
  await connectDb();
  console.log(`Server started at port ${ServerConfig.PORT}...!!`);
});
