import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext"
import BookCard from "../components/Card/BookCard";

function BookPage() {
    const { books, loading } = useContext(BookContext);
    const [searchTerm, setSearchTerm] = useState("");

    if (loading) return <div className="text-4xl">Yükleniyor...</div>;

    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
       <div className="p-4">
            <div className="mb-4">
                <input 
                    type="text"
                    placeholder="Kitap ara..."
                    className="w-full p-2 border rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => <BookCard key={book._id} book={book} />)
                ) : (
                    <div className="text-center col-span-4 text-xl">Sonuç bulunamadı.</div>
                )}
            </div>
        </div>
    </>
  )
}

export default BookPage
