import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetData } from '../reduxTool/products/ProductAction'
import ApiList from './ApiList'
import Appbar from './Appbar'
import Footer from './Footer'
import ImgSlider from './ImgSlider'
import PaginationComp from './PaginationComp'
import Services from './Services'
import SkeletonComp from './SkeletonComp'

const Home = () => {
    const [currentpage, setcurrentpage] = useState(1);
    const postperpage = 8;
    const dispatch=useDispatch()
    const {products,loading} = useSelector((state) => state.products);
    useEffect(()=>{
        dispatch(GetData())
    },[])
    
 
   
    console.log(products)
    console.log(loading)
    const LastPostId = currentpage * postperpage;
    const FirstPostId = LastPostId - postperpage;
    const current =products.slice(FirstPostId, LastPostId);
  const paginate = (num) => setcurrentpage(num);
 const catproduct=products.filter(item=>item.category==='smartphones').slice(0,4)
  console.log(catproduct)
  return (
    <div  >
     <Appbar/>

    <ImgSlider/>
    
    

      {loading ? (
        <div className="container">
        <h1>loading......</h1>
        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2  mt-5">
        <SkeletonComp/>
       <SkeletonComp/>
       <SkeletonComp/>
       <SkeletonComp/>
        </div>
        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2  mt-5">
        <SkeletonComp/>
       <SkeletonComp/>
       <SkeletonComp/>
       <SkeletonComp/>
        </div>
           </div>
      ) : (
        <div className="container">
          <h1 className="mt-4">Trending Smartphones</h1>
          <ApiList data={catproduct} />
          <Services/>
          <h1 className="text-center">Product List</h1>
          <ApiList data={current} />
          <PaginationComp
            TotalPost={products.length}
            postperpage={postperpage}
            paginate={paginate}
          />
        </div>
      )}

    </div>
  )
}

export default Home