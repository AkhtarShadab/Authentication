require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltrounds = 10;
// Database Handling
mongoose.connect(
  `mongodb+srv://Admin:S%40king10@cluster0.83b3qvq.mongodb.net/secrets?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

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
  bcrypt.hash(req.body.password, saltrounds, function (err, hash) {
    if (err) console.log(err);
    else
      CreateUser(req.body.username, hash).then(function () {
        res.redirect("/");
      });
  });
});

app.post("/login", function (req, res) {
  FindUser(req.body.username).then(function (foundUser) {
    if (!foundUser) {
      res.status(404);
    } else {
      bcrypt.compare(
        req.body.password,
        foundUser.password,
        function (err, result) {
          if (err) console.log(err);
          else {
            if (result === true) {
              res.render("secrets");
            }
          }
        }
      );
    }
  });
});

app.listen(3000, function () {
  console.log("Server Running in port 3000");
});
