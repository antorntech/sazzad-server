const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  description: {
    type: String,
  },
  banner: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("About", aboutSchema, "About");
