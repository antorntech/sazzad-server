const mongoose = require("mongoose");

// Define the HeroContent schema
const heroContentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  banner: {
    type: String,
  },
});

// Create the HeroContent model
const HeroContent = mongoose.model(
  "HeroContent",
  heroContentSchema,
  "HeroContent"
);

module.exports = HeroContent;
