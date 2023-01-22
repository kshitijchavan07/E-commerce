import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiList from "./ApiList";
import Appbar from "./Appbar";
import CommonSec from "./CommonSec";
import "./css/Shop.css";
import PaginationComp from "./PaginationComp";

const Shop = () => {
  const products=JSON.parse(localStorage.getItem('products'))
  const [productdata, setproductdata] = useState(products);
  console.log(products);
  const [currentpage, setcurrentpage] = useState(1);
  const postperpage = 12;
  const LastPostId = currentpage * postperpage;
  const FirstPostId = LastPostId - postperpage;
  const current = productdata.slice(FirstPostId, LastPostId);
  const paginate = (num) => setcurrentpage(num);
  const FilterCategory = (e) => {
    const filtervalue = e.target.value;
    if (filtervalue.toLowerCase() === "smartphones") {
      const filtereddata = products.filter(
        (item) => item.category === "smartphones"
      );
      setproductdata(filtereddata);
    }
    if (filtervalue.toLowerCase() === "laptops") {
      const filtereddata = products.filter(
        (item) => item.category === "laptops"
      );
      setproductdata(filtereddata);
    }
    if (filtervalue.toLowerCase() === "fragrances") {
      const filtereddata = products.filter(
        (item) => item.category === "fragrances"
      );
      setproductdata(filtereddata);
    }
    if (filtervalue.toLowerCase() === "skincare") {
      const filtereddata = products.filter(
        (item) => item.category === "skincare"
      );
      setproductdata(filtereddata);
    }
    if (filtervalue.toLowerCase() === "groceries") {
      const filtereddata = products.filter(
        (item) => item.category === "groceries"
      );
      setproductdata(filtereddata);
    }
    if (filtervalue.toLowerCase() === "home-decoration") {
      const filtereddata = products.filter(
        (item) => item.category === "home-decoration"
      );
      setproductdata(filtereddata);
    }
    if (filtervalue.toLowerCase() === "all") {
      setproductdata(products);
    }
  };
  const SortCategory = (e) => {
    const sortproduct = e.target.value;
    if (sortproduct === "asc") {
      const sortedproducts = productdata
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((item) => item);
      setproductdata(sortedproducts);
      console.log(productdata);
    }
    if (sortproduct === "desc") {
      const descproducts = productdata
        .sort((a, b) => b.title.localeCompare(a.title))
        .map((item) => item);
      setproductdata(descproducts);
      console.log(descproducts);
    }
  };

  const searchproduct = (e) => {
    const search = e.target.value;

    const searchdata = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setproductdata(searchdata);
  };

  return (
    <div>
    <Appbar/>
      <CommonSec title="Products" />
      <section>
        <div className="container ">
          <div className="row mt-4 d-flex align-items-center">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="filter">
                <select
                  name=""
                  id=""
                  className="custom-select"
                  aria-label="Example select with button addon"
                  onChange={FilterCategory}
                >
                  <option value="All">All</option>
                  <option value="smartphones">Smartphones</option>
                  <option value="laptops">Laptops</option>
                  <option value="fragrances">fragrances</option>
                  <option value="skincare">skincare</option>
                  <option value="groceries">groceries</option>
                  <option value="home-decoration">home-decoration</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <select
                name="sort"
                id=""
                className="custom-select"
                onChange={SortCategory}
              >
                <option>Sort</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="col-md-6 col-sm-12">
              <div class="row">
                <div id="custom-search-input">
                  <div class="input-group col-md-12">
                    <input
                      type="text"
                      class="  search-query form-control"
                      placeholder="Search"
                      onChange={searchproduct}
                    />
                    <span class="input-group-btn">
                      <button class="btn" type="button">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="container">
        <div className="row">
          {productdata.length === 0 ? (
           <div  style={{
        margin: '0',
        padding:' 0',
        minHeight: '50vh',
        display:'flex',
        flexDirection: 'column',
       }}> <h1 className="text-center fs-4">No Products Found!</h1></div>
          ) : (
            <>
              <ApiList data={current} />
              <PaginationComp
                TotalPost={productdata.length}
                postperpage={postperpage}
                paginate={paginate}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
