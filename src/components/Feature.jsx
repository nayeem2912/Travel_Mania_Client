import React from 'react';
import FeatureCard from './FeatureCard';
import { Link, useLoaderData } from 'react-router';

const Feature = () => {

    const data = useLoaderData();
  const features = data?.data || {};
      
    return (
        <div className='space-y-10 w-11/12 mx-auto my-10'>
            <h1 className='font-bold text-3xl text-center'>Popular Tours Across the Country

</h1>
<div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {
        features.map(feature =>  <FeatureCard key={feature._id} feature={feature}></FeatureCard> )
    }

</div>

<div className='text-center'>
    <Link to='/allPackage'>
       <button className="btn border-none hover:bg-black bg-[#0084ff] text-white">Explore All Package</button>
      </Link>
</div>
        </div>
    );
};

export default Feature;