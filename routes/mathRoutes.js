const express = require("express");

const mathController = require("../controllers/math.Controller");

const router = express.Router();

router.get("/addition", mathController.getAddition);

router.get("/subtraction", mathController.getSubtraction);

router.get("/", mathController.getBase);

router.use("/", mathController.getDefault);

module.exports = router;
