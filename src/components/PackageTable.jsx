import React, { use, useEffect, useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link} from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';



const PackageTable = () => {

  const {user} = use(AuthContext);
  const [packageData, setPackageData] = useState([]);


  useEffect(() => {
      if(user?.email, user?.accessToken){
        axios(`http://localhost:3000/my-package/${user.email}`, {
          headers:{
            Authorization:`Bearer ${user?.accessToken}`
          }
        })
      .then(data => {
        setPackageData(data.data);
      })
      }  
     }, [user])



     const handleDelete = id =>{

        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    axios.delete(`http://localhost:3000/package/${id}`)
     .then(data => {
      if (data?.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Package has been deleted.",
                                icon: "success"
                            });
                          }
     })


      const remainingPackage = packageData.filter(p => p._id !== id);
     setPackageData(remainingPackage);
    
  }
});
    }

  
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
      packageData.map((pack, index) =>  <tr key={pack._id}>
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
            <button onClick={() => handleDelete(pack._id)} className="btn bg-red-700 text-white btn-square  btn-md"><RiDeleteBinLine size={25}/></button>
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