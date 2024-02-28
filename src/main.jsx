import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store/store.js"
import { Provider } from 'react-redux'
import Home from './components/Home.jsx'
import Offers from './components/Offers.jsx'
import About from './components/About.jsx'
import SignIn from './components/SignIn.jsx'
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<App/>}>
  <Route path='' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/offers' element={<Offers/>}/>
 </Route>

))



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
     <RouterProvider router={router} />
  
</Provider>
)
