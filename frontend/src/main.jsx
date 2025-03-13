import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Layout } from './layouts/Layout.jsx'
import { BookContextProvider } from './context/BookContext.jsx'
import { AuthorContextProvider } from './context/AuthorContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthorContextProvider>
    <BookContextProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </BookContextProvider>
    </AuthorContextProvider>
  </StrictMode>,
)
