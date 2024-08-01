const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  banner: {
    type: String,
  },
  mapUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema, "Contact");
