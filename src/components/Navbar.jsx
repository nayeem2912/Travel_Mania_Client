import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Logo from './Logo/Logo';

const Navbar = () => {
  const {user, logOut} = use(AuthContext)




  const handleLogOut = () => {
    
       logOut()
       .then(()=>{
           Swal.fire({
  title: "Logout successful!",
  icon: "success",
  draggable: true
});
       })
       .catch(error =>{
         toast(error)
       })
  }

    const links = <>
       <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/' >Home</NavLink>
        </li>
        <li>
         <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/allPackage' >All Packages</NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/dashboard' >Dashboard</NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/aboutUs' >About Us </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/contact' >Contact </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/blog' >Blogs </NavLink>
        </li>
    </>
    return (
        <div className='bg-base-200   z-50 sticky top-0 shadow-sm'>
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
        className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-2 pl-4 shadow">
       {links}
      </ul>
    </div>
    <Logo></Logo>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex justify-center items-center space-x-4 px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <div className=' ml-4'>
      <input  type="checkbox" value="dark" className="toggle theme-controller w-10" />
    </div>
    {
      user ? (<div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src={user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-3 shadow">
        <li>
         {user.displayName}
        </li>
        <li>
          {user.email}
        </li>
        <li><a onClick={handleLogOut} className='font-bold text-red-700 text-lg'>Logout</a></li>
      </ul>
    </div>
  </div>) : (<div className='space-x-2'>
    <Link to='/login'>
    <button className="inline-flex items-center gap-2 btn btn-xs sm:btn-sm md:btn-md  bg-blue-500 border-none text-white rounded-md hover:bg-blue-600 transition">Login</button>
    </Link>
  </div>)
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;