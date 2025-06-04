import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
 import { MdOutlineAccessTime } from "react-icons/md";
 import { FaRegCalendarAlt } from "react-icons/fa";
 import { IoPricetags } from "react-icons/io5";
 import { RiGuideFill } from "react-icons/ri";

const FeatureCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-70 h-70 rounded-xl ' src='/public/download (1).jpeg' alt="" />
   
    </div>
     <div className='ml-4 space-y-3'>
        <div className='flex justify-center items-center gap-3'>
        <FaMapMarkerAlt /> <h2 className="font-semibold text-[#0084ff]"> Dhaka to Cox’s Bazar Beach Escape</h2>
    </div>
      <div className='flex space-x-2 justify-center items-center '>
     <MdOutlineAccessTime /> <p className="font-semibold ">2 Days, 1 Night</p>
        </div>
      <div className='flex space-x-2 justify-center items-center '>
     <FaRegCalendarAlt /> <p className="font-semibold ">Tour Start: 2025-07-15</p>
        </div>
      <div className='flex space-x-2 justify-center items-center '><IoPricetags />
     <p className="font-semibold ">Price <span className='font-light'>(per person)</span> : BDT 5500</p>
        </div>
      <div className='flex items-center justify-center  '><RiGuideFill />
     <p className="font-semibold ">Guide by:    <div className="avatar">
  <div className="w-12 rounded">
    <img
      src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
      alt="Tailwind-CSS-Avatar-component"
    />
   
    </div>
     
  </div> Faruk Hossain</p>
        </div>
     </div>
  
  <div className="card-actions justify-end">
      <button className="btn bg-[#0084ff] text-white">Buy Now</button>
    </div>

  </div>
</div>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src='' alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl"></h2>
    <p className=' text-center font-medium'></p>
  
  </div>
</div>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src='' alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl"></h2>
    <p className=' text-center font-medium'></p>
 

  </div>
</div>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src='' alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl"></h2>
    <p className=' text-center font-medium'></p>
   

  </div>
</div>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src='' alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl"></h2>
    <p className=' text-center font-medium'></p>
 
 <div className="card-actions justify-end">
      <button className="btn bg-[#0084ff] text-white">Buy Now</button>
    </div>

  </div>
</div>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src='' alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl"></h2>
    <p className=' text-center font-medium'></p>
   

  </div>
</div>
        </div>
    );
};

export default FeatureCard;