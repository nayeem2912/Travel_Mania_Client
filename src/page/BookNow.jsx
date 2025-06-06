import React from 'react';

const BookNow = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-extrabold mt-9 text-center text-4xl'>Reserve Your Tour Today

</h1>

 <div className='mt-10 mb-20'>
                <form  className='space-y-5 ' >
                <div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border border-base-300 rounded-box p-4">
  <label className="label font-bold text-lg">Package Name</label>
  <input type="text" name='plantName' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" required />

</fieldset>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Price</label>
  <input type="text" name='price' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" required />

</fieldset>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Email</label>
  <input type="email" name='email'  readOnly className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Email" />

</fieldset>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Name</label>
  <input type="text" name='name' readOnly className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" />

</fieldset>

  <fieldset className="fieldset bg-gray-50 text-gray-800 border border-base-300 rounded-box p-4">
  <label className="label font-bold text-lg">Package Name</label>
  <input type="text" name='plantName' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" required />

</fieldset>

  <fieldset className="fieldset bg-gray-50 text-gray-800 border border-base-300 rounded-box p-4">
  <label className="label font-bold text-lg">Special Note</label>
  
  <textarea className="textarea w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="special note"></textarea>

</fieldset>
                   
                </div>
                

  <input type="submit" className='btn w-full hover:bg-black bg-gray-50 text-gray-800 hover:text-white' value="Book Now" />
            </form>
            </div>
        </div>
    );
};

export default BookNow;