import { createContext, useState, useEffect } from "react";

const QuoteContext = createContext();

function QuoteContextProvider({children}){
    const [ quotes, setQuotes] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7000/api/quotes")
            .then(res => res.json())
            .then(data => {
                setQuotes(data);
                setLoading(false);
            })
            .catch((err) => console.error("Veri çekme hatası:", err));
    }, [])

    return (
        <QuoteContext.Provider value={{quotes, loading}}>
            {children}
        </QuoteContext.Provider>
    )
};

export {QuoteContext, QuoteContextProvider}