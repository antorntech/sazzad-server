const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("TaskList", taskListSchema, "TaskList");
