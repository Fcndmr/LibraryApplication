import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import SiteLayout from './layouts/SiteLayout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SiteLayout>
        <App />
      </SiteLayout>
    </BrowserRouter>
  </StrictMode>,
)
