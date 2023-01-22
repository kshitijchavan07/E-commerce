import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CommonSec from "./CommonSec";
import { Add } from "../reduxTool/Cart/CartAction";
import { toast } from "react-toastify";
import Appbar from "./Appbar";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [count, setcount] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + id)
      .then((response) => {
        setproduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(product);

  const ADDTOCART = (item) => {
    dispatch(Add(item));
    toast.success("Item added to cart");
  };
  function increment() {
    setcount(count + 1);
  }
  function decrement() {
    if (count <= 1) return 1;
    else {
      setcount(count - 1);
    }
  }
  const view = () => {
    navigate("/cart");
  };
  return (
    <div>
    <Appbar/>
      <CommonSec style={{ height: "150px" }} />
      <div className="container">
        <div
          className="row mb-5  "
          style={{
            marginTop: "50px",
            background: "Bone White",
            marginBottom: "350px",
          }}
        >
          <div
            className=" pl-2 col-sm-4 col-12 d-flex align-items-center justify-content-center  "
            style={{ marginRight: "140px" }}
          >
            <motion.img
              whileHover={{ scale: 0.9 }}
              style={{ height: "300px", width: "400px" }}
              src={product.images ? product.images[0] : ""}
              alt="img"
            />
          </div>
          <div className=" col-md-4 col-12 ">
            <section className="mt-5 ml-3 mb-3  ">
              <h2 className="mb-4">{product.title}</h2>
              <span class="fa fa-star review"></span>
              <span class="fa fa-star review"></span>
              <span class="fa fa-star review"></span>
              <span class="fa fa-star review"></span>
              <span class="fa fa-star-half-o review"></span>
              <p className="mb-4 mt-1">
                {product.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis molestiae repellat autem provident tenetur reiciendis
                exercitationem fugiat obcaecati iure voluptatum?
              </p>
              <h6 className="mb-4">$ {product.price}</h6>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => ADDTOCART(product)}
                className="btn btn-outline-dark"
              >
                Add to Cart
              </motion.button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
