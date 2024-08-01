const HeadMenu = require("../models/HeadMenu");

module.exports.allHeadMenu = async (req, res) => {
  try {
    const headMenu = await HeadMenu.find({});

    res.status(200).send(headMenu);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.singleHeadMenu = async (req, res) => {
  try {
    const { headMenuId } = req.params;
    const headMenu = await HeadMenu.findById(headMenuId);

    res.status(200).send(headMenu);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.addHeadMenu = async (req, res) => {
  try {
    const { label, path } = req.body;

    const newHeadMenu = new HeadMenu({
      label: label.charAt(0).toUpperCase() + label.slice(1).toLowerCase(),
      path: "/" + path,
    });

    await newHeadMenu.save();

    res.status(200).json({
      message: "HeadMenu created successfully",
      headMenu: newHeadMenu,
    });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports.updateHeadMenu = async (req, res) => {
  try {
    const { headMenuId } = req.params;

    const result = await HeadMenu.findByIdAndUpdate(headMenuId, {
      $set: {
        label: req.body.label,
        path: "/" + req.body.path,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
};

module.exports.deleteHeadMenu = async (req, res) => {
  try {
    const { headMenuId } = req.params;
    const deletHeadMenu = await HeadMenu.findByIdAndDelete(headMenuId);

    if (!deletHeadMenu) {
      return res.status(404).send("Head menu is not found");
    }

    const recentHeadMenu = await HeadMenu.find({});

    res.status(200).send(recentHeadMenu);
  } catch (error) {
    console.log("Error", error);
    res.status(500).send("Internal server error");
  }
};
