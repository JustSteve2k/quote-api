exports.getAddition = (req, res, next) => {
  res.send("You've reached the addition section!");
};

exports.getSubtraction = (req, res, next) => {
  res.send("Youve reached the subtraction section!");
};

exports.getDefault = (req, res, next) => {
  res.send("you might be lost in the math section.");
};

exports.getBase = (req, res, next) => {
  res.send("Base math api");
};
