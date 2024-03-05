const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teams: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Division", divisionSchema);
