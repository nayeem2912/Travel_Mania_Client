import React from 'react';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router';

const Feature = () => {
    return (
        <div className='space-y-10 w-11/12 mx-auto my-10'>
            <h1 className='font-bold text-3xl text-center'>Popular Tours Across the Country

</h1>
<div className='mb-10'>
 <FeatureCard></FeatureCard>
</div>

<div className='text-center'>
    <Link to='/allPackage'>
       <a  class="relative inline-block px-4 py-2 font-medium group"> 
    <span class="absolute inset-0 w-full h-full bg-[#0084ff]  group-hover:bg-black"></span>
    <span class="relative text-white group-hover:text-white">Explore All Packages</span>
</a>
      </Link>
</div>
        </div>
    );
};

export default Feature;