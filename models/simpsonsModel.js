const mongoose = require("mongoose");

const simpsonsSchema = mongoose.Schema({
  quote: {
    type: String,
  },
  speaker: {
    type: String,
  },
  episode: {
    type: String,
  },
});

module.exports = mongoose.model("simpsons", simpsonsSchema);
