const mongoose = require("mongoose");

const footerMenuSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FooterMenus", footerMenuSchema, "FooterMenus");
