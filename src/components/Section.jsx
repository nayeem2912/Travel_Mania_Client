import React from 'react';

const Section = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
             <h1 className='text-4xl my-8 text-center font-bold'>Why Should You Travel With Us</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >

               <div className="card  bg-gray-50 text-gray-800 card-xl  shadow-lg">
  <div className="card-body space-y-3">
    <p className=' text-center font-medium'>"Everything was smooth and well-organized — from hotel check-ins to boat rides in the Sundarbans. The guide was super friendly and helped us spot rare wildlife."</p>
    <p className='font-bold'>Sadia K.</p>
    <p>Solo Trip to Sundarbans</p>
  
  </div>
</div>

               <div className="card  bg-gray-50 text-gray-800 card-xl  shadow-lg">
  <div className="card-body space-y-3">
    <p className=' text-center font-medium'>"The tea gardens and peaceful vibe of Srimangal were exactly what we needed. Great service, comfortable transport, and lots of local food!"</p>
     <p className='font-bold'>Tanvir A.</p>
    <p>Group Tour in Srimangal</p>
  
  </div>
</div>

               <div className="card  bg-gray-50 text-gray-800 card-xl  shadow-lg">
  <div className="card-body space-y-3">
  
    <p className=' text-center font-medium'>"I was amazed by the natural beauty of Bandarban. The trekking, the waterfalls, and the tribal village visit made it an unforgettable experience!"</p>
     <p className='font-bold'>Imran H.</p>
    <p>Family Tour in Bandarban</p>
  
  </div>
</div>

                </div>
            
        </div>
    );
};

export default Section;