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
import PrivateRouter from "../context/PrivateRouter";

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
            path:'/myBooking/:email',
            element:<PrivateRouter> <MyBooking></MyBooking> </PrivateRouter>
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
            element: <PrivateRouter><PackageDetails></PackageDetails> </PrivateRouter>
        },
        {
            path:'/bookNow/:id',
             hydrateFallbackElement: <Loader></Loader> ,
            loader: ({params}) => axios(`http://localhost:3000/package/${params.id}`) ,
            Component:BookNow,
        },
        {
            path:'/addPackage',
            element: <PrivateRouter> <AddPackage></AddPackage> </PrivateRouter>
        },
        {
            path:'/managePackage/:email',
            element: <PrivateRouter> <ManagePackage></ManagePackage>  </PrivateRouter>
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