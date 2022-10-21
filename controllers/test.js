exports.getJson = (req, res, next) => {
  console.log("testing json features!");
  res.type("json");
  res.send({ person: "Bill", age: 22, occupation: "Plumber" });
};

exports.getMoreJson = (req, res, next) => {
  console.log("testing followup json features!");
  res.type("json");
  res.send({ person: "Mario Bros", system: "NES" });
};

exports.getHtml = (req, res, next) => {
  console.log("testing out HTML features");
  res.type(".html");
  res.send("<h1>HTML TEST</html>");
};

exports.getRandomNum = (req, res, next) => {
  let max = req.params.id;
  let num = 0;

  // console.log(max);
  num = Math.floor(Math.random() * max);

  res.type("json");
  res.send({ original: max, yourNumber: num });
};
