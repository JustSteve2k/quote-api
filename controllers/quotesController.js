const Simpsons = require("../models/simpsonsModel");
const Futurama = require("../models/futuramaModel");

// Main route - Welcome
exports.getQuotesMain = async (req, res, next) => {
  res.send("<h1>Here is the main page for quotes</h1>.");
};

// Gets a random simpsons quote
exports.getSimpsonsRandom = async (req, res, next) => {
  res.send("<h1>this will produce a random simpsons quote</h1>");
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

exports.postFuturama = async (req, res, next) => {
  let quote = req.body.quote;
  let speaker = req.body.speaker;
  let episode = req.body.episode;

  let saying = { quote: quote, speaker: speaker, episode: episode };
  console.log(saying);
  // res.send(`Got the saying from ${speaker}`);

  const result = await Futurama.create(saying);
  res.send(result);
  console.log(result);
};

exports.getFuturama = async (req, res, next) => {
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
};

exports.getFuturamaPerson = async (req, res, next) => {
  let name = req.query.name;

  console.log(name);
  console.log(`Looking for ${name}`);
  const result = await Futurama.find({ speaker: name });

  console.log(result);
  console.log(`Found ${result.length} matches`);

  result.length > 0 ? res.send(` ${name}, found ${result.length} matches`) : res.send("Couldnt find anything with that info.");
};

exports.deleteFuturamaPerson = async (req, res, next) => {
  let name = req.query.name;

  const result = await Futurama.deleteOne({ speaker: name });

  console.log(result);

  res.send(`You want to delete entry with ${name} as the name , ${result.deletedCount} were found and deleted`);
};
