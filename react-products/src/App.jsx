import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Contactus from "./components/ContactUs";
import Product from "./components/Product";
import React from 'react'

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "products",
        element: <ProductsList />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "contactus",
        element: <Contactus />
      }
    ]
  }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
