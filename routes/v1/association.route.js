const express = require("express");
const app = express.Router();

const associationController = require("../../controllers/association.controller");

app.get("/", associationController.getAssociation);
app.get("/:taskListId", associationController.singleAssociation);
app.post("/add", upload.single("logo"), associationController.addAssociation);
app.put(
  "/update/:taskListId",
  upload.single("logo"),
  associationController.updateAssociation
);
app.delete("/delete/:taskListId", associationController.deleteAssociation);

module.exports = app;
