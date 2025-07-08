var bookController = require("../../controllers/bookController");
var bookModel = require("../../models/bookModel");

jest.mock("../../models/bookModel");

let req, res;

const mockBooks = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book2' }
];
const mockBook1 = mockBooks[0];
const newBook = { id: 3, title: 'NewBook', author: 'Author'};

beforeEach(() => {
    req = {
        params: {},
        body: {}
    }
    res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
        end: jest.fn()
    }
});

afterEach(() => {
    jest.clearAllMocks();
})

test('test get all books', () => {
    bookModel.find.mockReturnValue(mockBooks);

    bookController.getAllBooks(req, res);

    expect(bookModel.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockBooks);
});

test('find book by id', () => {
    req.book = mockBook1;
    req.params.id = '1';
    bookController.findBookById(req, res);

    expect(res.json).toHaveBeenCalledWith(mockBook1);
});

test('create new book', () => {
    bookModel.create.mockReturnValue(newBook);
    req.body = newBook;

    bookController.createBook(req, res);

    expect(bookModel.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(newBook);
});

test('delete book', () => {
    req.book = newBook;

    bookController.deleteBook(req, res);

    expect(bookModel.remove).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.end).toHaveBeenCalled();
});

test('update book', () => {
    req.book = {id: 1, title: 'Old title'};
    req.body = {title: 'new title'};
    const updatedBook = {id: 1, title: 'new title'};
    bookModel.update.mockReturnValue(updatedBook);

    bookController.updateBook(req, res);

    expect(bookModel.update).toHaveBeenCalledWith(1, req.body);
    expect(res.json).toHaveBeenCalledWith(updatedBook);
})