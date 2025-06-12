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
import UpdatePackage from "../page/UpdatePackage";
import Loader from "../components/Loader";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
        {
            index:true,
             hydrateFallbackElement: <Loader></Loader> ,
             loader: () => axios('http://localhost:3000/feature') ,
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
            path:'/details/:id',
            hydrateFallbackElement: <Loader></Loader> ,
            loader: ({params}) => axios(`http://localhost:3000/package/${params.id}`) ,
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
            path:'/managePackage/:email',
             hydrateFallbackElement: <Loader></Loader> ,
            loader: ({params}) => axios(`http://localhost:3000/my-package/${params.email}`) ,
            Component:ManagePackage,
        },
        {
            path:'/updatePackage/:id',
            hydrateFallbackElement: <Loader></Loader> ,
            loader: ({params}) => axios(`http://localhost:3000/package/${params.id}`) ,
            Component:UpdatePackage,
        },
    ]
  },
]);