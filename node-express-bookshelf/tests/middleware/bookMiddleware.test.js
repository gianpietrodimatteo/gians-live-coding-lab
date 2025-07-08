const bookMiddleware = require('../../middleware/bookMiddleware');
const bookModel = require('../../models/bookModel');

jest.mock('../../models/bookModel');

let req, res, next;

beforeEach(() => {
    req = {
        params: {},
        body: {}
    };
    res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
        end: jest.fn()
    };
    next = jest.fn();

    jest.clearAllMocks();
});

test('test validate book exists', () => {
    const mockBook = {title: "book", author: "author"};
    bookModel.findById.mockReturnValue(mockBook);
    req.params.id = '1';

    bookMiddleware.validateBookExists(req, res, next);

    expect(bookModel.findById).toHaveBeenCalledWith('1');
    expect(req.book).toBeDefined();
    expect(req.book).toEqual(mockBook);
    expect(req.book).toHaveProperty("title", "book");
    expect(next).toHaveBeenCalled();
});

test('test validate 404 response book does not exist', () => {
    bookModel.findById.mockReturnValue(undefined);
    req.params.id = '999';

    bookMiddleware.validateBookExists(req, res, next);

    expect(bookModel.findById).toHaveBeenCalledWith('999');
    expect(req.book).toBeUndefined();
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({error: "Book not found"});
    expect(next).not.toHaveBeenCalled();
});