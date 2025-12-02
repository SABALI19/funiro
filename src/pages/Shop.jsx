import React, { useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import Products from "../components/home/products";
import Promise from "../components/Promise";
import FilterSection from "../components/FilterSection";
import Footer from "../components/Footer";
import products from "../data/products";

function Shop() {
  const [sortOption, setSortOption] = useState('default');
  const [showCount, setShowCount] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 10000],
    inStock: false,
    onSale: false
  });

  // Calculate filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // helper to get numeric price from either number or string like "$1,234.00"
    const parsePrice = (p) => {
      if (typeof p === 'number') return p;
      if (typeof p === 'string') return parseFloat(p.replace('$', '').replace(/,/g, '')) || 0;
      return 0;
    };

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(product => 
        product.category?.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    if (filters.onSale) {
      filtered = filtered.filter(product => product.discount);
    }

    // Apply price range filter (support number or string prices)
    filtered = filtered.filter(product => {
      const price = parsePrice(product.price);
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Apply sorting
    switch (sortOption) {
      case 'latest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'lowToHigh':
        filtered.sort((a, b) => {
          const priceA = parsePrice(a.price);
          const priceB = parsePrice(b.price);
          return priceA - priceB;
        });
        break;
      case 'highToLow':
        filtered.sort((a, b) => {
          const priceA = parsePrice(a.price);
          const priceB = parsePrice(b.price);
          return priceB - priceA;
        });
        break;
      default:
        // Default sorting - keep original order
        break;
    }

    return filtered;
  }, [sortOption, filters]); // Removed 'products' from dependencies

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / showCount);
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <HeroSection heroHeading="Shop" heroTitle="Shop" />
        </div>
        
        {/* Filter Section with State */}
        <div>
          <FilterSection 
            sortOption={sortOption}
            setSortOption={setSortOption}
            showCount={showCount}
            setShowCount={setShowCount}
            total={filteredProducts.length}
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        {/* Products with filtered data */}
        <div className="mb-12">
          <Products 
            products={currentProducts} 
            showButton={false}  
          />
        </div>

        {/* Pagination */}
        <div className="flex w-full items-center justify-center gap-4 mt-4 mb-12">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`p-4 rounded-xl ${
                currentPage === index + 1
                  ? 'bg-[#B88E2F] text-white'
                  : 'bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white transition-colors'
              }`}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-3 bg-[#F9F1E7] rounded-xl hover:bg-[#B88E2F] hover:text-white transition-colors"
            >
              Next
            </button>
          )}
        </div>

        {/* Promise */}
        <div>
          <Promise/>
        </div>

       
      </div>
    </>
  );
}

export default Shop;