import React from 'react';
import PackageTable from '../components/PackageTable';

const ManagePackage = () => {
    return (
        <div className='w-11/12 mx-auto my-8'>
            <h1 className='font-bold text-4xl text-center'>Manage My Package</h1>

            <p className='font-medium text-center text-2xl mt-8'>
                View, update, or delete your travel packages easily. Keep your trip details current and make changes whenever you need to, all in one convenient place.
            </p>
            <PackageTable></PackageTable>
        </div>
    );
};

export default ManagePackage;