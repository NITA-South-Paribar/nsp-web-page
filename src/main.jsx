import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { MemberSignUp } from './components/SignUp/MemberSignUp.jsx'
import { About } from './components/About/About.jsx'
import { ImageGallery } from './components/ImageGallery/ImageGallery.jsx'
import MemberDasboard from './components/MemberPage/MemberDasboard/MemberDasboard.jsx'
import MemberDetails from './components/MemberPage/MemberDetails/MemberDetails.jsx'
import Home from './components/Home/Home.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<ImageGallery />} />
      <Route path="/members" element={<MemberDasboard />} />
      <Route path="/members/:memberId" element={<MemberDetails />} />
      <Route path="/signup" element={<MemberSignUp />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
