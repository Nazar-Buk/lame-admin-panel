import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import { productInputs, userInputs } from "./formSource";

import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/users",
      children: [
        {
          index: true,
          element: <List />,
        },
        {
          path: ":userId",
          element: <Single />,
        },
        {
          path: "new",
          element: <New inputs={userInputs} title="Add New User" />,
        },
      ],
    },
    {
      path: "/products",
      children: [
        {
          index: true,
          element: <List />,
        },
        {
          path: ":productId",
          element: <Single />,
        },
        {
          path: "new",
          element: <New inputs={productInputs} title="Add New Product" />,
        },
      ],
    },
  ]);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} fallbackElement={<>Loading ...</>} />
    </div>
  );
}

export default App;
