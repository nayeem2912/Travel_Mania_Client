import React from 'react';

const AddPackage = () => {
    return (
        <div className='w-11/12 mx-auto my-8'>
            <h1 className='font-extrabold mt-9 text-center text-4xl'>Add New Travel Package

</h1>

<div className=' mt-10 mb-20'>
<form className='space-y-5'>
<div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
      
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Tour Name</label>
  <input type="text" name='tour_name'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Tour Name" required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Image</label>
  <input type="text" name='photo'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Tour Image" required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Duration</label>
  <select name='duration' defaultValue="Enter Duration" className="select w-full bg-gray-50 text-gray-800 border-1 border-black" required>
    <option  disabled={true}>Enter Duration</option>
  <option value="1 Day">1 Day</option>
  <option value="2 Days, 1 Night">2 Days, 1 Night</option>
  <option value="3 Days, 2 Nights">3 Days, 2 Nights</option>
  <option value="4 Days, 3 Nights">4 Days, 3 Nights</option>
  <option value="5 Days, 4 Nights">5 Days, 4 Nights</option>
  <option value="6 Days, 5 Nights">6 Days, 5 Nights</option>
  <option value="7 Days, 6 Nights">7 Days, 6 Nights</option>
  <option value="10 Days, 9 Nights">10 Days, 9 Nights</option>
  <option value="Weekend Trip (Friday to Sunday)">Weekend Trip (Friday to Sunday)</option>
</select>
</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Departure Location</label>
 
  <input type="text" name='departure_location'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Departure Location" required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Departure Date</label>
  <input type="date" name='departure_date'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Departure Date" required/>

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Destination</label>
  <input type="text" name='destination'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Price</label>
  <input type="text" name='price'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Contact No</label>
  <input type="text" name='contact_no'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required />



</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Package Details</label>
  <input type="text" name='package_details' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Guide Name</label>
  <input type="text" name='guide_name'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Guide Image</label>
  <input type="text" name='guide_photo'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required/>

</fieldset>

      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Guide Email</label>
  <input type="text" name='guide_email'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required />
</fieldset>
</div>

<input type="submit" className='btn w-full hover:bg-black bg-gray-50 text-gray-800 hover:text-white' value="Book Now" />
</form>


</div>

        </div>
    );
};

export default AddPackage;