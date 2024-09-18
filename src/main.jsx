import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Home from "./pages/Home.jsx"
import Contactus from "./pages/Contactus.jsx"
import ServicePage from "./pages/ServicePage.jsx"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element ={<Home/>}  />
<Route path='/about' element ={<Aboutus/>}  />
<Route path='/service' element ={<ServicePage/>}  />
<Route path='/contact' element ={<Contactus/>}  />





    </Route>))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
