import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';


const UpdatePackage = () => {
 
  const {user } =use(AuthContext);
  const { id } = useParams()
  const [ details, setDetails] = useState([])
   const { tour_name, photo, departure_date, price, guide_name, guide_photo, duration, contact_no , departure_location, destination, package_details, guide_email, _id} = details || {}

   const [date, setDate] = useState(duration);


  useEffect( () => {
            axios(`http://localhost:3000/package/${id}`, {
           headers:{
            Authorization: `Bearer ${user?.accessToken}`
           }
        })
        .then(res => {
            setDetails(res?.data);
             setDate(res?.data?.duration || '');
        })
  }, [id, user])


    const handleUpdate = e =>{
      e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPackage= Object.fromEntries(formData.entries());
        

        axios.put(`http://localhost:3000/updatePackage/${_id}`, updatedPackage,
          {
            headers:{
              Authorization:`Bearer ${user?.accessToken}`
            }
          }
        )
        .then(data => {
            if(data?.data.modifiedCount){
               Swal.fire({
  title: "Package updated successfully!",
  icon: "success",
  draggable: true
});
            }
        })

    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='font-bold text-4xl text-center'>Update My Travel Package</h1>

            <p className='font-medium text-center text-2xl mt-8'>
               Modify your existing travel package details with ease. Update destinations, pricing, schedules, or any other information to keep your package offerings accurate and up-to-date.
            </p>


            <div className=' mt-10 mb-20'>
<form onSubmit={handleUpdate} className='space-y-5'>
<div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
      
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Tour Name</label>
  <input type="text" name='tour_name'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Tour Name" defaultValue={tour_name} required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Image</label>
  <input type="text" name='photo'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Tour Image" defaultValue={photo} required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Duration</label>
  <select name='duration'  value={date}
  onChange={(e) => setDate(e.target.value)}  className="select w-full bg-gray-50 text-gray-800 border-1 border-black"  required>
    <option   disabled={true}>Enter Duration</option> 
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
 
  <input type="text" list="districtOptions" name='departure_location' defaultValue={departure_location}  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Departure Location" required />

<datalist id="districtOptions">
  <option value="Bagerhat" />
  <option value="Bandarban" />
  <option value="Barguna" />
  <option value="Barishal" />
  <option value="Bhola" />
  <option value="Bogura" />
  <option value="Brahmanbaria" />
  <option value="Chandpur" />
  <option value="Chapai Nawabganj" />
  <option value="Chattogram" />
  <option value="Chuadanga" />
  <option value="Cox's Bazar" />
  <option value="Cumilla" />
  <option value="Dhaka" />
  <option value="Dinajpur" />
  <option value="Faridpur" />
  <option value="Feni" />
  <option value="Gaibandha" />
  <option value="Gazipur" />
  <option value="Gopalganj" />
  <option value="Habiganj" />
  <option value="Jamalpur" />
  <option value="Jashore" />
  <option value="Jhalokathi" />
  <option value="Jhenaidah" />
  <option value="Joypurhat" />
  <option value="Khagrachari" />
  <option value="Khulna" />
  <option value="Kishoreganj" />
  <option value="Kurigram" />
  <option value="Kushtia" />
  <option value="Lakshmipur" />
  <option value="Lalmonirhat" />
  <option value="Madaripur" />
  <option value="Magura" />
  <option value="Manikganj" />
  <option value="Meherpur" />
  <option value="Moulvibazar" />
  <option value="Munshiganj" />
  <option value="Mymensingh" />
  <option value="Naogaon" />
  <option value="Narail" />
  <option value="Narayanganj" />
  <option value="Narsingdi" />
  <option value="Natore" />
  <option value="Netrokona" />
  <option value="Nilphamari" />
  <option value="Noakhali" />
  <option value="Pabna" />
  <option value="Panchagarh" />
  <option value="Patuakhali" />
  <option value="Pirojpur" />
  <option value="Rajbari" />
  <option value="Rajshahi" />
  <option value="Rangamati" />
  <option value="Rangpur" />
  <option value="Satkhira" />
  <option value="Shariatpur" />
  <option value="Sherpur" />
  <option value="Sirajganj" />
  <option value="Sunamganj" />
  <option value="Sylhet" />
  <option value="Tangail" />
  <option value="Thakurgaon" />
</datalist>

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Departure Date</label>
  <input type="date" name='departure_date' defaultValue={departure_date}  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Departure Date" required/>

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Destination</label>
  <input list="destination-list" type="text" name='destination'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" defaultValue={destination} placeholder="Enter Destination" />

  <datalist id="destination-list">
        <option value="Cox’s Bazar" />
        <option value="Sylhet" />
        <option value="Bandarban" />
        <option value="Rangamati" />
        <option value="Khulna" />
        <option value="Saint Martin’s Island" />
        <option value="Sundarbans" />
        <option value="Srimangal" />
        <option value="Tangail" />
        <option value="Paharpur" />
        <option value="Kuakata" />
        <option value="Rajshahi" />
        <option value="Naogaon" />
        <option value="Dinajpur" />
        <option value="Chittagong" />
        <option value="Mymensingh" />
        <option value="Jaflong" />
        <option value="Barisal" />
        <option value="Feni" />
        <option value="Comilla" />
        <option value="Netrokona" />
        <option value="Noakhali" />
        <option value="Sitakunda" />
        <option value="Tangail" />
        <option value="Panchagarh" />
        <option value="Habiganj" />
        <option value="Gazipur" />
        <option value="Thakurgaon" />
        <option value="Kurigram" />
        <option value="Lalmonirhat" />
        <option value="Bogra" />
        <option value="Bhola" />
        <option value="Patuakhali" />
        <option value="Jhalokati" />
        <option value="Munshiganj" />
        <option value="Narail" />
        <option value="Narsingdi" />
      </datalist>

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Price</label>
  <input type="text" name='price'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Price" defaultValue={price} required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Contact No</label>
  <input type="text" name='contact_no'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Contact No" defaultValue={contact_no} required />



</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Package Details</label>
  <input type="text" name='package_details' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Package Details" defaultValue={package_details} required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Guide Name</label>
  <input type="text" name='guide_name'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" defaultValue={guide_name} required />

</fieldset>
      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Guide Image</label>
  <input type="text" name='guide_photo' defaultValue={guide_photo}  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" required/>

</fieldset>

      <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Guide Email</label>
  <input type="text" name='guide_email' defaultValue={guide_email}  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" readOnly required />
</fieldset>
</div>

<input type="submit" className='btn w-full hover:bg-black bg-gray-50 text-gray-800 hover:text-white' value="Update Package" />
</form>


</div>
        </div>
    );
};

export default UpdatePackage;