import React from 'react';
import FeatureCard from './FeatureCard';
import { Link, useLoaderData } from 'react-router';

const Feature = () => {

    const data = useLoaderData();
  const features = data?.data || {};
      
    return (
        <div className=' px-4  w-11/12 mx-auto py-10'>
             <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Travel Packages</h2>
        <p className="">
          Discover our most loved travel packages curated specially for you. Choose your dream
          destination and start your adventure today!
        </p>
      </div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
    {
        features.map(feature =>  <FeatureCard key={feature._id} feature={feature}></FeatureCard> )
    }

</div>

<div className='text-center mt-10'>
    <Link to='/allPackage'>
       <button className="btn border-none hover:bg-black bg-[#0084ff] text-white">Explore All Package</button>
      </Link>
</div>
        </div>
    );
};

export default Feature;