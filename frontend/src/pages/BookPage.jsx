import { useContext } from "react";
import { BookContext } from "../context/BookContext"
import BookCard from "../components/Card/BookCard";

function BookPage() {
    const { books, loading } = useContext(BookContext);

    if (loading) return <div className="text-4xl">Yükleniyor...</div>;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
          books.map(book => <BookCard key={book._id} book={book}/>)
        }
      </div>
    </>
  )
}

export default BookPage
