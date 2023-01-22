import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonComp = () => {
  return (
    <div>
         <div className="card col-md-3 mb-4"  style={{height:'27rem',width:'18rem'}}>
          <i className="fab fa-apple fa-lg  pb-1 px-3"></i>
          <Skeleton style={{height:'14rem'}} />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title "><Skeleton/></h5>
              <p className="text-muted mb-4"><Skeleton/></p>
              <p className="text-muted mb-4"><Skeleton/></p>
            </div>
           </div>
           </div>
    </div>
  )
}

export default SkeletonComp