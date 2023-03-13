const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  emoji: {
    type: String,
    required: [true, "Cannot be empty"],
  },
  name: {
    type: String,
    required: [true, "Cannot be empty"],
  },
  meaning: {
    type: String,
    required: [true, "Cannot be empty"],
  },
});

const Details = new mongoose.model("detail", detailSchema);

module.exports = Details;
