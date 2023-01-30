const express = require("express");
const quotesController = require("../controllers/quotesController");
const Futurama = require("../models/futuramaModel");

const router = express.Router();

router.get("/", quotesController.getQuotesMain);

router.get("/simpsons", quotesController.getSimpsonsRandom);

router.post("/simpsons", quotesController.postSimpsons);

router.get("/futurama", quotesController.getFuturama);

router.post("/futurama", quotesController.postFuturama);

router.get("/futurama/person", quotesController.getFuturamaPerson);

router.delete("/futurama/person", quotesController.deleteFuturamaPerson);

// Needs
// simpsons/count - tells how many quotes are in the database for simpsons
// futurama/count - tells how many quotes are in the databse for futurama

module.exports = router;
