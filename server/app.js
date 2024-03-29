const path = require("path");
const express = require("express");
var AWS = require("aws-sdk");
const app = express();
const port = 8080;
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
require("dotenv").config();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//app.use(express.static("./view"));
app.use(express.static("../client/build"));
const apisRouter = require("./routes/api_routes");
app.use("/api", apisRouter);
// Set the region
AWS.config.update({ region: "ap-southeast-2" });
var credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;
AWS.config.getCredentials(function (err) {
  if (err) console.log("AWS credentials loaded successfully\n", err.stack);
  else {
    console.log("**AWS credentials loaded successfully");
  }
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  // res.sendFile(path.join(__dirname, "./view", "index.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
