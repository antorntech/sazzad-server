const express = require("express");
const app = express.Router();

const headmenuController = require("../../controllers/headmenu.controller");

app.get("/", headmenuController.allHeadMenu);
app.get("/:headMenuId", headmenuController.singleHeadMenu);
app.post("/add", headmenuController.addHeadMenu);
app.put("/update/:headMenuId", headmenuController.updateHeadMenu);
app.delete("/delete/:headMenuId", headmenuController.deleteHeadMenu);

module.exports = app;
