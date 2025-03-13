import { useLocation, useNavigate } from "react-router-dom";

function BookDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state?.book;

    if (!book) {
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
    
      return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
          
          <div className="flex justify-center">
            <img 
              className="w-90 h-135 object-cover rounded-2xl shadow-md" 
              src={`../../public/${book.img}`} 
              alt={book.title} 
            />
          </div>
    
          
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mt-6">{book.title}</h1>
          <h2 className="text-2xl text-gray-700 text-center italic font-semibold">{book.author.name}</h2>
    
          <div className="mt-6 text-lg text-gray-800 font-semibold space-y-3">
            <p>
              <span className="font-bold text-gray-900">📖 Sayfa Sayısı:</span> {book.pageCount}
            </p>
            <p>
              <span className="font-bold text-gray-900">🏢 Yayınevi:</span> {book.publisher.name}
            </p>
            <p>
              <span className="font-bold text-gray-900">📂 Kategori:</span> {book.category.name}
            </p>
            <p>
              <span className="font-bold text-gray-900">📅 Basım Yılı:</span> {book.publishedYear}
            </p>
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

export default BookDetails
