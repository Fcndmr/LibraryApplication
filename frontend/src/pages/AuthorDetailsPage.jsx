import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/Card/BookCard";

function AuthorDetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const author = location.state?.author;
    const { books, loading } = useContext(BookContext);
    
    if (!author) {
        return (
            <div className="flex justify-center min-h-screen">
            <div className="text-4xl text-center">
              Veri bulunamadı!  
              <button 
                className="block mt-4 px-6 py-2 bg-red-500 text-white text-lg font-bold rounded-md hover:bg-red-600 transition"
                onClick={() => navigate("/")} 
              >
                Anasayfaya Dön
              </button>
            </div>
          </div>
        );
      }

      const authorBooks = books.filter(book => book.author.name === author.name);
    
      return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
          
          <div className="flex justify-center">
            <img 
              className="w-90 h-135 object-cover rounded-2xl shadow-md" 
              src={`../../public/${author.img}`} 
              alt={author.name} 
            />
          </div>
    
          
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mt-6">{author.name}</h1>
          
          <div className="mt-6 text-lg text-gray-800 font-semibold space-y-3">
            <p>
              <span className="font-bold text-gray-900">🌍 Milliyet:</span> {author.nationality}
            </p>
            <p>
              <span className="font-bold text-gray-900">📅 Doğum Yılı:</span> {author.birthYear}
            </p>
          </div>

          <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">📚 Yazara Ait Kitaplar</h2>

                {loading ? (
                    <p className="text-center text-lg mt-4">Yükleniyor...</p>
                ) : authorBooks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        {authorBooks.map(book => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg mt-4 text-gray-500">Bu yazara ait kitap bulunamadı.</p>
                )}
            </div>
    
          <div className="mt-6 text-center">
            <button 
              className="px-6 py-2 bg-blue-500 text-white text-lg font-bold rounded-md hover:bg-blue-600 transition"
              onClick={() => navigate(-1)}
            >
              Geri Dön
            </button>
          </div>
        </div>
      );
  
}

export default AuthorDetailsPage
