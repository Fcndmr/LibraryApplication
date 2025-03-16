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
import PublisherList from "./pages/Admin/Publisher/PublisherList";
import CreatePublisher from "./pages/Admin/Publisher/CreatePublisher";
import UpdatePublisher from "./pages/Admin/Publisher/UpdatePublisher";
import BookList from "./pages/Admin/Book/BookList";
import CreateBook from "./pages/Admin/Book/CreateBook";
import UpdateBook from "./pages/Admin/Book/UpdateBook";
import QuoteList from "./pages/Admin/Quote/QuoteList";
import CreateQuote from "./pages/Admin/Quote/CreateQuote";
import UpdateQuote from "./pages/Admin/Quote/UpdateQuote";
import BookDetailsPage from "./pages/BookDetailsPage";
import AuthorDetailsPage from "./pages/AuthorDetailsPage";
import AuthorPage from "./pages/AuthorPage";
import BookPage from "./pages/BookPage";
import AccountPage from "./pages/AccountPage";
import UserList from "./pages/Admin/User/UserList";
import CreateUser from "./pages/Admin/User/CreateUser";
import UpdateUser from "./pages/Admin/User/UpdateUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/book" element={<BookPage/>}/>
        <Route path="/book/:bookId" element={<BookDetailsPage/>}/>
        <Route path="/author" element={<AuthorPage/>}/>
        <Route path="/author/:authorId" element={<AuthorDetailsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/user" element={<AccountPage/>}/>
        <Route path="/admin/*">
          <Route path="authors" element={<AuthorList/>}/>
          <Route path="authors/create" element={<CreateAuthor/>}/>
          <Route path="authors/update/:id" element={<UpdateAuthor/>}/>
          <Route path="categories" element={<CategoryList/>}/>
          <Route path="categories/create" element={<CreateCategory/>}/>
          <Route path="categories/update/:id" element={<UpdateCategory/>}/>
          <Route path="publishers" element={<PublisherList/>}/>
          <Route path="publishers/create" element={<CreatePublisher/>}/>
          <Route path="publishers/update/:id" element={<UpdatePublisher/>}/>
          <Route path="books" element={<BookList/>}/>
          <Route path="books/create" element={<CreateBook/>}/>
          <Route path="books/update/:id" element={<UpdateBook/>}/>
          <Route path="quotes" element={<QuoteList/>}/>
          <Route path="quotes/create" element={<CreateQuote/>}/>
          <Route path="quotes/update/:id" element={<UpdateQuote/>}/>
          <Route path="users" element={<UserList/>}/>
          <Route path="users/create" element={<CreateUser/>}/>
          <Route path="users/update/:id" element={<UpdateUser/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
