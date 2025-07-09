import BookItem from "./BookItem"

function BookSearch({ books }) {
    return (
        <div>
            <a>Book Search here!</a>
            {books.map(( book, index ) => {
                return <BookItem  key= {index} book={book} />
            })}
        </div>
    )
}

export default BookSearch;