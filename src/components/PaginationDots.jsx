import React from 'react'

const PaginationDots = ({total, current, onDotClick}) =>{

     return (
    <div className=''>
      {Array.from({ length: total }).map((_, index) =>(
         <button key={index} 
        onClick={() => onDotClick(index)}
        className={`
          transition-all rounded-2xl ${
        current === index 
         ? "bg-white h-3 w-8" 
         : "bg-gray-400 h-3 w-3 opacity-60"
        }`
        }
        ></button>
      )
      )}
       
    </div>
  );
} ;
 

export default PaginationDots