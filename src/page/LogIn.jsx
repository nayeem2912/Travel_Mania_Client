import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const LogIn = () => {

const {signIn, googleSignIn, forgetPass } = use(AuthContext);
const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()

const handleLogin = e => {
    e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
          const user = result.user;
           navigate(`${location.state? location.state : "/"}`)
          if(user){
            Swal.fire({
  title: "Login successful!",
  icon: "success",
  draggable: true
});
          }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode ,errorMessage)
          });
  }

   const handleGoogle = () =>{
        googleSignIn()
      .then(result => {
        const user = result.user;
         if(user){
            Swal.fire({
  title: "Login successful!",
  icon: "success",
  draggable: true
});
          }
           navigate(`${location.state? location.state : "/"}`)
      })
       
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode ,errorMessage)
      })
  }

  const handleForget = () => {
     const email = emailRef.current.value;
      forgetPass(email)
      .then(() => {
        Swal.fire({
  title: "A password reset email is sent. Please check your email.",
  icon: "success",
  draggable: true
});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage)
      });
  }


    return (
        <div>
             <div className='max-w-xs  mx-auto my-10'>
            <div className="card  bg-gray-50 text-gray-800 w-full border-1 border-black max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin} >
       <fieldset className="fieldset">
      
          <label className="label font-bold text-gray-800 text-xl">Email</label>
          <input type="email"  ref={emailRef} name='email' className="input bg-gray-50 text-gray-800 border-1 border-black" placeholder="Email" required />
          <label className="label font-bold text-gray-800 text-xl">Password</label>
          <input type="password" name='password' className="input bg-gray-50 text-gray-800 border-1 border-black" placeholder="Password" required />
          <div ><a onClick={handleForget}  className="link text-[#0084ff] font-semibold link-hover">Forgot password?</a></div>
          <button type='submit' className="btn hover:bg-black text-white bg-[#0084ff]  mt-4">Login</button>
        </fieldset>
       </form>
       <p>Don't have an account ? Please <Link className='text-[#0084ff] font-semibold link-hover' to='/register'>Register</Link></p>
          <button onClick={handleGoogle} className="btn rounded-full hover:bg-[#0084ff] bg-white  text-black hover:text-white border-[#e5e5e5]">
  <svg className='rounded-full' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

      </div>
     
    </div>
        </div>
        </div>
    );
};

export default LogIn;