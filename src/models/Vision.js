const mongoose = require("mongoose");

const Vision = mongoose.Schema({
    visionH : String,
    vision : String,
    missionH : String,
    mission : String,
    vandm : String
});

module.exports = mongoose.model("vision", Vision)
