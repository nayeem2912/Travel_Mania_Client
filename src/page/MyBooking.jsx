import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';



const MyBooking = () => {

  const { user } = use(AuthContext);
  const [bookingData, setBookingData] = useState([]);
  

  useEffect(() => {
      if(user?.email, user?.accessToken){
        axios(`http://localhost:3000/my-booking/${user.email}`, {
          headers:{
            Authorization:`Bearer ${user?.accessToken}`
          }
        })
      .then(data => {
        setBookingData(data.data);
      })
      }  
     }, [user])

     const handleConfirm = (id) => {
       axios.patch(`http://localhost:3000/my-booking/${id}/confirm`)
       .then((result) => {
             if (result.data.success) {
        const updatedBooking = bookingData.map((booking) =>
          booking._id === id ? { ...booking, status: "Confirmed" } : booking
        );
        setBookingData(updatedBooking);
      }
       })
         .catch((error) => {
      toast(error);
    });
    
     }


    return (
        <div className='w-11/12 mx-auto mt-10 mb-10'>
              <div className="overflow-x-auto ">
  <table className="table">
    
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
          <td className=' font-medium'>
            <div className="badge badge-soft badge-success">{booked.status}</div>
        
          </td>
       <th>
          {booked.status === "Pending" && (
                      <button
                        onClick={() => handleConfirm(booked._id)}
                        className="btn hover:bg-black bg-[#0084ff] text-white"
                      >
                        Confirm
                      </button>
                    )}
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