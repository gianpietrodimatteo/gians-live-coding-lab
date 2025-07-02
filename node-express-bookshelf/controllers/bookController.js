var bookModel = require("../models/bookModel");

var getAllBooks = (req, res) => {
    res.json(bookModel.find());
}
var findBookById = (req, res) => {
    const book = bookModel.findById(req.params.id);
    if (book)
        res.json(book);
    else
        res.status(404).end();
}
var createBook = (req, res) => {
    res.status(201).json(bookModel.create(req.body));
}

var deleteBook = (req, res) => {
    bookModel.remove(req.params.id);
    res.status(204).end();
}
var updateBook = (req, res) => {
    const updatedBook = bookModel.update(req.params.id, req.body);
    if (updatedBook)
        res.json(updatedBook);
    else
        res.status(404).end();
}

module.exports = { getAllBooks, findBookById, createBook, deleteBook, updateBook };