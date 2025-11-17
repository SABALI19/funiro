import React,{useState, useEffect} from 'react';
import PaginationDots from '../PaginationDots';


const ImageCarousel = ({images, interval = 4000}) => {

  const [current, setCurrent] = useState(0)

  useEffect(()=>{
    const slides = setInterval(()=>{
      setCurrent((prev) =>(prev + 1) % images.length);
    },interval);

    return () => clearInterval(slides);
  }, [images.length, interval]);


  return (
    <div className='relative w-5xl overflow-hidden h-[400px] md:h-[500px] '>
      <div className='flex w-2/3 transition-transform ase-in-out uration-4000'

      style={{
      transform: `translateX(-${current * 100}%)`,
      width: `${images.length * 100} %`,
      }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slides-${index}`} className='w- object-cover shrink-0' />
        ))}
      </div>
<button onClick={() =>
  setCurrent((prev)=> (prev - 1 + images.length))
}></button>

{/* //PaginationDots */}
      <button onClick={()=>
        setCurrent((prev) => (prev + 1) % images.length)
      }
       className='absolute top-63 left-4 -translate-y1/2 bg-white/60 hover:text-white text- rounded-2xl p-3 shadow-lg transition'>
  ←
      </button>
      
      <button onClick={()=>
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
      } 
      className='absolute top-1/2 right-4 -translate-y1/2 bg-white/60  hover:text-white rounded-2xl shadow-lg p-3 transition '>
  →
      </button>
                  {/* carousel icons */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 '>
       {images.map((_,index) =>(
         <button key={index} className={`h-4 w-4 rounded-lg transition-all md:w-4 md:h-4 ${index === current ?
           "bg-white w-4": "bg-gray-400"}`}
          onClick={() => setCurrent(index)}>
          
        </button>
       ))}
      </div>
    </div>
  );
};

export default ImageCarousel