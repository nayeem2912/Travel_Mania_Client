import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
 import { MdOutlineAccessTime } from "react-icons/md";
 import { FaRegCalendarAlt } from "react-icons/fa";
 import { IoPricetags } from "react-icons/io5";
 import { RiGuideFill } from "react-icons/ri";

const FeatureCard = ({feature}) => {
       const { tour_name, photo, departure_date, price, guide_name, guide_photo, duration, _id } = feature || {}

  
    return (
        <div >
            <div className="card  bg-gray-50 card-xl  shadow-lg h-[1000px]">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-70 h-70 rounded-xl ' src={photo} alt="" />
   
    </div>
     <div className='ml-4 my-6  space-y-8'>
        <div className='flex justify-center items-center gap-3'>
        <FaMapMarkerAlt className='text-gray-800' /> <h2 className="font-semibold text-[#0084ff]"> {tour_name}</h2>
    </div>
      <div className='flex space-x-2 justify-center items-center '>
     <MdOutlineAccessTime className='text-gray-800' /> <p className="font-semibold text-gray-800">{duration}</p>
        </div>
      <div className='flex space-x-2 justify-center items-center '>
     <FaRegCalendarAlt className='text-gray-800' /> <p className="font-semibold text-gray-800">Departure Date: {departure_date}</p>
        </div>
      <div className='flex space-x-2 text-gray-800 justify-center items-center '><IoPricetags />
     <p className="font-semibold ">Price <span className='font-light'>(per person)</span> : {price} BDT </p>
        </div>
      <div className='flex items-center text-gray-800 justify-center  '><RiGuideFill /> <p className="font-semibold flex gap-2 text-sm items-center text-gray-800">
       Guide By: <img className='w-12 h-12 rounded' src={guide_photo} alt="" /> {guide_name}
      </p>
    
        </div>
     </div>
  
  <div className="card-actions justify-end">
    <Link to={`/details/${_id}`}>
    <button className="btn hover:bg-black bg-[#0084ff] text-white">View Details</button>
    </Link>
      
    </div>

  </div>
</div>
           
        </div>
    );
};

export default FeatureCard;