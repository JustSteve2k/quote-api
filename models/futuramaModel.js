const mongoose = require("mongoose");

const futuramaSchema = mongoose.Schema({
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

module.exports = mongoose.model("futurama", futuramaSchema);
