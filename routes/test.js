const express = require("express");

const testController = require("../models/test");

const router = express.Router();

router.get("/json", testController.getJson);

router.get("/MoreJson", testController.getMoreJson);

router.get("/html", testController.getHtml);

module.exports = router;
