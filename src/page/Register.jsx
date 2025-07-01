import React, { use, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const Register = () => {

  const navigate = useNavigate()

    const {createUser, setUser, updateUser, googleSignIn} =use(AuthContext);
      const[nameError, setNameError]= useState("")


   const handleRegister = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;
      const photo = form.photo.value;

       if (name.length < 5) {
        setNameError("Name should be more then 5 character");
        return;
      } else {
        setNameError("");
      }
      
      createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({displayName: name, photoURL: photo})
        .then(() => {
           setUser({...user,displayName: name, photoURL: photo });
          navigate("/")
        })
        .catch(error => {
          setUser(user)
          toast.error(error)
        })
        
        if(user){
          Swal.fire({
  title: "Registration successful!",
  icon: "success",
  draggable: true
});
        }
      })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   toast(errorCode, errorMessage)
  });
   }

     const handleGoogle = () =>{
        googleSignIn()
      .then(result => {
        const user = result.user;
         if(user){
            Swal.fire({
  title: "Registration successful!",
  icon: "success",
  draggable: true
});
          }
           navigate("/")
      })
       
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode ,errorMessage)
      })
  }

    return (
        <div className='my-12 p-10'>
             <div className='flex  justify-center items-center min-h-screen'>
        <div className="card bg-gray-50 text-gray-800 border-1 border-black w-full max-w-sm shrink-0 shadow-xl py-8">
        <h2 className="font-semibold text-2xl text-center">
     Let’s Get Started
    </h2>
    
  <form onSubmit={handleRegister} className="card-body">
    <fieldset className="fieldset">
    
   <button onClick={handleGoogle} className="btn rounded-full hover:bg-[#0084ff] bg-white text-black hover:text-white border-[#e5e5e5]">
  <svg className='rounded-full' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Continue with Google
</button>


      <label className="label font-bold text-gray-800 text-xl">Name</label>
      <input type="text" name='name' className="input bg-gray-50 text-gray-800 border-1 border-black" placeholder="Name" required/>
      {
        nameError && <p className="text-xs text-black">{nameError}</p>
      }
      <label className="label font-bold text-gray-800 text-xl">Photo URL</label>
      <input type="text" name='photo' className="input bg-gray-50 text-gray-800 border-1 border-black" placeholder="Photo Url" required/>
      <label className="label font-bold text-gray-800 text-xl">Email</label>
      <label className="input validator bg-gray-50 text-gray-800 border-1 border-black">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" name='email' placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div> 

<label className="label font-bold text-gray-800 text-xl">Password</label>
<label className="input validator  bg-gray-50 text-gray-800 border-1 border-black  ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input 
    
    type="password"
    name='password'
    required
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

      
      <button type='submit' className="btn text-xl text-white bg-[#0084ff] hover:bg-black mt-4">Register</button>
      <p className="font-semibold text-center pt-5">
          Already Have An Account ?{" "}
          <Link className="text-[#0084ff] link-hover" to="/login">
            Login
          </Link>
        </p>
      
    </fieldset>
  </form>
</div>
    </div>
        </div>
    );
};

export default Register;