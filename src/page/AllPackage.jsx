import React from 'react';
import Package from '../components/Package';

const AllPackage = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div>
               <h1 className='font-bold text-4xl text-center'>Explore All Travel Packages</h1>

            <p className='font-medium text-center text-2xl mt-3'>
               A carefully curated list of adventures, destinations, and experiences — handpicked just for you.
            </p>
            </div>
            <div className='text-center mt-6'>
                <label className="input bg-gray-50 text-gray-800">
  <svg className="h-[1em]   opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" placeholder="Search" />
</label>
            </div>

            <div >
              <Package></Package>
            </div>
        </div>
    );
};

export default AllPackage;