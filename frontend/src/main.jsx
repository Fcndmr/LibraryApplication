import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Layout } from './layouts/Layout.jsx'
import { BookContextProvider } from './context/BookContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </BookContextProvider>
  </StrictMode>,
)
