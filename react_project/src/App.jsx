import React from "react";
import "./style/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./assets/components/Layout/Layout";
import Home from "./assets/pages/Home/Home";
import Shop from "./assets/pages/Shop/Shop";
import Contact from "./assets/pages/Contact/Contact";
import Pages from "./assets/pages/Pages";
import About from "./assets/pages/About/About";
import Checkout from "./assets/pages/Checkout/Checkout";
import Account from "./assets/pages/Account/Account";
import Cart from "./assets/pages/cart/Cart";
import Faq from "./assets/pages/Faq/Faq";
import Wishlist from "./assets/pages/Wishlist/Wishlist";
import BlogDetails from "./assets/pages/Blog-details/BlogDetails";
import BlogOutlet from "./assets/pages/BlogOutlet/BlogOutlet";
import Blog from "./assets/pages/Blog/Blog";
import ShopOutlet from "./assets/pages/ShopOutlet/ShopOutlet";
import ShopDetails from "./assets/pages/Shop-Details/ShopDetails";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
        {
          path: "shop", 
          element: <ShopOutlet/>, children: [
            {path: "shop", element: <Shop />},
            {path: "ShopDetails", element: <ShopDetails />}
          ]
        },
        {
          path: "contact", 
          element: <Contact />,
        },
        {
          path: "pages", 
          element: <Pages />, 
          children: [
            {
              path: "about", 
              element: <About />,
            },
            {
              path: "checkout",
            element: <Checkout />,}, {
              path: "Account" ,
              element: <Account />
            },{
              path: "Cart" ,
              element: <Cart />//
            },{
              path: "Wishlist" ,
              element: <Wishlist />
             } , 
             {
              path: "Faq" ,
              element: <Faq />
             }
          ],
        },
        {
          path: "Blog", 
          element: <BlogOutlet />, children: [
            { path: "Blog", element: <Blog/> },
            { path: "BlogDetails", element: <BlogDetails /> },
          ]
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} /> 
  );
}
