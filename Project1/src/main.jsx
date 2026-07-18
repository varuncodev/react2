import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";

const dataRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/Home",
        element: <Home /> 
      },
      { 
        path: "/Products",
        element: <Products /> 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={dataRouter} />
  </>,
);
