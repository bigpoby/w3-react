import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Home from './tutorial/Home.jsx'
// import { myElement } from './tutorial/Jsx.jsx'
// import { CarCls, Car, Garage } from './tutorial/Car.jsx'
// import myelement from './tutorial/RenderHtml.jsx'
import Car3, { CarProps, Garage }  from './tutorial/Car3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car3 color="blue" />
    <CarProps model="Mustang"/>
    <Garage color="yellow"/>
  </StrictMode>,
)
