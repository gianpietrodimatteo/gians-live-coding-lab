var express = require("express");
var router = express.Router();
var bookController = require("../controllers/bookController");
var bookMiddleware = require("../middleware/bookMiddleware")

router.get("/", bookController.getAllBooks);
router.get("/:id", bookMiddleware.validateBookExists, bookController.findBookById);
router.post("/", bookController.createBook);
router.put("/:id", bookMiddleware.validateBookExists, bookController.updateBook);
router.delete("/:id", bookMiddleware.validateBookExists, bookController.deleteBook);

module.exports = router;
