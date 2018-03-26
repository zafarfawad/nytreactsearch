const router = require("express").Router();
const articleRoutes = require("./articles.js");
const nytRoutes = require("./nyt.js");

// Book routes
router.use("/articles", articleRoutes);
router.use("/nyt", nytRoutes);

module.exports = router;
