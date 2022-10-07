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
