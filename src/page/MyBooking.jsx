import React from 'react';

const MyBooking = () => {
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
          <div className="font-bold">Hart Hagerty</div>
        </td>
        <td>
          Zemlak
        </td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
        <td>
              <div className="font-bold">Hart Hagerty</div>
          </td>
       <th>
         <button className="btn hover:bg-black bg-[#0084ff] text-white">Confirm</button>
       </th>
      </tr>
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyBooking;