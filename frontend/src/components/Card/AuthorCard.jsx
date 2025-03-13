import { Link } from "react-router-dom";

function AuthorCard({author}) {
  return (
    <>
      <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-3">
          <div className="w-full aspect-[2/3]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={`../../public/${author.img}`}
              alt="Card Image"
            />
          </div>
          <div className="p-3 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gray-900">
              {author.name}
            </h2>
            <Link to={`/author/${author._id}`} state={{ author }}>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-4 rounded-md transition">
                Detaylı Bak
              </button>
            </Link>  
          </div>
        </div>
    </>
  )
}

export default AuthorCard
