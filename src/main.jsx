import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './tutorial/Home.jsx'
import myelement from './tutorial/RenderHtml.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {myelement}
  </StrictMode>,
)
