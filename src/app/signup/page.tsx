"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Signup = () => {
  const [res,setRes]=useState('')
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:"",
    })
    const fun =async()=>{
      console.log("hi");
      const response=await axios.get('/api/users/signup');
      
      console.log(response);
    }
//     useEffect(()=>{
// fun()

//     },[])
    const onSignUp=()=>{

    }
  return (
    <div>
      <h1 className="text-center">Signup</h1>
      <hr />
      <h1>{res}</h1>
      <div>
      <input 
      type="text" 
      className="p-2 m-2 rounded border border-gray-300"
      id="username"
      value={user.username}
      placeholder="User Name"
      onChange={(e)=>setUser({...user,username:e.target.value})}
      />
      <br />
      <input 
      type="text" 
      className="p-2 m-2 rounded border border-gray-300"
      id="email"
      value={user.email}
      placeholder="Email"
      onChange={(e)=>setUser({...user,email:e.target.value})}
      />
      <br />
      <input 
      type="text" 
      className="p-2 m-2 rounded rounded border border-gray-300"
      id="password"
      value={user.password}
      placeholder="Password"
      onChange={(e)=>setUser({...user,password:e.target.value})}
      />
      <br />
      <button onClick={onSignUp} className="p-2 m-2 rounded-lg border border-gray-300 mb-4 focus:outline-none">Signup</button>
      <Link href={"/login"} >login</Link>
      </div>
      <button onClick={fun}>click</button>
    </div>
  );
};

export default Signup;
