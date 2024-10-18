import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  useLoaderData,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Error404 } from './components/Error404/Error404';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home/Home';
import { Root } from './components/Root/Root';
import { MenuPage } from './components/MenuPage/MenuPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error404/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },      
      {
        path:'/menu',
        element:<MenuPage/>
      },      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);