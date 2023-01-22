import React, { useState } from "react";
import "./css/login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import {Link, useNavigate} from 'react-router-dom'
import {doc,serverTimestamp,setDoc} from 'firebase/firestore'
import { toast } from "react-toastify";

const Register = () => {
  const [info, setinfo] = useState({});
  const navigate=useNavigate()
  

  const handle = (e) => {
    const { name, value } = e.target;
    setinfo({ ...info, [name]: value });
    console.log(info);
  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    try{

      const res= await createUserWithEmailAndPassword(auth, info.email, info.pass)
      await setDoc(doc(db, "users", res.user.uid), {
        ...info,
        timestamp:serverTimestamp()
      });

      toast.success('User registered')
      navigate('/login')

    }catch(err){
      console.log(err)
    }
      

     
      
  };
 
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center login">
        <form onSubmit={handlesubmit}>
          <h3 className=" mx-auto mb-4 text-secondary">Register</h3>
          <label for="email">Full Name </label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            onChange={handle}
            placeholder="Enter Name.."
          />
          <label for="email">Email </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handle}
            placeholder="Enter Email.."
          />
          <label for="email">Password</label>
          <input
            type="password"
            className="form-control pass"
            name="pass"
            onChange={handle}
            placeholder="Enter Password.."
          />
          <button type="submit" className="btn btn-dark"> 
            Register
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
