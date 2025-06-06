import React from 'react';

const Section3 = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
           <div
  className="hero  min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/kVR5yHxN/6186486.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className='space-y-10'>
        <h1 className='text-4xl font-bold'>Why Should You Travel With Us</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        
     <div className="card  bg-gray-50 text-gray-800 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex bg-gray-50 justify-center'>
    <img className='w-20 h-20 rounded-xl ' src='/assets/4190530.jpg' alt="" />
    </div>
    <h2 className="font-bold  text-center text-2xl">Professional Tour Guide</h2>
    <p className=' text-center font-medium'>Explore Bangladesh with experienced local guides who know every hidden gem, ensuring a safe and enriching journey every time.</p>
  
  </div>
</div>
<div className="card  bg-gray-50 text-gray-800 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-20 h-20 rounded-xl ' src='/assets/36d908a2-5f9d-47a3-8585-a0cbb7b7110f.jpg' alt="" />
    </div>
    <h2 className="font-bold  text-center text-2xl">Certified Travel Agency</h2>
    <p className=' text-center font-medium'>We’re a licensed and trusted travel company, committed to providing top-quality service, transparent pricing, and unforgettable trips.</p>
  
  </div>
</div>
<div className="card  bg-gray-50 text-gray-800 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-20 h-20 rounded-xl ' src='/assets/390026be-717f-44d5-862f-db591784d1fa.jpg' alt="" />
    </div>
    <h2 className="font-bold  text-center text-2xl"> 24/7 Premium Support</h2>
    <p className=' text-center font-medium'>Whether you're booking or already on the road, our support team is always available to assist you—day or night.</p>
  
  </div>
</div>
    </div>
    </div>
    
  
  </div>
</div> 
        </div>
    );
};

export default Section3;