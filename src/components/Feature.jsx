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
       <button className="btn border-none hover:bg-black bg-[#0084ff] text-white">Explore All Package</button>
      </Link>
</div>
        </div>
    );
};

export default Feature;