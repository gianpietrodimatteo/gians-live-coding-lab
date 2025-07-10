'use client'

import BookItem from "./BookItem"
import { useState } from "react";

// "title": "Things Fall Apart",
// "author": "Chinua Achebe",
// "country": "Nigeria",
// "language": "English",
// "pages": 209,
// "year": 1958

function BookSearch({ books }) {
    const [filteredBooks, setBooks] = useState(books);
    const [searchObj, setSearchObj] = useState({
        title: '',
        author: '',
        country: '',
        language: '',
        year: ''
    });

    const refilter = () => {
        setBooks(books.filter(book => {
            return (
                book.title.toLowerCase().includes(searchObj.title.toLowerCase()) &&
                book.author.toLowerCase().includes(searchObj.author.toLowerCase()) &&
                book.country.toLowerCase().includes(searchObj.country.toLowerCase()) &&
                book.language.toLowerCase().includes(searchObj.language.toLowerCase()) &&
                book.year.toString().toLowerCase().includes(searchObj.year.toLowerCase())
            );
        }));
    };

    return (
        <div>
            <div className="filter-section">
                <label>
                    Title:
                    <input data-testid="title" type="text" id="title" name="title" placeholder="Search by title" value={searchObj.title} onChange={e => { setSearchObj({ ...searchObj, title: e.target.value }); refilter() }} />
                </label>
                <label>
                    Author:
                    <input data-testid="author" type="text" id="author" name="author" placeholder="Search by author" value={searchObj.author} onChange={e => { setSearchObj({ ...searchObj, author: e.target.value }); refilter() }} />
                </label>
                <label>
                    Country:
                    <input data-testid="country" type="text" id="country" name="country" placeholder="Search by country" value={searchObj.country} onChange={e => { setSearchObj({ ...searchObj, country: e.target.value }); refilter() }} />
                </label>
                <label>
                    Language:
                    <input data-testid="language" type="text" id="language" name="language" placeholder="Search by language" value={searchObj.language} onChange={e => { setSearchObj({ ...searchObj, language: e.target.value }); refilter() }} />
                </label>
                <label>
                    Year:
                    <input data-testid="year" type="text" id="year" name="year" placeholder="Search by year" value={searchObj.year} onChange={e => { setSearchObj({ ...searchObj, year: e.target.value }); refilter() }} />
                </label>
            </div>

            {filteredBooks.map((book, index) => {
                return <BookItem key={index} book={book} />
            })}
        </div>
    )
}

export default BookSearch;