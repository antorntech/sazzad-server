const express = require("express");
const app = express.Router();

const footerMenuController = require("../../controllers/footermenu.controller");

app.get("/", footerMenuController.allFooterMenu);
app.get("/:footerMenuId", footerMenuController.singleFooterMenu);
app.post("/add", footerMenuController.addFooterMenu);
app.put("/update/:footerMenuId", footerMenuController.updateFooterMenu);
app.delete("/delete/:footerMenuId", footerMenuController.deleteFooterMenu);

module.exports = app;
