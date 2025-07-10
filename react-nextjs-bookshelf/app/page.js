import allBooks from "../sample_data/books.json"
import BookSearch from "./components/BookSearch";

export default function Home() {
  return (
    <BookSearch books={allBooks}></BookSearch>
  );
}
