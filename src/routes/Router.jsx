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
import PackageDetails from "../page/PackageDetails";
import BookNow from "../page/BookNow";
import AddPackage from "../page/AddPackage";
import ManagePackage from "../page/ManagePackage";

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
        },
        {
            path:'/details',
            Component:PackageDetails,
        },
        {
            path:'/bookNow',
            Component:BookNow,
        },
        {
            path:'/addPackage',
            Component:AddPackage,
        },
        {
            path:'/managePackage',
            Component:ManagePackage,
        },
    ]
  },
]);