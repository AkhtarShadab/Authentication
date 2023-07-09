require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportMongoose = require("passport-local-mongoose");

const app = express();

// setting up app
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: process.env.SOME_32BYTE_BASE64_STRING,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// database connection
mongoose.connect(
  `mongodb+srv://Admin:S%40king10@cluster0.83b3qvq.mongodb.net/secrets?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
// utility functions and schemas
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  secrets: String,
});
userSchema.plugin(passportMongoose);

const User = mongoose.model("user", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// helper functions
async function AddSecret(id, secret) {
  const user = await User.updateOne({ _id: id }, { secrets: secret });
  return user;
}
// async function CreateUser(email, password) {
//   await User.create({ email: email, password: password });
// }
// async function FindUser(email) {
//   const user = await User.findOne({ email: email });
//   return user;
// }

async function FindSecretUser() {
  const user = await User.find({ secrets: { $ne: null } });
  return user;
}

// app routes

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
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secrets");
      });
    }
  });
});
app.get("/secrets", function (req, res) {
  FindSecretUser().then(function (founduser) {
    if (founduser) {
      res.render("secrets", { usersWithSecrets: founduser });
    }
  });
});

app.get("/submit", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else res.redirect("/login");
});
app.post("/submit", function (req, res) {
  const submittedSecret = req.body.secret;
  const id = req.user.id;
  if (req.isAuthenticated()) {
    AddSecret(id, submittedSecret).then(function (updateres, err) {
      if (err) console.log(err);
      else {
        res.redirect("/secrets");
      }
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", function (req, res) {
  req.logOut(function (err) {
    if (err) console.log(err);
    res.redirect("/");
  });
});
app.listen(3000, function () {
  console.log("Server Running in port 3000");
});
