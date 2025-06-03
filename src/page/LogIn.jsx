import React from 'react';
import { Link } from 'react-router';

const LogIn = () => {
    return (
        <div>
             <div className='max-w-xs  mx-auto my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form  >
       <fieldset className="fieldset">
      
          <label className="label font-bold text-white text-xl">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" required />
          <label className="label font-bold text-white text-xl">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <div ><a  className="link text-[#0084ff] font-semibold link-hover">Forgot password?</a></div>
          <button type='submit' className="btn text-white bg-[#0084ff]  mt-4">Login</button>
        </fieldset>
       </form>
       <p>Don't have an account ? Please <Link className='text-[#0084ff] font-semibold underline' to='/register'>Register</Link></p>
          <button className="btn rounded-full hover:bg-[#0084ff] bg-white text-black hover:text-white border-[#e5e5e5]">
  <svg className='rounded-full' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

      

      <Link className='flex justify-center pt-8' to='/'> <button className="btn  text-lg text-white bg-[#0084ff] border-none">Back To Home</button> </Link>
      </div>
     
    </div>
        </div>
        </div>
    );
};

export default LogIn;