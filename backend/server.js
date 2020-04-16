const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todos", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established.");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
})