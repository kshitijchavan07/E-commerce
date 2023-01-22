import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'
import { motion } from "framer-motion"
import { useDispatch } from "react-redux";
import { Add } from "../reduxTool/Cart/CartAction";
import { toast } from "react-toastify";



const ApiList = ({ data }) => {
  const dispatch=useDispatch()
  const ADDTOCART=(item)=>{
    dispatch(Add(item))
    toast.success('Item added to cart');

}

  return (
    <div>
      <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2  mt-5">
        {data.map((val,id) => (
          <div className="col text-decoration-none" key={val.id}>
          <motion.div whileHover={{ scale:1.05 }} className="card text-black mb-4 border border-gray"  style={{height:'24rem',backgroundColor:'Ghost white'}}>
          <motion.div >
          <img src={val.images[0]}
            className="card-img-top" alt="Apple Computer" style={{height:'14rem'}} />
          </motion.div>
          <div class="d-flex justify-content-start align-items-end h-200" style={{position:'absolute',right:2}}>
                  <h5><span class="badge bg-primary ms-2">{val.discountPercentage}% off</span></h5>
                </div>
          <div className="card-body">
            <div className="text-left">
          <Link className="title" to={'/products/'+val.id}>
              <h5 className="card-title ">{val.title}</h5>
          </Link>
              <h6 className="card-subtitle text-muted ">{val.category}</h6>
              <div className="d-flex justify-content-between">
              <p className="fs-4 my-3">${val.price} </p>
              <button onClick={()=>ADDTOCART(val)} style={{borderRadius:'100%',outline:'none'}} className="btn border-none" ><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
           </div>
           </motion.div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default ApiList;
