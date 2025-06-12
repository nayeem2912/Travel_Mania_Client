import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
 import { GoDotFill } from "react-icons/go";
import { Link, useLoaderData } from 'react-router';


const PackageDetails = () => {
    const data = useLoaderData();
     const { tour_name, photo, departure_date, price, guide_name, guide_photo, duration, contact_no , departure_location, destination, book_count, package_details} = data?.data || {}
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className="card card-side flex-col lg:flex-row bg-gray-50 text-gray-800 border-1 border-black shadow-lg">
  <figure>
    <img className='p-12 md:ml-6 w-[500px]' 
      src={photo}
      alt="" />
  </figure>
  <div className="card-body mt-3 ml-4  ">
    <div className='flex text-lg items-center gap-3'>
            <FaMapMarkerAlt className='text-gray-800' /> <h2 className="font-semibold text-[#0084ff]"> {tour_name} </h2>
        </div>
        <div>
            <h2 className='font-bold text-lg'>Guide Information:</h2>
            <div className='mt-2 ml-3'>
                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' /> <div className="avatar">
  <div className="w-12 rounded">
    <img
      src={guide_photo}
      alt=""
    />
  </div>
</div>
        </div>
        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
             <p className="font-semibold text-lg"><span className='text-sm'>Guide Name:</span>  {guide_name}</p> 
        </div>
        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg"><span className='text-sm'>Contact No:</span> {contact_no}  </p>
        </div>

        


            </div>

        </div>

        
                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Duration:  <span className=' text-[#0084ff]'>{duration}</span></p>
        </div>


                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Departure Location:  <span className=' text-[#0084ff]'>{departure_location}</span></p>
        </div>

                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Destination:  <span className=' text-[#0084ff]'>{destination}</span></p>
        </div>

                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Departure Date:  <span className=' text-[#0084ff]'>{departure_date}</span></p>
        </div>


                <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Price <span className='font-light'>(per person)</span> : <span className=' text-[#0084ff]'> {price} BDT</span></p>
        </div>

        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Booking Count:  <span className=' text-[#0084ff]'>{book_count}</span></p>
        </div>


        <div className='flex  items-center gap-3'>
            <GoDotFill  className='text-gray-800' />
            <p className="font-semibold text-lg">Description:  <span className=' text-[#0084ff]'>{package_details}</span></p>
        </div>
    
    
    <div className="card-actions justify-end">
      <Link to='/bookNow'>
     <button className="btn border-none hover:bg-black bg-[#0084ff] text-white">Book Now</button>
      </Link>
    </div>
  </div>
</div>


        </div>
    );
};

export default PackageDetails;