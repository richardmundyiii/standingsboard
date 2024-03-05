const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
  },
  losses: {
    type: Number,
  },
  rs: {
    type: Number,
  },
  ra: {
    type: Number,
  },
  homeRecord: {
    type: String,
  },
  awayRecord: {
    type: String,
  },
});

module.exports = mongoose.model("Team", teamSchema);
