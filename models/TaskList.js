const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("TaskList", taskListSchema, "TaskList");
