import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AuthorList from "./pages/Admin/Author/AuthorList"
import CreateAuthor from "./pages/Admin/Author/CreateAuthor";
import UpdatedAuthor from "./pages/Admin/Author/UpdatedAuthor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/admin/*">
          <Route path="authors" element={<AuthorList/>}/>
          <Route path="authors/create" element={<CreateAuthor/>}/>
          <Route path="authors/update/:id" element={<UpdatedAuthor/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
