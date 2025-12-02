import React, { useState } from 'react'
import { GalleryVertical, X } from 'lucide-react';
import SystemFilter from "../icons/system-uicons_filtering.svg";
import GridDots from "../icons/ci_grid-big-round.svg"; 

const FilterSection = ({
  sortOption, 
  setSortOption, 
  showCount, 
  setShowCount, 
  total
}) => { // Removed unused filters and setFilters props
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [localFilters, setLocalFilters] = useState({
    category: '',
    priceRange: [0, 10000],
    inStock: false,
    onSale: false
  });

  const handleApplyFilters = () => {
    // Here you would typically pass filters up to parent component
    // For now, we'll just close the panel
    setShowFilterPanel(false);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      category: '',
      priceRange: [0, 10000],
      inStock: false,
      onSale: false
    };
    setLocalFilters(clearedFilters);
  };

  const hasActiveFilters = localFilters.category || localFilters.inStock || localFilters.onSale;

  return (
    <div className='w-full bg-[#F9F1E7] p-4 sm:p-6 lg:p-8 relative'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0'>
        
        {/* Left Section */}
        <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto'>
          {/* Filter Button */}
          <button 
            className='flex items-center gap-2 font-poppins font-normal text-lg sm:text-xl lg:text-2xl hover:opacity-80 transition-opacity'
            onClick={() => setShowFilterPanel(!showFilterPanel)}
          >
            <img src={SystemFilter} alt="filter" className='h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10' />
            <span>Filter</span>
            {hasActiveFilters && (
              <span className="bg-[#B88E2F] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                !
              </span>
            )}
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
            <p>Showing 1–{Math.min(showCount, total)} of {total} results</p>
          </div>
        </div>

        {/* Right Section - Dropdowns */}
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

      {/* Filter Panel */}
      {showFilterPanel && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 p-6 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button 
              onClick={() => setShowFilterPanel(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block font-semibold mb-2">Category</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded"
                value={localFilters.category}
                onChange={(e) => setLocalFilters({...localFilters, category: e.target.value})}
              >
                <option value="">All Categories</option>
                <option value="chairs">Chairs</option>
                <option value="sofas">Sofas</option>
                <option value="tables">Tables</option>
                <option value="decor">Decor</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block font-semibold mb-2">
                Price Range: ${localFilters.priceRange[0]} - ${localFilters.priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input 
                  type="number"
                  placeholder="Min"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={localFilters.priceRange[0]}
                  onChange={(e) => setLocalFilters({
                    ...localFilters, 
                    priceRange: [Number(e.target.value) || 0, localFilters.priceRange[1]]
                  })}
                />
                <input 
                  type="number"
                  placeholder="Max"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={localFilters.priceRange[1]}
                  onChange={(e) => setLocalFilters({
                    ...localFilters, 
                    priceRange: [localFilters.priceRange[0], Number(e.target.value) || 10000]
                  })}
                />
              </div>
            </div>

            {/* Checkbox Filters */}
            <div className="space-y-3">
              <label className="flex items-center">
                <input 
                  type="checkbox"
                  checked={localFilters.inStock}
                  onChange={(e) => setLocalFilters({...localFilters, inStock: e.target.checked})}
                  className="mr-2"
                />
                In Stock Only
              </label>
              
              <label className="flex items-center">
                <input 
                  type="checkbox"
                  checked={localFilters.onSale}
                  onChange={(e) => setLocalFilters({...localFilters, onSale: e.target.checked})}
                  className="mr-2"
                />
                On Sale
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between items-center">
            <button 
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </button>
            <button 
              className="px-6 py-2 bg-[#B88E2F] text-white rounded hover:bg-[#A57C2A] transition-colors"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterSection;