import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import RightSide from "../components/RightContent/RightSide";
import LeftSide from "../components/LeftContent/LeftSide";

function SiteLayout({children}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        <div className="flex flex-grow">
          <LeftSide />
          <div className="flex-1 bg-gray-100 p-4">
            {children}
          </div>
          <RightSide />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default SiteLayout


