import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";


const Login = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');


  const onSubmitHandler = async(event) => {
    try {
      event.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin' , {email, password})
      if(response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }


  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700">Email Address</p>
            <input onChange={(event)=>setEmail(event.target.value)}
              value={email}
              className="rounded w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700">password</p>
            <input
              onChange={(event)=>setpassword(event.target.value)}
              value={password}
              className="rounded w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="mt-2 w-full px 4 py-2 rounded-md text-white bg-black" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;