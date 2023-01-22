import React, { useState } from "react";
import "./css/login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import {Link, useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";

const Login = () => {
  const [user, setuser] = useState({});
  const[error,seterror]=useState(false)
  const navigate=useNavigate()

  const handle = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
    console.log(user);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.stsTokenManager.accessToken)
        localStorage.setItem('token',user.stsTokenManager.accessToken)
        seterror(false)
        navigate('/')
        toast.success('Logged In')
       
        // ...
      })
      .catch((error) => {
        seterror(true)
        // ..
      });
      
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center login">
        <form onSubmit={handlesubmit}>
          <h3 className=" mx-auto mb-4 text-secondary">Login</h3>
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
            Login
          </button>
          {error && <span className="error">Wrong email or password</span>}
          <br />
          <span>New User? <Link to='/register'>Register Now</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
