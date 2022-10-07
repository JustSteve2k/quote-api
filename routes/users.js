const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Main user page reached.");
  res.send("<h1>Main user page reached !</h1>");
});

router.get("/list", (req, res, next) => {
  console.log("this is a list of all the users");
  res.send("<h1>User List !</h1>");
});

router.use("/", (req, res, next) => {
  console.log("youre lost somewhere on test.");
  res.status(404).send("<h1>Error 404!</h1>");
});

module.exports = router;
