require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
// Database Handling
mongoose.connect(
  `mongodb+srv://Admin:S%40king10@cluster0.83b3qvq.mongodb.net/secrets?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const secret = process.env.SOME_32BYTE_BASE64_STRING;

userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
const User = mongoose.model("user", userSchema);

const app = express();

async function CreateUser(email, password) {
  await User.create({ email: email, password: password });
}
async function FindUser(email) {
  const user = await User.findOne({ email: email });
  return user;
}
// setting up app and routes
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/register", function (req, res) {
  CreateUser(req.body.username, req.body.password).then(function () {
    res.redirect("/");
  });
});

app.post("/login", function (req, res) {
  FindUser(req.body.username).then(function (foundUser) {
    if (!foundUser) {
      res.status(404);
    } else {
      if (foundUser.password === req.body.password) res.render("secrets");
      else res.status(404);
    }
  });
});

app.listen(3000, function () {
  console.log("Server Running in port 3000");
});
