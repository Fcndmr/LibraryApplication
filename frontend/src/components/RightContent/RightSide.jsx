import { useContext } from "react";
import { QuoteContext } from "../../context/QuoteContext";

function RightSide() {
  const { quotes } = useContext(QuoteContext);

  const randomQuote = quotes.length > 0 ? quotes[Math.floor(Math.random() * quotes.length)] : null;
  return (
    <>
      <div className="w-[15%] bg-gray-300 p-4 text-gray-600">
      <div className="text-2xl font-bold mb-6 border-b-2">Rastgele Alıntı</div>
      {randomQuote ? (
        <>
          <p className="italic">"{randomQuote.text}"</p>
          <p className="mt-2 text-right">- {randomQuote.author?.name || "Bilinmeyen Yazar"}</p>
          <p className="mt-2 text-right">- {randomQuote.book?.title || "Bilinmeyen Kitap"}</p>
        </>
      ) : (
        <p>Henüz alıntı eklenmemiş.</p>
      )}
    </div>
    </>
  )
}

export default RightSide
