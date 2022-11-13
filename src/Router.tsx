import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import About from "./screens/About";
import Root from "./Root";
import Users from "./screens/users/Users";
import User from "./screens/users/User";
import ErrorComponent from "./components/ErrorComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user",
        element: <Users />,
        children: [{ path: ":Id", element: <User /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);
