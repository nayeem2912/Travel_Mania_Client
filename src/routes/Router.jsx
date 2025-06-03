import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AllPackage from "../page/AllPackage";
import MyBooking from "../page/MyBooking";
import AboutUs from "../page/AboutUs";
import Register from "../page/Register";
import LogIn from "../page/LogIn";
import ErrorPage from "../page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/allPackage',
            Component:AllPackage,
        },
        {
            path:'/myBooking',
            Component:MyBooking,
        },
        {
            path:'/aboutUs',
            Component:AboutUs,
        },
        {
            path:'/register',
            Component:Register,
        },
        {
            path:'/login',
            Component:LogIn,
        }
    ]
  },
]);