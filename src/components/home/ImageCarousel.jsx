import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slides = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slides);
  }, [images.length, interval]);

  return (
    <div className='relative w-full overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg'>
      {/* Images Container */}
      <div 
        className='flex transition-transform ease-in-out duration-700'
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`slide-${index}`} 
            className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover shrink-0' 
          />
        ))}
      </div>

      {/* Left Arrow Button */}
      <button 
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className='absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/60 hover:bg-[#B88E2F] hover:text-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300'
        aria-label="Previous slide"
      >
        ←
      </button>
      
      {/* Right Arrow Button */}
      <button 
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className='absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/60 hover:bg-[#B88E2F] hover:text-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300'
        aria-label="Next slide"
      >
        →
      </button>

      {/* Pagination Dots */}
      <div className='absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <button 
            key={index} 
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#B88E2F] w-6 sm:w-8" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;