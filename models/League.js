const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  divisions: {
    type: Schema.Types.ObjectId,
    ref: "Division",
  },
});

module.exports = mongoose.model("League", leagueSchema);
