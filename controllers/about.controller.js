const About = require("../models/About");

module.exports.getAbout = async (req, res) => {
  try {
    const about = await About.find({});

    res.status(200).send(about);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.singleAbout = async (req, res) => {
  try {
    const { aboutId } = req.params;
    const about = await About.findById(aboutId);

    res.status(200).send(about);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.addAbout = async (req, res) => {
  try {
    // Check if files were uploaded
    if (req.file) {
      Object.assign(req.body, {
        banner: "/uploads/images/" + req.file.filename,
      });
    }

    // Create new About
    const newAbout = new About({
      title: req.body.title,
      description: req.body.description,
      banner: req.body.banner,
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
    });

    await newAbout.save();

    return res.status(201).json({
      status: "success",
      message: "New About created successfully!",
      data: newAbout,
    });
  } catch (error) {
    console.log(error, "Error");
    res.send("Internal Server Error");
  }
};

module.exports.updateAbout = async (req, res) => {
  try {
    const { aboutId } = req.params;

    if (req.file) {
      Object.assign(req.body, {
        banner: "/uploads/images/" + req.file.filename,
      });
    }

    const newAbout = await About.findByIdAndUpdate(aboutId, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: "success",
      message: "Data updated successfully!",
      data: newAbout,
    });
  } catch (error) {
    console.log(error, "Error");
    res.send("Internal Server Error");
  }
};

module.exports.deleteAbout = async (req, res) => {
  try {
    const { aboutId } = req.params;
    const about = await About.findByIdAndDelete(aboutId);

    if (!about) {
      return res.status(404).send("About not found");
    } else {
      return res.status(200).json({
        message: "About deleted successfully",
        about: about,
      });
    }
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
