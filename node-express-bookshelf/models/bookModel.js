// Disclaimer: the database is written here directly in the file
// Ideally it would be a database, ok?

const allBooks = [
    {
        "id": 1,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "publishedYear": 1954
    },
    {
        "id": 2,
        "title": "Dune",
        "author": "Frank Herbert",
        "publishedYear": 1965
    },
    {
        "id": 3,
        "title": "Foundation",
        "author": "Isaac Asimov",
        "publishedYear": 1951
    },
    {
        "id": 4,
        "title": "1984",
        "author": "George Orwell",
        "publishedYear": 1949
    }
]

var find = () => {
    return allBooks;
}

var findById = (id) => {
    return allBooks.find(book => book.id === parseInt(id));
}

var create = (book) => {
    const newId = Math.max(...allBooks.map(b => b.id)) + 1;
    book.id = newId;
    allBooks.push(book);
    return book;
}

var update = (id, book) => {
    const index = allBooks.findIndex(book => book.id === parseInt(id));
    book.id = parseInt(id);
    if (index !== -1) { allBooks[index] = book; return book; } else return null;
}

var remove = (id) => {
    // allBooks = allBooks.filter(book => book.id !== id);
    const index = allBooks.findIndex(book => book.id === parseInt(id));
    // We're using splice because we're pretending the array can be really big
    if (index !== -1) {
        allBooks.splice(index, 1);
    }
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove
};