import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Home from './tutorial/Home.jsx'
// import { myElement } from './tutorial/Jsx.jsx'
import { CarCls, Car, Garage } from './tutorial/Car.jsx'
// import myelement from './tutorial/RenderHtml.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarCls />
    <Car color="red" />
    <Garage />
  </StrictMode>,
)
