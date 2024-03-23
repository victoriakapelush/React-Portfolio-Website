import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Work from './Work.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work",
    element: <Work />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);