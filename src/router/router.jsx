import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
    ],
  },
]);
