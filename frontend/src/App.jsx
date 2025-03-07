import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AuthorList from "./pages/Admin/Author/AuthorList"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/admin/*">
          <Route path="authors" element={<AuthorList/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
