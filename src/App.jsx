import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Main from './pages/Main/Main'
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Nothing from './pages/Nothing/Nothing'
import ProductById from './pages/ProductById/ProductById'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Main />
                },
                {
                    path: "product",
                    element: <Product />
                },
                {
                    path: "product/product/:id",
                    element: <ProductById />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "*",
                    element: <Nothing />
                },
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default App