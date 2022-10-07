const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const testRoutes = require("./routes/test");
const usersRoutes = require("./routes/users");

// Static folder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;

app.get("/main", (req, res, next) => {
  console.log(`Working on port ${port}!`);
  //   res.send("<h1>Main page!</h1>");
  res.render("main");
});

app.use("/test", testRoutes);

app.use("/users", usersRoutes);

app.use("/", (req, res, next) => {
  console.log("I think you're lost");
  res.status(404).send("<h1>Yoooure loooost, go back</h1>");
});

app.listen(port);
