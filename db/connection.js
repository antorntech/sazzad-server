const mongoose = require("mongoose");

// const url = `mongodb+srv://designerarif:designerarif@cluster0.edf8x1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const url = "mongodb://localhost:27017/designerarif";

const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
