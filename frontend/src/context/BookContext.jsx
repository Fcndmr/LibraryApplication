import { createContext, useState, useEffect } from "react";

const BookContext = createContext();

function BookContextProvider({children}){
    const [ books, setBooks] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7000/api/books")
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch((err) => console.error("Veri çekme hatası:", err));
    }, [])

    return (
        <BookContext.Provider value={{books, loading}}>
            {children}
        </BookContext.Provider>
    )
};

export {BookContext, BookContextProvider}

