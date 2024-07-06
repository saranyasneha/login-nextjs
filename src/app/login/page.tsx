"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Signup = () => {
    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    const onLogin=()=>{

    }
  return (
    <div>
      <h1 className="text-center">Signup</h1>
      <hr />
      <div>
     
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
      <button onClick={onLogin} className="p-2 m-2 rounded-lg border border-gray-300 mb-4 focus:outline-none">Signup</button>
      <Link href={"/signup"} >Signup</Link>
      </div>
      
    </div>
  );
};

export default Signup;
