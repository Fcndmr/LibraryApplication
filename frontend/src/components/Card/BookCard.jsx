import { Link } from "react-router-dom";

function BookCard({book}) {
  return (
    <>
      <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-3">
          <div className="w-full aspect-[2/3]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={`../../public/${book.img}`}
              alt="Card Image"
            />
          </div>
          <div className="p-3 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gray-900">
              {book.title}
            </h2>
            <h3 className="text-sm text-gray-600 mt-1 italic">{book.author.name}</h3>
            <Link to={`/book/${book._id}`} state={{ book }}>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-4 rounded-md transition">
                Detaylı Bak
              </button>
            </Link>
            
          </div>
        </div>
    </>
  )
}

export default BookCard
