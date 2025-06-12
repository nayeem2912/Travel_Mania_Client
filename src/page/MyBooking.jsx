import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const MyBooking = () => {

  const { user } = use(AuthContext);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
      if(user?.email){
        axios(`http://localhost:3000/my-booking/${user.email}`)
      .then(data => {
        setBookingData(data.data);
      })
      }  
     }, [user])


    return (
        <div className='w-11/12 mx-auto mt-10 mb-10'>
              <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead >
      <tr>
        <th>
          Package No
        </th>
        <th>Tour Name</th>
        <th>Departure Place</th>
        <th>Destination</th>
        <th>Departure Date</th>
        <th>Special Note</th>
        <th>Contact No</th>
        <th>Guide Name</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookingData.map((booked, index) =>  <tr key={booked._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="font-bold text-[#0084ff]">{booked.tour_name}</div>
        </td>
        <td>
         {booked.departure_location}
        </td>
        <td>{booked.destination}</td>
        <td>{booked.departure_date}</td>
        <td>{booked.notes}</td>
        <td>{booked.contact_no}</td>
        <td>
              <div className="font-bold">{booked.name}</div>
          </td>
          <td className='text-green-700 font-medium'>
        {booked.status}
          </td>
       <th>
         <button className="btn hover:bg-black bg-[#0084ff] text-white">Confirm</button>
       </th>
      </tr> )
      }
      
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyBooking;