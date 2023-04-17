import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Footer from  './components/footer/Footer'
import Featured from './components/featured/Featured'
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/gig/Gig"
import MyGigs from './pages/MyGigs/MyGigs'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Orders from './pages/orders/Orders'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const App = () => {


  const Layout =() => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path: 'gig/:id',
          element: <Gig />
        },
        {
          path:'gigs',
          element:<Gigs />
        },
        {
          path: 'mygigs',
          element: <MyGigs />
        },
        {
          path:'add',
          element: <Add />
        },
        {
          path:'messages',
          element:<Messages />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
        {
          path: 'orders',
          element: <Orders />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }
  ])

  return (<RouterProvider router={router}/>)
}

export default App