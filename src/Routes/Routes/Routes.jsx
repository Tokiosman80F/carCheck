import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Booking from "../../pages/Booking/Booking";
import BookingItems from "../../pages/BookingItems/BookingItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "bookingItems",
        element: (
          <PrivateRoute>
            <BookingItems></BookingItems>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
