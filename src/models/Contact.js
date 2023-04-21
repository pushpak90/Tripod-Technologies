const mongoose = require('mongoose');

const Contact = mongoose.Schema({
  name : String,
  email : String,
  subject : String,
  message : String
});

module.exports = mongoose.model("queries", Contact);
