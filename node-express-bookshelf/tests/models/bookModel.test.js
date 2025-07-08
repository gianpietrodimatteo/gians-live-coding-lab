const bookModel = require("../../models/bookModel");

test('Test find all books', () => {
    const allBooks = bookModel.find();
    expect(allBooks).toHaveLength(4);
    expect(allBooks[0]).toHaveProperty("title", "The Lord of the Rings");
});

// grouping functions example
describe('find book by id', () => {
    test('find by id', () => { 
        const foundBook = bookModel.findById(1);
        expect(foundBook).toBeDefined();
        expect(foundBook).toHaveProperty("title", "The Lord of the Rings");
    });
    test('try to find non existant', () => {
        expect(bookModel.findById(999)).toBeUndefined();
    });
});

const newBook = {
    title: "test book",
    author: "test author",
    publishedYear: ""
}

test('create book', () => {
    const createdBook = bookModel.create(newBook);
    expect(createdBook).toBeDefined();
    expect(createdBook).toHaveProperty("title", "test book");
})

describe('test update', () => {
    test("sucessfull update", () => {
        const updatedBook = bookModel.update("1", newBook);
        expect(updatedBook).toBeDefined();
        expect(updatedBook).toHaveProperty('title','test book');
    });

    test('not found', () => {
        expect(bookModel.update('20', newBook)).toBeNull();
    });
})

describe('test delete', () => {
    test("sucessfull delete", () => {
        bookModel.remove("1");
        expect(bookModel.findById(1)).toBeUndefined();
    });
})
