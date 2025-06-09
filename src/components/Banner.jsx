import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='mb-10'>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/vx9CtSc6/photo-1608958435020-e8a7109ba809.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-white text-5xl font-bold">"Explore the Beauty of Bangladesh"</h1>
      <p className="mb-5 text-white">
        From the serene beaches of Cox’s Bazar to the lush green hills of Sylhet, Bangladesh is a land of natural wonders and rich culture. Discover ancient heritage sites, vibrant cities, and hidden gems across the country. Whether you're planning a weekend escape or a cross-country adventure, let us be your guide to the unforgettable charm of Bangladesh.
      </p>
     <div>
       <Link to='/allPackage'>
        <button className="btn border-none hover:bg-black bg-[#0084ff] text-white">Explore All Package</button>
      </Link>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;