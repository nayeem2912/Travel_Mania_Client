import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {  useParams } from 'react-router';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import axios from 'axios';

const BookNow = () => {
   
   const {id} = useParams();
   const [details, setDetails]=useState([])

    const { tour_name, price, contact_no , departure_location, destination, departure_date,_id} = details || {};

  const { user } = use(AuthContext)
   const [booking, setBooking] = useState('');

    useEffect(() => {
        axios(`https://travel-menia-server.vercel.app/package/${id}`, {
           headers:{
            Authorization: `Bearer ${user?.accessToken}`
           }
        })
        .then(res => {
            setDetails(res?.data)
        })
    }, [id, user])


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setBooking(today);
  }, [booking]);

  const handleBooking = (e) => {
     e.preventDefault()
    const form = e.target ;
     const formData = new FormData(form)
    const newBooking = Object.fromEntries(formData.entries())
    newBooking.email = user?.email;
    newBooking.packageId = _id;
    newBooking.status = "Pending";

    axios.post('https://travel-menia-server.vercel.app/bookNow', newBooking, 
      {
      headers:{
        Authorization:`Bearer ${user?.accessToken}`
      }
    }
    )
    .then(data => {
      if(data){
         Swal.fire({
          title: 'Booking successful!!',
          icon: 'success',
        })
         
      }
    }
  )
   .catch(error => {
      toast(error)
    })

    form.reset()
  }
   
    
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-extrabold mt-9 text-center text-4xl'>Reserve Your Tour Today

</h1>

 <div className='mt-10 mb-20'>
                <form onSubmit={handleBooking} className='space-y-5 ' >
                <div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border border-base-300 rounded-box p-4">
  <label className="label font-bold text-lg">Package Name</label>
  <input type="text" name='tour_name' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" defaultValue={tour_name} readOnly required />

</fieldset>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Price</label>
  <input type="text" name='price' className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" defaultValue={price} readOnly required />

</fieldset>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Email</label>
  <input type="email" name='email'  readOnly className="input w-full bg-gray-50 text-gray-800 border-1 border-black" defaultValue={user?.email} placeholder="Enter Your Email" required />

</fieldset>
                    <fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Name</label>
  <input type="text" name='name' readOnly className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="Enter Your Name" defaultValue={user?.displayName} required />

</fieldset>

 
  <fieldset className="fieldset bg-gray-50 text-gray-800 border border-base-300 rounded-box p-4">
  <label className="label font-bold text-lg">Booking Date</label>
  <input type="date"
   name='booking_date'
    className="input w-full bg-gray-50 text-gray-800 border-1 border-black"
     value={booking}
        onChange={(e) => setBooking(e.target.value)}
     placeholder="" required />

</fieldset>

<fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Departure Location</label>
  <input type="text" name='departure_location'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" defaultValue={departure_location} readOnly required />

</fieldset>

<fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Destination</label>
  <input type="text" name='destination'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" defaultValue={destination} readOnly required />

</fieldset>

<fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Departure Date</label>
  <input type="text" name='departure_date'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" readOnly defaultValue={departure_date} required />

</fieldset>
<fieldset className="fieldset bg-gray-50 text-gray-800 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Contact No</label>
  <input type="text" name='contact_no'  className="input w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="" readOnly defaultValue={contact_no} required />

</fieldset>

  <fieldset className="fieldset bg-gray-50 text-gray-800 border border-base-300 rounded-box p-4">
  <label className="label font-bold text-lg">Special Note</label>
  
  <textarea name='notes' className="textarea w-full bg-gray-50 text-gray-800 border-1 border-black" placeholder="special note" required></textarea>

</fieldset>
                   
                </div>
                

  <input type="submit" className='btn w-full hover:bg-black bg-gray-50 text-gray-800 hover:text-white' value="Book Now" />
            </form>
            </div>
        </div>
    );
};

export default BookNow;