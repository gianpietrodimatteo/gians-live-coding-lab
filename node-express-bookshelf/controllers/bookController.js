var bookModel = require("../models/bookModel");

var getAllBooks = (req, res) => {
    res.json(bookModel.find());
}

var findBookById = (req, res) => {
    res.json(req.book);
}

var createBook = (req, res) => {
    res.status(201).json(bookModel.create(req.body));
}

var deleteBook = (req, res) => {
    bookModel.remove(req.book.id);
    res.status(204).end();
}

var updateBook = (req, res) => {
    res.json(bookModel.update(req.book.id, req.body));
}

module.exports = { getAllBooks, findBookById, createBook, deleteBook, updateBook };