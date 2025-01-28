import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import AddUser from "../pages/user/addUser";
import AllUsers from "../pages/user/allUsers";
import Home from "../pages/home/home";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addUser", element: <AddUser /> },
      { path: "/allUsers", element: <AllUsers /> },
    ],
  },
]);
