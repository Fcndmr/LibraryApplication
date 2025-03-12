function HomePage() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-3">
          <div className="w-full aspect-[2/3]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="../../public/img/books/yusuf.png"
              alt="Card Image"
            />
          </div>
          <div className="p-3 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Yusufçuk Yusuf
            </h2>
            <h3 className="text-sm text-gray-600 mt-1 italic">Yaşar Kemal</h3>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-4 rounded-md transition">
              Detaylı Bak
            </button>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-3">
          <div className="w-full aspect-[2/3]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="../../public/img/books/handuv.jpg"
              alt="Card Image"
            />
          </div>
          <div className="p-3 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Han Duvarları
            </h2>
            <h3 className="text-sm text-gray-600 mt-1 italic">Faruk Nafiz Çamlıbel</h3>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-4 rounded-md transition">
              Detaylı Bak
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default HomePage;
