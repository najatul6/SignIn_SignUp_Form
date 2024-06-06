import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
  {
    path: "/signup",
    element: <h1>About</h1>,
  },
  {
    path: "/signin",
    element: <h1>Contact</h1>,
  },
]);

export default Routes;
