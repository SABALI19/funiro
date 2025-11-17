import React from 'react'

const FeaturesSection = () => {
  return (
    <div className='w-full p-4 text-center justify-center mt-10'>
        <h1 className='text-4xl font-extrabold font-poppins'>
            Browse The Range 
        </h1>
        <p className='text-[#666666] font-poppins font-light mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        </p>

        <div className='flex flex-wrap justify-center gap-4 mt-8 w-full  '>
           <div className='w-1/4 '>
             <img src="./images/dinning-pic.svg " 
             className='w-full rounded-lg ' 
             alt="dinning" />
             <p className='text-center text-2xl my-4 font-semibold font-sans'>Dinning</p>
           </div>

           <div className='w-1/4 '>
            <img src="./images/bedroom.svg"
            className='w-full rounded-lg'
             alt="bedroom" />
            <p className='text-center text-2xl rounded-lg my-4 font-semibold font-sans'>Bedroom</p>
           </div>

           <div className='w-1/4 '>
            <img src="./images/livingroom.svg"
            className='w-full rounded-lg' 
            alt="livingroom" />
            <p className='text-center text-2xl rounded-lg my-4 font-semibold font-sans'>Living Room</p>
           </div>
           
        </div>
    </div>
  )
}

export default FeaturesSection