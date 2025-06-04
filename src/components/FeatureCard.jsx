import React from 'react';
import { Link } from 'react-router';

const FeatureCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-70 h-70 rounded-xl ' src='/public/download (1).jpeg' alt="" />
    </div>
   <div className='space-y-7 ml-6 my-4'>
    
        <h2 className="font-semibold text-[#0084ff]">Dhaka to Cox’s Bazar Beach Escape</h2>
        <h2 className="">Card Title</h2>
        <h2 className="">Card Title</h2>
        <h2 className="">Card Title</h2>
        <h2 className="">Card Title</h2>
      
    
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