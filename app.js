const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", "views");

const testRoutes = require("./routes/test");
const usersRoutes = require("./routes/users");
const quoteRoutes = require("./routes/quotes");
const mathRoutes = require("./routes/mathRoutes");
// const { connect } = require("http2");

// Static folder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

app.get("/main", (req, res, next) => {
  console.log(`Working on port ${port}!`);
  //   res.send("<h1>Main page!</h1>");
  res.render("main");
});

app.get("/alternate", (req, res, next) => {
  console.log("alternate works in the console!");
  res.send("works via res.send!");
});

app.get("/joke", (req, res, next) => {
  res.send("here is a joke, why is 6 afraid of 7, cause 7 8 9. Yuk yuk");
});

app.use("/math", mathRoutes);

app.use("/test", testRoutes);

app.use("/users", usersRoutes);

app.use("/quotes", quoteRoutes);

app.get("/", (req, res, next) => {
  console.log("this is the main page.");
  res.send("<h1>This is the main page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Someone is lost");
  res.status(404).send("<h1>Error 404, Youre lost</h1>");
});

app.listen(port);
