const TaskList = require("../models/TaskList");

module.exports.getTaskList = async (req, res) => {
  try {
    const taskList = await TaskList.find({});

    res.status(200).send(taskList);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.singleTaskList = async (req, res) => {
  try {
    const { taskListId } = req.params;
    const taskList = await TaskList.findById(taskListId);

    res.status(200).send(taskList);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.addTaskList = async (req, res) => {
  try {
    const { label, value } = req.body;

    const newTaskList = new TaskList({
      label: label,
      value: value,
    });

    await newTaskList.save();

    res.status(200).json({
      message: "TaskList created successfully",
      taskList: newTaskList,
    });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports.updateTaskList = async (req, res) => {
  try {
    const { taskListId } = req.params;

    const result = await TaskList.findByIdAndUpdate(taskListId, {
      $set: {
        label: req.body.label,
        value: req.body.value,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
};

module.exports.deleteTaskList = async (req, res) => {
  try {
    const { taskListId } = req.params;
    const deletTaskList = await TaskList.findByIdAndDelete(taskListId);

    if (!deletTaskList) {
      return res.status(404).send("Head menu is not found");
    }

    const recentTaskList = await TaskList.find({});

    res.status(200).send(recentTaskList);
  } catch (error) {
    console.log("Error", error);
    res.status(500).send("Internal server error");
  }
};
