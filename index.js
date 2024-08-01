const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

// There are the code of file upload
global.upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      fs.mkdirSync("public/uploads/images", { recursive: true });
      cb(null, "public/uploads/images");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
});

// app Use
const app = express();

app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use((req, res, next) => {
  console.log("HTTP Method - " + req.method + " URL - " + req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const adminRoutes = require("./routes/v1/admin.route");
const headMenuRoutes = require("./routes/v1/headmenu.route");
const heroContentRoutes = require("./routes/v1/herocontent.route");
const taskListRoutes = require("./routes/v1/tasklist.route");
const blogRoutes = require("./routes/v1/blogs.route");
const aboutRoutes = require("./routes/v1/about.route");
const contactRoutes = require("./routes/v1/contact.route");
const footerMenuRoutes = require("./routes/v1/footermenu.route");

// DB Connection
const connection = require("./db/connection");

// Connect DB
connection();

const port = process.env.PORT || 8000;

// All Routes will be here
app.get("/", (req, res) => {
  res.send("Welcome to Sazzad Hossain's Server");
});

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/headmenu", headMenuRoutes);
app.use("/api/v1/herocontent", heroContentRoutes);
app.use("/api/v1/tasklist", taskListRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/about", aboutRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/footermenu", footerMenuRoutes);

app.listen(port, () => {
  console.log("listening on port " + port);
});
