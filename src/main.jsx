import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './style/index.css'

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