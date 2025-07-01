import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { FaUser, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaPlaneDeparture, FaCalendarAlt, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import { Link,  useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const PackageDetails = () => {
    const { user} = use(AuthContext);
    const [details, setDetails] = useState([])
    const { id } = useParams()

    const { tour_name, photo, departure_date, price, guide_name, guide_photo, duration, contact_no , departure_location, destination, booking_Count, package_details, _id} = details || {}
    
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

     
    return (
        <section className="py-16 px-4  text-gray-800">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-md p-6 md:flex gap-6">
        {/* Left: Destination Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={photo}
            alt={tour_name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-blue-500">{tour_name}</h2>

            {/* Guide Info */}
            <div className='space-y-2'>
                <h2 className="text-xl font-bold text-black flex items-center gap-2">
                   Guide Info:
                </h2>
            <div className="flex items-center gap-4 mb-2">
              <img
                src={guide_photo}
                alt={guide_name}
                className="w-14 h-14 rounded-full border-2 border-orange-500"
              />
              <div>
                <h2 className="text-xl font-bold text-blue-500 flex items-center gap-2">
                  <FaUser className="text-blue-500" /> Guide: {guide_name}
                </h2>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaPhoneAlt className="text-green-500" /> {contact_no}
                </p>
              </div>
            </div>
                </div>
            {/* Other Info */}
            <p className="flex items-center gap-2"><FaClock className="text-blue-500" /> Duration: {duration}</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> Departure: {departure_location}</p>
            <p className="flex items-center gap-2"><FaPlaneDeparture className="text-purple-500" /> Destination: {destination}</p>
            <p className="flex items-center gap-2"><FaCalendarAlt className="text-indigo-500" />Departure Date: {departure_date}</p>
            <p className="flex items-center gap-2"><FaMoneyBillWave className="text-emerald-500" /> Price: ৳{price}</p>
            <p className="flex items-center gap-2"><FaUsers className="text-cyan-500" /> Booked by: {booking_Count} </p>

            {/* Description */}
            <p className="mt-4 text-gray-700">
              <span className="font-semibold">Description:</span> {package_details}
            </p>
          </div>

          {/* Book Now Button */}
          <div className="mt-6 text-right">
            <Link to={`/dashboard/bookNow/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow-md">
              Book Now
            </button>
            
            </Link>
            
          </div>
        </div>
      </div>
    </section>
    );
};

export default PackageDetails;