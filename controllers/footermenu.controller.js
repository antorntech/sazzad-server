const FooterMenu = require("../models/FooterMenu");

module.exports.allFooterMenu = async (req, res) => {
  try {
    const footerMenu = await FooterMenu.find({});

    res.status(200).send(footerMenu);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.singleFooterMenu = async (req, res) => {
  try {
    const { footerMenuId } = req.params;
    const footerMenu = await FooterMenu.findById(footerMenuId);

    res.status(200).send(footerMenu);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.addFooterMenu = async (req, res) => {
  try {
    const { label, path } = req.body;

    const newFooterMenu = new FooterMenu({
      label: label.charAt(0).toUpperCase() + label.slice(1).toLowerCase(),
      path: "/" + path,
    });

    await newFooterMenu.save();

    res.status(200).json({
      message: "FooterMenu created successfully",
      footerMenu: newFooterMenu,
    });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports.updateFooterMenu = async (req, res) => {
  try {
    const { footerMenuId } = req.params;

    const result = await FooterMenu.findByIdAndUpdate(footerMenuId, {
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

module.exports.deleteFooterMenu = async (req, res) => {
  try {
    const { footerMenuId } = req.params;
    const deletFooterMenu = await FooterMenu.findByIdAndDelete(footerMenuId);

    if (!deletFooterMenu) {
      return res.status(404).send("Head menu is not found");
    }

    const recentFooterMenu = await FooterMenu.find({});

    res.status(200).send(recentFooterMenu);
  } catch (error) {
    console.log("Error", error);
    res.status(500).send("Internal server error");
  }
};
