var express = require("express");
var router = express.Router();
var bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.findBookById);
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
