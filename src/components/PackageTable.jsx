import React from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useLoaderData } from 'react-router';


const PackageTable = () => {
  const data = useLoaderData();
  const packages = data?.data || {} 
  
    return (
        <div className='mt-10'>
            <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead >
      <tr>
        <th>
          Package No
        </th>
        <th>Tour Name</th>
        <th>Duration</th>
        <th>Departure Place</th>
        <th>Destination</th>
        <th>Departure Date</th>
        <th>Price</th>
        <th>Contact No</th>
        <th>Guide Name</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      packages.map((pack, index) =>  <tr key={pack._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={pack.photo}
                  alt="" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-[#0084ff]">{pack.tour_name}</div>
            </div>
          </div>
        </td>
        <td>
         {pack.duration}
        </td>
        <td>{pack.departure_location}</td>
        <td>{pack.destination}</td>
        <td>{pack.departure_date}</td>
        <td>{pack.price} BDT</td>
        <td>{pack.contact_no}</td>
        <td>
             <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={pack.guide_photo}
                  alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{pack.guide_name}</div>
            </div>
          </div>
          </td>

        <th className="tooltip" data-tip=" Update Your Package">
            <Link to={`/updatePackage/${pack._id}`}>
<button className="btn bg-[#0084ff] text-white btn-square  btn-md"><MdModeEditOutline  size={25}/></button>
            </Link>
          
        </th>
        <th className="tooltip" data-tip="Delete Your Package">
            <button className="btn bg-red-700 text-white btn-square  btn-md"><RiDeleteBinLine size={25}/></button>
        </th>
      </tr>)
     }
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default PackageTable;