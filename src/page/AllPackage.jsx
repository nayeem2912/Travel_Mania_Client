import React, { useEffect, useState } from 'react';
import Package from '../components/Package';
import axios from 'axios';

const AllPackage = () => {

  const [search , setSearch] = useState("");
  const [sort , setSort] = useState(""); // NEW: sorting state
  const [allPackage, setAllPackage] = useState([]);
  

  useEffect(() => {
    axios(`https://travel-menia-server.vercel.app/package?searchParams=${search}&sort=${sort}`)
      .then(data => setAllPackage(data.data))
  }, [search, sort]) 

  return (
    <div className='w-11/12 mx-auto my-10'>
      <div>
        <h1 className='font-bold text-4xl text-center'>Explore All Travel Packages</h1>
        <p className='font-medium text-center text-2xl mt-3'>
          A carefully curated list of adventures, destinations, and experiences — handpicked just for you.
        </p>
      </div>

      {/* Search + Sort */}
      <div className='text-center mt-6 flex flex-col md:flex-row justify-center gap-4'>
        {/* Search */}
        <label className="input bg-gray-50 text-gray-800">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="grow" 
            placeholder="Search" 
          />
        </label>

        {/* Sort */}
        <select 
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered bg-gray-50 text-gray-800"
        >
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Packages */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
        {allPackage.map(packages => (
          <Package key={packages._id} packages={packages} />
        ))}
      </div>
    </div>
  );
};

export default AllPackage;
