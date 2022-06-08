const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user.schema");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/register", async (req, res, next) => {
  await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  const user = await User.find();
  res.json(user).status(200);
});

app.post("/login", async (req, res, next) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign({ ...user }, "secretToken", { expiresIn: "24h" });

    const decoded = jwt.verify(token, "secretToken");

    console.log(decoded);
    res.status(201).json({ user, token: token, exp: decoded.exp });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

mongoose.connect(`mongodb+srv://adessi:adessi2022@adesso.2sfcvab.mongodb.net/?retryWrites=true&w=majority`,(err,db) => {
  _db = db;
  console.log('DB CONENCTED');
})

app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});