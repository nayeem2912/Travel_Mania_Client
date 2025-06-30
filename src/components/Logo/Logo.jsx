import React from 'react';

const Logo = () => {
    return (
        <div className='flex  items-center'>
            <img className='mb-1.5 mr-1.5 w-12 h-12' src="../../../favicon.svg" alt="" />
            <h1 className='md:text-3xl text-lg  font-extrabold'>Travel <span className='text-[#0084ff]'>Mania</span></h1>
        </div>
    );
};

export default Logo;