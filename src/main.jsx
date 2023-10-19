import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './main_components/root';
import ErrorPage from './main_components/ErrorPage';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import BrandDetails from './pages/BrandDetails';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import UpdateProduct from './pages/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
      },
      {
        path: '/mycart',
        element: <MyCart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/products/details/:brand',
        element: <Products />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/details/${params.brand}`)
      },
      {
        path: '/brdetails/:id',
        element: <BrandDetails />,
        loader: () => fetch('/brands.json')
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
