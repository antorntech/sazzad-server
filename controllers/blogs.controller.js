const Blogs = require("../models/Blogs");

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});

    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports.getRecentBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    const recentBlogs = blogs.reverse().slice(0, 3);
    res.status(200).send(recentBlogs);
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports.singleBlogs = async (req, res) => {
  try {
    const { blogsId } = req.params;
    const blogs = await Blogs.findById(blogsId);
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports.addBlogs = async (req, res) => {
  try {
    // Check if files were uploaded
    if (req.file) {
      Object.assign(req.body, {
        banner: "/uploads/images/" + req.file.filename,
      });
    }

    // Create new Blogs
    const newBlogs = new Blogs({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      tags: req.body.tags,
      banner: req.body.banner,
    });

    await newBlogs.save();

    return res.status(201).json({
      status: "success",
      message: "New Blogs created successfully!",
      data: newBlogs,
    });
  } catch (error) {
    console.log(error, "Error");
    res.send("Internal Server Error");
  }
};

module.exports.updateBlogs = async (req, res) => {
  try {
    const { blogsId } = req.params;

    if (req.file) {
      Object.assign(req.body, {
        banner: "/uploads/images/" + req.file.filename,
      });
    }

    const newBlogs = await Blogs.findByIdAndUpdate(blogsId, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: "success",
      message: "Data updated successfully!",
      data: newBlogs,
    });
  } catch (error) {
    console.log(error, "Error");
    res.send("Internal Server Error");
  }
};

module.exports.deleteBlogs = async (req, res) => {
  try {
    const { blogsId } = req.params;
    const blogs = await Blogs.findByIdAndDelete(blogsId);
    res.status(200).json({
      status: "success",
      message: "Blogs deleted successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error: error.message,
    });
  }
};
