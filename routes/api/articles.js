const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/:query/:begin/:end")
  .get(articlesController.search);

  // Matches with "/api/books"
router.route("/")
.get(articlesController.findAll)
.post(articlesController.create);
  // router
  // .route("/")
  // .post(articlesController.findById)
  // .put(articlesController.update)
  // .delete(articlesController.remove);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(articlesController.findById)
//   .put(articlesController.update)
//   .delete(articlesController.remove);

  // router
  // .route("/:id")
  // .post(articlesController.findById)
  // .put(articlesController.update)
  // .delete(articlesController.remove);

module.exports = router;
