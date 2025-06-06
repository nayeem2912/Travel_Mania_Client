import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
       <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl')} to='/' >Home</NavLink>
        </li>
        <li>
         <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl')} to='/allPackage' >All Packages</NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl')} to='/myBooking' >My Bookings</NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl')} to='/aboutUs' >About Us </NavLink>
        </li>
    </>
    return (
        <div className='bg-base-300  z-50 sticky top-0 shadow-sm'>
            <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2 lg:hidden">
  
  <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <img className='md:w-10 mr-2 md:h-10 w-7 h-7' src="/airplane_2200326.png" alt="" />
    <a className="font-bold text-lg md:text-4xl">Travel <span className='text-[#0084ff]'>Mania</span></a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <div className=' ml-4'>
      <input  type="checkbox" value="dark" className="toggle theme-controller w-10" />
    </div>
    <Link to='/register'>
    <button className="btn btn-xs sm:btn-sm md:btn-md rounded-full  text-white font-semibold bg-[#0084ff] ">Register</button>
    </Link>
    <Link to='/login'>
    <button className="btn btn-xs sm:btn-sm md:btn-md rounded-full  text-white font-semibold bg-[#0084ff] ">Login</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;