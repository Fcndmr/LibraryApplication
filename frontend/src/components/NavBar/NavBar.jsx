import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    setIsLoggedIn(false);
    navigate("/user");
  };
  return (
    <>
      <div className="bg-gray-700 p-3 flex justify-center">
        <NavLink to="/" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Ana Sayfa</NavLink>
        <NavLink to="/book" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Kitaplar</NavLink>
        <NavLink to="/author" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Yazarlar</NavLink>
        <NavLink to="/contact" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">İletişim</NavLink>
        <NavLink to="/about" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Hakkımızda</NavLink>
        {isLoggedIn ? (
        <button onClick={handleLogout} className="text-white p-2 text-2xl hover:bg-red-600 hover:text-gray-200 hover:rounded-lg">
          Çıkış Yap
        </button>
      ) : (
        <NavLink to="/user" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg">
          Giriş Yap
        </NavLink>
      )}
      
      </div>
    </>
  )
}

export default NavBar
