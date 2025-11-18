import React from 'react'
import { GalleryVertical } from 'lucide-react';
import SystemFilter from "../icons/system-uicons_filtering.svg";
import GridDots from "../icons/ci_grid-big-round.svg"; 

const FilterSection = ({sortOption, setSortOption, showCount, setShowCount, total}) => {
  return (
    <div className='w-full bg-[#F9F1E7] p-4 sm:p-6 lg:p-8 '>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0'>
        
        {/* Left Section - All controls in one row */}
        <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto'>
          {/* Filter Button */}
          <button className='flex items-center gap-2 font-poppins font-normal text-lg sm:text-xl lg:text-2xl hover:opacity-80 transition-opacity'>
            <img src={SystemFilter} alt="filter" className='h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10' />
            <span>Filter</span>
          </button>
          
          {/* View Controls */}
          <div className='flex items-center gap-2 sm:gap-3'>
            <button className='p-1 hover:bg-white rounded transition-colors'>
              <img src={GridDots} alt="Grid view" className='h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8' />
            </button>
            <button className='p-1 hover:bg-white rounded transition-colors'>
              <GalleryVertical className='h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8' />
            </button>
          </div>
          
          {/* Vertical Divider */}
          <div className="border-l-2 border-[#9F9F9F] h-6 lg:h-8 mx-2 lg:mx-4"></div>

          {/* Results Count */}
          <div className='text-sm sm:text-base lg:text-lg text-center lg:text-left'>
            <p>Showing 1–{showCount} of {total} results</p>
          </div>
        </div>

        {/* Right Section - Dropdowns in one row */}
        <div className='flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto'>
          {/* Show Dropdown */}
          <div className='flex items-center gap-2'>
            <span className='font-normal font-poppins text-sm sm:text-base lg:text-xl whitespace-nowrap'>Show</span>
            <select 
              className="px-2 py-1 sm:px-3 sm:py-2 bg-white font-poppins text-sm sm:text-base rounded border border-gray-300 text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F]"
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
              <option value="24">24</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className='flex items-center gap-2'>
            <span className='font-normal font-poppins text-sm sm:text-base lg:text-xl whitespace-nowrap'>Sort by:</span>
            <select 
              className='px-2 py-1 sm:px-3 sm:py-2 rounded bg-white font-normal font-poppins text-sm sm:text-base border border-gray-300 text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F]'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="latest">Latest</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection;