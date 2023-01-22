import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Delete } from "../reduxTool/Cart/CartAction";
import Appbar from "./Appbar";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);
  const [price, setprice] = useState(0);




  function DeleteItem(id) {
    dispatch(Delete(id));
    toast.success("Item removed from cart");
  }
  function Total() {
    let price = 0;
    cart.map((item, index) => {
      price = parseFloat(item.price) * item.qty + price;
    });
    setprice(price);
  }


  useEffect(() => {
    Total();
  }, [Total]);
  return (
    <div
      style={{
        margin: "0",
        padding: " 0",
        minHeight: "72vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Appbar />

      <div className="container">
        {cart.length > 0 ? (
          <>
            <div className="row my-5">
              <div className="col-md-7">
                <table
                  className="table bordered my-5"
                  style={{ marginTop: "100px" }}
                >
                  <thead>
                    <tr className="text-center">
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, id) => (
                      <tr key={item.id} className="text-center">
                        <td>
                          <img
                            style={{ width: "70px", height: "60px" }}
                            src={item.images[0]}
                            alt="img"
                          ></img>
                        </td>
                        <td>{item?.title}</td>
                        <td> {item?.price}</td>
                        <td>
                          <span> {item?.qty} </span>
                        </td>
                        <td>
                          {" "}
                          <button
                            style={{ border: "none", backgroundColor: "none" }}
                            onClick={() => DeleteItem(item.id)}
                          >
                            <i
                              style={{ color: "red" }}
                              class="fa-sharp fa-solid fa-trash"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-3 col-12 offset-md-2 ">
                <div
                  style={{ marginTop: "30px" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <h6 className="fs-4">Subtotal</h6>
                  <h6 className="fs-4">${price}</h6>
                </div>
                <div>
                  <p className="fs-6 mt-2">
                    Taxes and shipping will be calculated in CheckOut
                  </p>
                </div>
                <button className="btn btn-dark w-100 mt-3">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/products"
                  >
                    Continue Shopping
                  </Link>
                </button>
                <button className="btn btn-dark w-100 mt-3">
                  <Link
                    to="/checkout"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </>
        ) : (
          <h1 style={{ marginLeft: "100px" }} className="text-center fs-4">
            No Items Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
