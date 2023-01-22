import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./css/Appbar.css";

function Appbar() {
  const [click, setClick] = useState(false);
  const {cart} = useSelector((state) => state.carts);
  const navigate=useNavigate()
  const handle=()=>{
    navigate('/cart')
  }
  const logout = ()=>{
    localStorage.clear('token')
    toast('logged out!')
    navigate('/login')
}

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            FlipKart
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-buttons">
          <button onClick={handle} type="button" class="btn btn-sm button1  position-relative" style={{backgroundColor:'none',color:'black'}}>
          <i class="fa-sharp fa-solid fa-cart-shopping cartbutton"/>
            <span style={{backgroundColor:'lightgrey',color:'black'}} class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-danger cartbadge">
              {cart.length}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          <button onClick={logout} style={{backgroundColor:'white',color:'black',border:'none',outline:'none'}}>
          <i class="fa-solid fa-right-from-bracket"></i>Logout
          </button>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Appbar;