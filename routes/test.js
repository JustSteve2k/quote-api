const express = require("express");

const testController = require("../controllers/test");

const router = express.Router();

router.get("/json", testController.getJson);

router.get("/MoreJson", testController.getMoreJson);

router.get("/html", testController.getHtml);

router.get("/random/:id", testController.getRandomNum);

module.exports = router;
