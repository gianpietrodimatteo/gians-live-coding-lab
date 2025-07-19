import styles from './BookSearch.module.css';

    // "author": "Gabriel García Márquez",
    // "title": "Love in the Time of Cholera",
    // "country": "Colombia",
    // "language": "Spanish",
    // "pages": 348,
    // "year": 1985
function BookItem({ book }) {
    return (
        <div data-testid="book" className= { styles.bookItem }>
            <dl>
                <dt>Title:</dt>
                <dd>{book.title}</dd>
                <dt>Author:</dt>
                <dd>{book.author}</dd>
                <dt>Country:</dt>
                <dd>{book.country}</dd>
                <dt>Language:</dt>
                <dd>{book.language}</dd>
                <dt>Pages:</dt>
                <dd>{book.pages}</dd>
                <dt>Year:</dt>
                <dd>{book.year}</dd>
            </dl>
        </div>
    )
}

export default BookItem;