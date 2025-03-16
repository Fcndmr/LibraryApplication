import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="bg-gray-700 p-3 flex justify-center">
        <NavLink to="/" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Ana Sayfa</NavLink>
        <NavLink to="/book" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Kitaplar</NavLink>
        <NavLink to="/author" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Yazarlar</NavLink>
        <NavLink to="/contact" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">İletişim</NavLink>
        <NavLink to="/about" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Hakkımızda</NavLink>
        <NavLink to="/user" className="text-white p-2 text-2xl hover:bg-gray-600 hover:text-gray-200 hover:rounded-lg" href="#">Giriş Yap</NavLink>     
      </div>
    </>
  )
}

export default NavBar
