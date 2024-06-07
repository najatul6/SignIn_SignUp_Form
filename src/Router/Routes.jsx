import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import Form from "../Pages/Form/Form";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/signUp",
        element: <SignUp/>,
      },
      {
        path: "/signIn",
        element: <SignIn/>,
      },
      ],
      },
        {
          path: "/form",
          element: <Form/>,
        },
        {
          path: "/signIn",
          element: <SignIn/>,
        },
        {
          path: "/form",
          element: <Form/>,
        },
  
]);

export default Routes;
