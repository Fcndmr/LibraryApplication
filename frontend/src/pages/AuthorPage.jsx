import { useContext } from "react";
import { AuthorContext } from "../context/AuthorContext"
import AuthorCard from "../components/Card/AuthorCard";

function AuthorPage() {
    const { authors, loading } = useContext(AuthorContext);

  if (loading) return <div className="text-4xl">Yükleniyor...</div>;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
          authors.map(author => <AuthorCard key={author._id} author={author}/>)
        }
      </div>
    </>
  )
}

export default AuthorPage
