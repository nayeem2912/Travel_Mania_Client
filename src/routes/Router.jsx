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
import ContactPage from "../page/ContactPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../components/Statistics";
import TermsOfUse from "../page/TermsOfUse";
import PrivacyPolicy from "../page/PrivacyPolicy";
import BlogList from "../components/Blog/BlogList";
import BlogDetails from "../components/Blog/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
        {
            index:true,
             hydrateFallbackElement: <Loader></Loader> ,
             loader: () => axios('https://travel-menia-server.vercel.app/feature') ,
            Component:Home
        },
        {
            path:'/allPackage',
            Component:AllPackage,
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
            path:'/contact',
            Component:ContactPage,
        },
        {
            path:'/details/:id',
            element: <PrivateRouter><PackageDetails></PackageDetails> </PrivateRouter>
        },
        {
            path:'/term',
            Component: TermsOfUse,
        },
        {
            path:'/privacy',
            Component: PrivacyPolicy,
        },
        {
            path:'/blog',
            Component: BlogList,
        },
        {
            path:'/blog/:id',
            Component: BlogDetails,
        },
        
        
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children:[
        {
          index: true,
        element: (
          <PrivateRouter>
            <Statistics />
          </PrivateRouter>
        ),
        },
        {
            path:'allPackage',
            Component:AllPackage,
        },
        {
            path:'myBooking/:email',
            element:<PrivateRouter> <MyBooking></MyBooking> </PrivateRouter>
        },
        {
            path:'bookNow/:id',
            element: <PrivateRouter> <BookNow></BookNow> </PrivateRouter>
        },
        {
            path:'addPackage',
            element: <PrivateRouter> <AddPackage></AddPackage> </PrivateRouter>
        },
        {
            path:'managePackage/:email',
            element: <PrivateRouter> <ManagePackage></ManagePackage>  </PrivateRouter>
        },
        {
            path:'updatePackage/:id',
            element: <PrivateRouter> <UpdatePackage></UpdatePackage> </PrivateRouter>
        },
    ]
  }
]);