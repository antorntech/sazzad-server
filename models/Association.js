const mongoose = require("mongoose");

const associationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  logo: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Association",
  associationSchema,
  "Association"
);
