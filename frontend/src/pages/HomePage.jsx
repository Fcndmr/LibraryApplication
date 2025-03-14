import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { AuthorContext } from "../context/AuthorContext";
import BookCard from "../components/Card/BookCard";
import AuthorCard from "../components/Card/AuthorCard";

function HomePage() {
  const { books, loading: booksLoading } = useContext(BookContext);
  const { authors, loading: authorsLoading } = useContext(AuthorContext);

  if (booksLoading || authorsLoading) return <div className="text-4xl">Yükleniyor...</div>;

  const recentBooks = books.slice(-4);
  const recentAuthors = authors.slice(-4);

  return (
    <>
      <div className="container mx-auto p-6">
      
      <div>
        <h2 className="text-3xl font-semibold mb-4">En Son Eklenen Kitaplar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">En Son Eklenen Yazarlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentAuthors.map((author) => (
            <AuthorCard key={author._id} author={author} />
          ))}
        </div>
      </div>

      
    </div>
    </>
  );
}

export default HomePage;
