import React from 'react'
import './app.css'
import './output.css'
import './responsive.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/homepage/Home'
import Nav from './components/navbar/Nav'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/profile/Profile'
import PropertySearch from './components/properties/PropertySearch';
import SingleProperty from './components/properties/SingleProperty';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Home /></div>,
    },
    {
      path: "/profile",
      element: <div><Profile /></div>,
    },
    {
      path: "/properties",
      element: <div><PropertySearch /></div>,
    },
    {
      path: "/properties/1",
      element: <div><SingleProperty /></div>
    },
    {
      path: "/login",
      element: <div><Login /></div>
    },
    {
      path: "/register",
      element: <div><Register /></div>
    }
  ]);

  return (
    <div>
      <div className="container">
        <Nav />
        <RouterProvider router={router} />
      </div>

    </div>
  )
}

export default App