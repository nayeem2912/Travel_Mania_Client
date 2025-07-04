import { use, useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { IoHomeOutline } from "react-icons/io5";

import { Link,  NavLink } from 'react-router'
import { AuthContext } from '../../context/AuthContext';
import Logo from '../Logo/Logo';
const Sidebar = () => {
  const { logOut, user } = use(AuthContext)
  const [isActive, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className=' flex bg-base-200 shadow-sm justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 '>
            <Link to='/'>
             <Logo></Logo>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between bg-base-200 overflow-x-hidden border-1 border-white shadow-xl w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full  md:flex  shadow-lg rounded-lg justify-center items-center  mx-auto'>
              <Link to='/'>
                <div className='flex  items-center'>
            <img className='mb-1.5 mr-1.5 w-12 h-12' src="../../../favicon.svg" alt="" />
            <h1 className='md:text-2xl text-lg  font-extrabold'>Travel <span className='text-[#0084ff]'>Mania</span></h1>
        </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
                 
            
            <button
            className='flex w-full items-center px-4 py-2 mt-5 transition-colors duration-300 transform'
          ><NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to='/dashboard/allPackage' >All Packages</NavLink>
            
          </button>
            <button
            className='flex w-full items-center px-4 py-2 mt-5  transition-colors duration-300 transform'
          ><NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl')} to='/dashboard/addPackage' >Add Package</NavLink>
            
          </button>
            <button
            className='flex w-full items-center px-4 py-2 mt-5 transition-colors duration-300 transform'
          ><NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-lg ':'text-lg')} to={`/dashboard/managePackage/${user?.email}`} >Manage My Package</NavLink>
            
          </button>

            <button
            className='flex w-full items-center px-4 py-2 mt-5 transition-colors duration-300 transform'
          >
                     <NavLink className={({isActive}) =>(isActive? 'text-[#0084ff] font-semibold text-xl ':'text-xl ')} to={`/dashboard/myBooking/${user?.email}`} >My Bookings</NavLink>
            
          </button>
              
              
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <div className='ml-3.5 mt-1.5'>
     <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
    </div>
        <Link to='/'>
          <button
            className='flex w-full items-center px-4 py-2 mt-5  transition-colors duration-300 transform'
          >
            <IoHomeOutline className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </button>
          </Link>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5  transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
