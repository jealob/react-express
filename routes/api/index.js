const router = require("../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express").Router();
const articleRoutes = require("./articles");

// Articles routes
router.use("/articles", articleRoutes);

module.exports = router;
