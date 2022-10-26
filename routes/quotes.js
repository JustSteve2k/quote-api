const express = require("express");
const Simpsons = require("../models/simpsonsModel");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Here is the main page for quotes</h1>.");
});

router.get("/simpsons", (req, res, next) => {
  res.send("<h1>this will produce a random simpsons quote</h1>");
});

router.post("/simpsons", async (req, res, next) => {
  let quote = req.body.quote;
  let speaker = req.body.speaker;
  let episode = req.body.episode;
  let extra = req.body.extra;

  console.log(quote);
  console.log(speaker);
  console.log(episode);
  console.log(extra);

  let saying = { quote: quote, speaker: speaker, episode: episode, extra: extra };

  console.log(saying);

  const result = await Simpsons.create(saying);

  console.log(result);

  res.send("Thanks for sending the request!");
});

router.get("/futurama", (req, res, next) => {
  res.send("<h1>this will produce a random futurama quote</h1>");
});

module.exports = router;
