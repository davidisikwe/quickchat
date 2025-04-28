// import React from 'react';

// const Login = () => {
//   return (
//     <div className='h-[27rem] w-[23rem] p-6 border-[.0625rem] rounded-xl flex flex-col'>
//       <div>
//         <h1 className='text-2xl font-semibold'>Login</h1>
//         <p className='text-[#71717A] mt-[.375rem] mb-6'>
//           Enter your email below to login your account
//         </p>
//       </div>

//       <div className='flex flex-col gap-4'>
//         <div className='flex flex-col'>
//           <label htmlFor='email' className='text-sm text-[#09090B] font-medium'>
//             Email
//           </label>
//           <input
//             className='h-10 border-[.0625rem] mt-2 px-3 py-2 rounded-[.5rem] text-[#71717A] text-sm'
//             type='email'
//             id='email'
//             name='email'
//             placeholder='m@example.com'
//             required
//           />
//         </div>

//         <div>
//           <div className='flex justify-between'>
//             <label
//               htmlFor='password'
//               className='text-sm text-[#09090B] font-medium'
//             >
//               Password
//             </label>
//             <a href='#' className='text-sm text-[#09090B] underline'>
//               Forgot your password?
//             </a>
//           </div>
//           <input
//             className='h-10 border-[.0625rem] px-3 py-2 w-full mt-2 rounded-[.5rem]'
//             type='password'
//             id='password'
//             name='password'
//           />
//         </div>
//         <button className='border-[.0625rem] h-10 bg-[#18181B] text-white px-[1rem] py-[.5rem] rounded-[.5rem] text-sm font-medium'>
//           Login
//         </button>
//         <button className='border-[.0625rem] h-10 bg-white text-[#09090B] px-[1rem] py-[.5rem] rounded-[.5rem] text-sm font-medium'>
//           Login With Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

//------------------------------------------//

// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <div className='mb-6'>
//         <h1 className='text-2xl font-semibold'>Login</h1>
//         <p className='text-gray-600 mt-2'>
//           Enter your email and password to access your account.
//         </p>
//       </div>

//       <form className='space-y-4'>
//         <div>
//           <label
//             htmlFor='email'
//             className='block text-sm font-medium text-gray-700'
//           >
//             Email
//           </label>
//           <input
//             type='email'
//             id='email'
//             className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
//             placeholder='m@example.com'
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor='password'
//             className='block text-sm font-medium text-gray-700'
//           >
//             Password
//           </label>
//           <input
//             type='password'
//             id='password'
//             className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
//             placeholder='Your password'
//             required
//           />
//         </div>

//         <div className='text-right'>
//           <a href='#' className='text-sm text-blue-600 hover:underline'>
//             Forgot your password?
//           </a>
//         </div>

//         <button
//           type='submit'
//           className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium'
//         >
//           Log in
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

//--------------------------------//

// import React, { useState } from 'react';

// const Login = () => {
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   return (
//     <div>
//       <div className='mb-6'>
//         <h1 className='text-2xl font-semibold'>Login</h1>
//         <p className='text-gray-600 mt-2'>
//           Enter your email and password to access your account.
//         </p>
//       </div>

//       <form className='space-y-4'>
//         {/* Email Input */}
//         <div>
//           <label
//             htmlFor='email'
//             className='block text-sm font-medium text-gray-700'
//           >
//             Email
//           </label>
//           <input
//             type='email'
//             id='email'
//             className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
//             placeholder='m@example.com'
//             required
//           />
//         </div>

//         {/* Password Input with Show/Hide Toggle */}
//         <div>
//           <label
//             htmlFor='password'
//             className='block text-sm font-medium text-gray-700'
//           >
//             Password
//           </label>
//           <div className='relative'>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id='password'
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
//               placeholder='Your password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type='button'
//               className='absolute inset-y-0 right-2 flex items-center text-sm text-gray-500 focus:outline-none'
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//         </div>

//         {/* Forgot Password */}
//         <div className='text-right'>
//           <a href='#' className='text-sm text-blue-600 hover:underline'>
//             Forgot your password?
//           </a>
//         </div>

//         {/* Submit Button */}
//         <button
//           type='submit'
//           className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium'
//         >
//           Log in
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

//--------------------------------//

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     try {
//       const url = 'http://localhost:3000/api/user/login';
//       const { data } = await axios.post(url, { email, password });

//       // Save the entire user info in localStorage
//       localStorage.setItem('userInfo', JSON.stringify(data));

//       toast.success('Login successful!');
//       navigate('/chats'); // Redirect to chats page
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           'Something went wrong. Please try again.'
//       );
//     }
//   };

//   return (
//     <div>
//       <div className='mb-6'>
//         <h1 className='text-2xl font-semibold'>Login</h1>
//         <p className='text-gray-600 mt-2'>
//           Enter your email and password to access your account.
//         </p>
//       </div>

//       <form onSubmit={handleLogin} className='space-y-4'>
//         {/* Email Input */}
//         <div>
//           <label
//             htmlFor='email'
//             className='block text-sm font-medium text-gray-700'
//           >
//             Email
//           </label>
//           <input
//             type='email'
//             id='email'
//             className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
//             placeholder='m@example.com'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         {/* Password Input with Show/Hide Toggle */}
//         <div>
//           <label
//             htmlFor='password'
//             className='block text-sm font-medium text-gray-700'
//           >
//             Password
//           </label>
//           <div className='relative'>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id='password'
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
//               placeholder='Your password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type='button'
//               className='absolute inset-y-0 right-2 flex items-center text-sm text-gray-500 focus:outline-none'
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//         </div>

//         {/* Forgot Password */}
//         <div className='text-right'>
//           <a href='#' className='text-sm text-blue-600 hover:underline'>
//             Forgot your password?
//           </a>
//         </div>

//         {/* Submit Button */}
//         <button
//           type='submit'
//           className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium'
//         >
//           Log in
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// ⚠️ Update the path to match where you place the logo file
import usdLogo from '../../assets/usd_logo.png';
/**
 * Login component
 * Displays the USD logo, a heading that reads "USD QUICK CHAT",
 * and a form for users to enter their credentials.
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const url = "http://localhost:3000/api/user/login";
      const { data } = await axios.post(url, { email, password });

      // Store user in localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      toast.success("Login successful!");
      navigate("/chats");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="w-full max-w-sm p-6 border rounded-2xl shadow-md mx-auto flex flex-col gap-6">
      {/* Logo & Title */}
      <div className="flex flex-col items-center gap-2">
        <img src={usdLogo} alt="University of South Dakota logo" className="h-16 w-auto" />
        <h1 className="text-3xl font-bold tracking-tight">USD QUICK CHAT</h1>
        <p className="text-gray-600 text-center max-w-xs">
          Enter your email and password to access your account.
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;