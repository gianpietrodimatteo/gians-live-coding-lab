const bookModel = require('../models/bookModel');

var validateBookExists = (req, res, next) => {
    const book = bookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    req.book = book;
    next();
}

module.exports = { validateBookExists };