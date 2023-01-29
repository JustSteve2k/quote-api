const express = require("express");
const quotesController = require("../controllers/quotesController");
const Futurama = require("../models/futuramaModel");

const router = express.Router();

router.get("/", quotesController.getSimpsons);

router.get("/simpsons", (req, res, next) => {
  res.send("<h1>this will produce a random simpsons quote</h1>");
});

router.post("/simpsons", quotesController.postSimpsons);

router.get("/futurama", async (req, res, next) => {
  let quote = "";

  Futurama.count().exec((err, count) => {
    // Get a random entry
    let random = Math.floor(Math.random() * count);

    // Again query all users but only fetch one offset by our random #
    Futurama.findOne()
      .skip(random)
      .exec(function (err, result) {
        console.log(result);
        res.send(result);
        //res.send(`${result.quote} - ${result.speaker}`);
      });
  });
});

router.post("/futurama", quotesController.postFuturama);

router.get("/Futurama/person", quotesController.getFuturamaPerson);

router.delete("/futurama/person", async (req, res, next) => {
  let name = req.query.name;

  const result = await Futurama.deleteOne({ speaker: name });

  console.log(result);

  res.send(`You want to delete entry with ${name} as the name , ${result.deletedCount} were found and deleted`);
});

module.exports = router;
