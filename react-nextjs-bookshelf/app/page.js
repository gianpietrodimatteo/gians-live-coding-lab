import books from "../sample_data/books.json"
import BookSearch from "./components/BookSearch";

export default function Home() {
  return (
    <BookSearch books={books}></BookSearch>
  );
}
