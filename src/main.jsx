// react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// css
import "./index.css";
// components / pages
import Layout from "./Layout.jsx";
import ShopPage from "./pages/shop-page/ShopPage.jsx";
import DiscoverPage from "./pages/discover-page/DiscoverPage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
