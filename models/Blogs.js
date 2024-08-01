const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  headTitle: {
    type: String,
  },
  subHeadTitle: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
  },
  banner: {
    type: String,
  },
});

module.exports = mongoose.model("Blogs", blogsSchema, "Blogs");
