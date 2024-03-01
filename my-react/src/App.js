import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomeMain from './Components/HomeMain';
import Login from './Components/Login';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Clist from './Components/Clist';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element:<><Navbar/><Login/></>
    },
    {
      path: "/",
      element:<><Navbar/><HomeMain/></>
    },
    {
      path: "/About",
      element:<><Navbar/><About/></>
    },
    {
      path: "/Contact",
      element:<><Navbar/><ContactUs/></>
    },
    {
      path: "/Clist",
      element:<><Navbar/><Clist/></>
    },
  ])
  return (
    <>     
      <RouterProvider router={router} />
    </>
  );
}

export default App;
