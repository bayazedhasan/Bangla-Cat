import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Parts from './Pages/Parts/Parts';
import Technology from './Pages/Technology/Technology';
import Contact from './Pages/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/services",
        element:<Services></Services>
      },
      {
        path:"/parts",
        element:<Parts></Parts>
      },
      {
        path:"/technology",
        element:<Technology></Technology>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
