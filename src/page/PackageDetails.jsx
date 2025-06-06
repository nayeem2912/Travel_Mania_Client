import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
 import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router';


const PackageDetails = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className="card card-side flex-col lg:flex-row bg-gray-50 text-gray-800 border-1 border-black shadow-sm">
  <figure>
    <img className=' p-10'
      src="/public/download (1).jpeg"
      alt="Movie" />
  </figure>
  <div className="card-body mt-3 ml-4  ">
    <div className='flex text-lg items-center gap-3'>
            <FaMapMarkerAlt className='text-gray-800' /> <h2 className="font-semibold text-[#0084ff]"> Dhaka to Cox’s Bazar Beach Escape</h2>
        </div>
        <div>
            <h2 className='font-bold text-lg'>Guide Information:</h2>
            <div className='mt-2 ml-3'>
                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' /> <div className="avatar">
  <div className="w-12 rounded">
    <img
      src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
      alt="Tailwind-CSS-Avatar-component"
    />
  </div>
</div>
        </div>
        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
             <p className="font-semibold text-lg"><span className='text-sm'>Contact No:</span>  BDT 5500</p> 
        </div>
        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg"><span className='text-sm'>Contact No:</span>  BDT 5500</p>
        </div>

        


            </div>

        </div>

        
                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Duration:  <span className=' text-[#0084ff]'>BDT 5500</span></p>
        </div>


                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Departure Location:  <span className=' text-[#0084ff]'>BDT 5500</span></p>
        </div>

                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Departure Date:  <span className=' text-[#0084ff]'>BDT 5500</span></p>
        </div>


                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Price <span className='font-light'>(per person)</span> : <span className=' text-[#0084ff]'>BDT 5500</span></p>
        </div>

        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Booking Count:  <span className=' text-[#0084ff]'>BDT 5500</span></p>
        </div>


        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Description:  <span className=' text-[#0084ff]'>BDT 5500</span></p>
        </div>
    
    
    <div className="card-actions justify-end">
      <Link to='/bookNow'>
       <a  class="relative inline-block px-4 py-2 font-medium group"> 
    <span class="absolute inset-0 w-full h-full bg-[#0084ff]  group-hover:bg-black"></span>
    <span class="relative text-white group-hover:text-white">Book Now</span>
</a>
      </Link>
    </div>
  </div>
</div>


        </div>
    );
};

export default PackageDetails;