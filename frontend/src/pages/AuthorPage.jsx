import { useContext, useState } from "react";
import { AuthorContext } from "../context/AuthorContext";
import AuthorCard from "../components/Card/AuthorCard";

function AuthorPage() {
    const { authors, loading } = useContext(AuthorContext);
    const [searchTerm, setSearchTerm] = useState("");

    if (loading) return <div className="text-4xl">Yükleniyor...</div>;

    const filteredAuthors = authors.filter(
      author => author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
       <div className="p-4">

            <div className="mb-4">
                <input 
                    type="text"
                    placeholder="Yazar ara..."
                    className="w-full p-2 border rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredAuthors.length > 0 ? (
                    filteredAuthors.map(author => <AuthorCard key={author._id} author={author} />)
                ) : (
                    <div className="text-center col-span-4 text-xl">Sonuç bulunamadı.</div>
                )}
            </div>
        </div>
    </>
  )
}

export default AuthorPage
