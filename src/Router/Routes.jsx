import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement:<ErrorPage/>,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp/>,
  },
  {
    path: "/signIn",
    element: <SignIn/>,
  },
]);

export default Routes;
