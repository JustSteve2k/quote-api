const Simpsons = require("../models/simpsonsModel");

exports.getSimpsons = (req, res, next) => {
  res.send("<h1>Here is the main page for quotes</h1>.");
};

exports.postSimpsons = async (req, res, next) => {
  let quote = req.body.quote;
  let speaker = req.body.speaker;
  let episode = req.body.episode;
  let extra = req.body.extra;

  console.log(quote.green);
  console.log(speaker);
  console.log(episode);
  console.log(extra);

  let saying = { quote: quote, speaker: speaker, episode: episode, extra: extra };

  console.log(saying);

  const result = await Simpsons.create(saying);

  console.log(result);

  res.send("Thanks for sending the request!");
};
