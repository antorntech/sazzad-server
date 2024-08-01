const mongoose = require("mongoose");

const headMenusSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HeadMenus", headMenusSchema, "HeadMenus");
