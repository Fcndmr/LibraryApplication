import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AuthorList from "./pages/Admin/Author/AuthorList"
import CreateAuthor from "./pages/Admin/Author/CreateAuthor";
import UpdateAuthor from "./pages/Admin/Author/UpdateAuthor";
import CategoryList from "./pages/Admin/Category/CategoryList";
import CreateCategory from "./pages/Admin/Category/CreateCategory";
import UpdateCategory from "./pages/Admin/Category/UpdateCategory";

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
          <Route path="authors/update/:id" element={<UpdateAuthor/>}/>
          <Route path="categories" element={<CategoryList/>}/>
          <Route path="categories/create" element={<CreateCategory/>}/>
          <Route path="categories/update/:id" element={<UpdateCategory/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
