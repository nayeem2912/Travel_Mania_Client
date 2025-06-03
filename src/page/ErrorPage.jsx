import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import animation from '../assets/Animation - 1748966334984.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-264px)] my-6'>
           <div className=' flex justify-center'>
            <Lottie style={{width: '300px'}} animationData={animation}></Lottie>
           </div>
           <div className='text-center mt-4 space-y-5'>
            <h1 className='font-semibold text-xl'>
                “We’re sorry. The page you requested could not be found. Please go back to the homepage.”
            </h1>
            <Link to='/'>
        <button className="btn rounded-full btn-xs sm:btn-sm md:btn-md text-[#FFFFFF] lg:my-5 bg-[#0084ff]  xl:btn-xl">Back to home</button>
        </Link>
           </div>
           </main>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;