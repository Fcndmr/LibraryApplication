import { createContext, useState, useEffect } from "react";

const CategoryContext = createContext();

function CategoryContextProvider({children}){
    const [ categories, setCategories] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7000/api/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch((err) => console.error("Veri çekme hatası:", err));
    }, [])

    return (
        <CategoryContext.Provider value={{categories, loading}}>
            {children}
        </CategoryContext.Provider>
    )
};

export {CategoryContext, CategoryContextProvider}