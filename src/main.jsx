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
import ProductDetails from './private_components/ProductDetails';
import AuthProvider from './main_components/AuthProvider';
import PrivateRoute from './private_components/PrivateRoute';

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
        path: '/addProduct',
        element: <PrivateRoute><AddProduct /></PrivateRoute>,
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart /></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/cart`)
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/products/details/:brand',
        element: <Products />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/details/${params.brand}`)
      },
      {
        path: '/brDetails/:id',
        element: <BrandDetails />,
        loader: () => fetch('/brands.json')
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/products/infos/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
