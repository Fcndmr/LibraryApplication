import { useContext } from "react";
import { AuthorContext } from "../../context/AuthorContext";
import { BookContext } from "../../context/BookContext";
import { QuoteContext } from "../../context/QuoteContext";
import { CategoryContext } from "../../context/CategoryContext";
import { PublisherContext } from "../../context/PublisherContext";

function LeftSide() {
  const { authors } = useContext(AuthorContext);
  const { books } = useContext(BookContext);
  const { quotes } = useContext(QuoteContext);
  const { categories } = useContext(CategoryContext);
  const { publishers } = useContext(PublisherContext);

  return (
    <>
    <div className="w-[15%] bg-gray-300 p-4 text-gray-600">
      <div className="text-2xl font-bold mb-6 border-b-2">Kütüphane Bilgileri</div>
      
      <div className="text-xl font-semibold mb-5">
        Eklenen Yazar Sayısı: {authors.length}
      </div>
      <div className="text-xl font-semibold mb-5">
        Eklenen Kitap Sayısı: {books.length}
      </div>
      <div className="text-xl font-semibold mb-5">
        Eklenen Yayınevi Sayısı: {publishers.length}
      </div>
      <div className="text-xl font-semibold mb-5">
        Eklenen Kategori Sayısı: {categories.length}
      </div>
      <div className="text-xl font-semibold mb-5">
        Eklenen Alıntı Sayısı: {quotes.length}
      </div>
    </div> 
    </>
  )
}

export default LeftSide
