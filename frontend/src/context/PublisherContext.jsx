import { createContext, useState, useEffect } from "react";

const PublisherContext = createContext();

function PublisherContextProvider({children}){
    const [ publishers, setpublishers] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7000/api/publishers")
            .then(res => res.json())
            .then(data => {
                setpublishers(data);
                setLoading(false);
            })
            .catch((err) => console.error("Veri çekme hatası:", err));
    }, [])

    return (
        <PublisherContext.Provider value={{publishers, loading}}>
            {children}
        </PublisherContext.Provider>
    )
};

export {PublisherContext, PublisherContextProvider}