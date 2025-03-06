import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="bg-[#1E293B] p-3 flex justify-center">
        <NavLink to="/" className="text-[#E5E7EB] p-2 text-2xl hover:bg-[#60A5FA] hover:text-black hover:rounded-lg" href="#">Ana Sayfa</NavLink>
        <NavLink to="/contact" className="text-[#E5E7EB] p-2 text-2xl hover:bg-[#60A5FA] hover:text-black hover:rounded-lg" href="#">İletişim</NavLink>
        <NavLink to="/about" className="text-[#E5E7EB] p-2 text-2xl hover:bg-[#60A5FA] hover:text-black hover:rounded-lg" href="#">Hakkımızda</NavLink>    
      </div>
    </>
  )
}

export default NavBar
