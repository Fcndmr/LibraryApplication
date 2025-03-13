import { createContext, useState, useEffect } from "react";

const AuthorContext = createContext();

function AuthorContextProvider({children}){
    const [ authors, setAuthors] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7000/api/authors")
            .then(res => res.json())
            .then(data => {
                setAuthors(data);
                setLoading(false);
            })
            .catch((err) => console.error("Veri çekme hatası:", err));
    }, [])

    return (
        <AuthorContext.Provider value={{authors, loading}}>
            {children}
        </AuthorContext.Provider>
    )
};

export {AuthorContext, AuthorContextProvider}