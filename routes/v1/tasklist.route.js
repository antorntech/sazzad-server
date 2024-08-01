const express = require("express");
const app = express.Router();

const tasklistController = require("../../controllers/tasklist.controller");

app.get("/", tasklistController.getTaskList);
app.get("/:taskListId", tasklistController.singleTaskList);
app.post("/add", tasklistController.addTaskList);
app.put("/update/:taskListId", tasklistController.updateTaskList);
app.delete("/delete/:taskListId", tasklistController.deleteTaskList);

module.exports = app;
