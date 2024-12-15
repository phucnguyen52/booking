import { createBrowserRouter, redirect } from "react-router-dom";
import { APP_ROUTER } from "../utils/Constants";
import MainLayout from "../layout/Main/MainLayout";
import AuthLayout from "../layout/Auth/AuthLayout";
import HomePage from "../page/Home/HomePage";

import BookingPage from "../page/Booking/BookingPage";
import Login from "../page/Auth/Login/Login";
import Register from "../page/Auth/Register/Register";
import Order from "../page/Order/Order";
import OrderDetail from "../page/Order/OrderDetail";
import Payment from "../page/Order/Payment";
import HotelDetail from "../page/HotelDetail/HotelDetail";
import Timeline from "../components/Calendar/Timeline";
import BookingDetails from "../page/BookingDetails/BookingDetails";
import AllRoom from "../page/RoomHotel/AllRoom";
import Information from "../page/Order/Information";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: APP_ROUTER.HOME,
                element: <HomePage />,
                index: true,
            },
            {
                path: APP_ROUTER.BOOKING,
                element: <BookingPage />,
            },
            {
                path: APP_ROUTER.HOTELDETAIL,
                element: <HotelDetail />,
            },

            {
                path: APP_ROUTER.ORDER,
                element: <Order />,
            },
        ],
    },
    {
        path: APP_ROUTER.USER,
        element: <PrivateRoutes role="customer" />,
        children: [
            {
                path: APP_ROUTER.BOOKINGDETAILS,
                element: <BookingDetails />,
            },
        ],
    },
    {
        path: APP_ROUTER.ADMIN,
        element: <PrivateRoutes role="admin" />,
        children: [           
            {
                path: APP_ROUTER.TIMELINE,
                element: <Timeline />,
            },
            {
                path: APP_ROUTER.ALLROOM,
                element: <AllRoom />,
            },
        ],
    },
    {
        path: APP_ROUTER.AUTH,
        element: <AuthLayout />,
        children: [
            {
                path: APP_ROUTER.LOGIN,
                element: <Login />,
                index: true,
            },
            {
                path: APP_ROUTER.REGISTER,
                element: <Register />,
            },
        ],
    },
]);

export default router;
