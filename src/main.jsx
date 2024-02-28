// react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
// css
import "./index.css";
// components / pages
import Layout from "./Layout.jsx";
import ShopPage from "./pages/shop-page/ShopPage.jsx";
import DiscoverPage from "./pages/discover-page/DiscoverPage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import CartPage from "./pages/cart-page/CartPage.jsx";
import ProductPage from "./pages/product-page/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: "/shop",
    element: (
      <Layout>
        <ShopPage />
      </Layout>
    ),
  },
  {
    path: "/discover",
    element: (
      <Layout>
        <DiscoverPage />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
