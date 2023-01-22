import React from 'react'

const PaginationComp = ({TotalPost,postperpage,paginate}) => {
    const pages=[]
    for(let i=1;i<=Math.ceil(TotalPost/postperpage);i++){
        pages.push(i)

    }
  return (
    <div className='d-flex justify-content-end'>
        <nav >
            <ul className="pagination">
                {
                    pages.map(val=>(
                        <li key={val} className='page-item'>
                            <button onClick={()=>paginate(val)} href='!#' className='page-link' >{val}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default PaginationComp