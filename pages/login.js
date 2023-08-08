import React,{useState} from "react";
import Link from "next/link";
import Company from '../public/logo.jpg'
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter,router } from "next/router";


const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const data={email,password};
    const res = await fetch('http://localhost:3000/api/login', {
      method: "POST", 
       headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(data), 
    });
  
    let response= await res.json();
    if(response.success==true){

      toast.success('User loged in successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          router.push('http://localhost:3000')
        }, "1000");
        
    }
    else{
      toast.error('Invalid details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    setEmail('')
   
    setPassword('')
    
  
  }

    const handleChange=(e)=>{
      if(e.target.name=='name'){
     setName(e.target.value);
      }
      else if(e.target.name=='email'){
       setEmail(e.target.value);
      }
      else if(e.target.name=='password'){
       setPassword(e.target.value);
      }
       }


  return (
    <div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href={'/'}>
            <Image
              className="mx-auto h-12 w-auto"
              src={Company}
              
              alt="Company"
            /></Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link
                href={"/signup"}
                className="font-medium text-purple-600 hover:text-purple-500 mx-2">
                 Sign Up
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-px rounded-md shadow-sm">
            
              <div>
                <label forhtml="email-address" className="sr-only">
                  Email address
                </label>
                <input value={email} onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label forhtml="password" className="sr-only">
                  Password
                </label>
                <input value={password} onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label
                  forhtml="remember-me"
                  className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot"
                  className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;