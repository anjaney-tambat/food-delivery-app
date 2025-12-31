import React from "react";
import Cart from "./components/Cart";
import MyOrders from "./components/MyOrders";
import { CartProvider } from "./utils/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Checkout from "./components/Checkout";
import { AuthProvider } from "./utils/AuthContext";
import { CartContext } from "./utils/CartContext";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
        {    path: "/",
        element: <Body/>
        },
            {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
    },
{
  path: "/login",
  element: <Login />
},
{
  path: "/signup",
  element: <Signup />
},
{
  path: "/cart",
  element: <Cart />
},
{
  path: "/myorders",
  element: (
    <ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>
  )
},
{
  path: "/checkout",
  element: (
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  )
}
        ],
        errorElement: <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>
  </AuthProvider>
);