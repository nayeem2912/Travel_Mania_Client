import React from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router';


const PackageTable = () => {
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
      <tr>
        <th>
          1
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak
        </td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
        <td>
             <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
          </td>

        <th className="tooltip" data-tip=" Update Your Package">
            <Link to='/updatePackage'>
<button className="btn bg-[#0084ff] text-white btn-square  btn-md"><MdModeEditOutline  size={25}/></button>
            </Link>
          
        </th>
        <th className="tooltip" data-tip="Delete Your Package">
            <button className="btn bg-red-700 text-white btn-square  btn-md"><RiDeleteBinLine size={25}/></button>
        </th>
      </tr>
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default PackageTable;