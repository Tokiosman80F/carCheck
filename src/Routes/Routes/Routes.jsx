import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<LoginPage></LoginPage>
        },
        {
          path:"/register",
          element:<RegisterPage></RegisterPage>
        }
      ]
    },
  ]);