import React from 'react'

const Pagination = ({totalPages,handleClick}) => {
    const pages=[...Array(totalPages).keys()].map(num=>num+1); 
    return (
        <div>
          {
              pages.map(num=>(
                  <button key={num} onClick={()=>handleClick(num)}  className="btn btn-primary mt-3" style={{ backgroundColor: '#b3246b',width:'60px' }}  >
                      {num}
                  </button>
              ))
          }
        </div>
    )
}

export default Pagination
