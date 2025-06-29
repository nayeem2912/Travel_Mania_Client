import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
 import { MdOutlineAccessTime } from "react-icons/md";
 import { FaRegCalendarAlt } from "react-icons/fa";
 import { IoPricetags } from "react-icons/io5";
 import { RiGuideFill } from "react-icons/ri";


const Package = ({packages}) => {
  const { tour_name, photo, price, duration, _id } = packages  || {}
    return (
        <div>
             <div
              
              className="bg-white border text-gray-800 border-gray-200 rounded-xl shadow hover:shadow-lg transition-all flex flex-col h-full"
              data-aos="fade-up"
            >
              <img
                src={photo}
                alt={tour_name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{tour_name}</h3>
                  <p className="text-sm text-gray-500 mb-1">📅 {duration}</p>
                  <p className="text-orange-500 font-bold mb-3">BDT:{price} TK</p>
                </div>
                <Link to={`/details/${_id}`}>
                <button className="btn btn-sm btn-outline hover:bg-[#0084ff] w-full hover:text-white mt-auto">
                  View Details
                </button>
                </Link>
                
              </div>
            </div>   
        </div>
    );
};

export default Package;