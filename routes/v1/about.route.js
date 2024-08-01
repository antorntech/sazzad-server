const express = require("express");
const app = express.Router();

const aboutController = require("../../controllers/about.controller");

app.get("/", aboutController.getAbout);
app.get("/:aboutId", aboutController.singleAbout);
app.post("/add", upload.single("banner"), aboutController.addAbout);
app.put(
  "/update/:aboutId",
  upload.single("banner"),
  aboutController.updateAbout
);
app.delete("/delete/:aboutId", aboutController.deleteAbout);

module.exports = app;
