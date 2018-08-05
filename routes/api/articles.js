const router = require("../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/:query/:begin/:end")
  .get(articlesController.search);

  // Matches with "/api/books"
router.route("/")
.get(articlesController.findAll)
.post(articlesController.create);


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
