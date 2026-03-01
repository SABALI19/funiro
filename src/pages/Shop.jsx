import React, { useState, useMemo, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Products from "../components/home/products";
import Promise from "../components/Promise";
import FilterSection from "../components/FilterSection";
import axiosInstance from "../api/axios";
import { normalizeProducts } from "../utils/normalizeProduct";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [sortOption, setSortOption] = useState('default');
  const [showCount, setShowCount] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 10000],
    inStock: false,
    onSale: false
  });

  // Fetch products data from API
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axiosInstance.get("furniture/all-furniture");
      const normalizedProducts = normalizeProducts(response.data?.data);
      setProducts(normalizedProducts);
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);

      if (err.response) {
        setError(`Server Error: ${err.response.status} - ${err.response.data.message || 'Failed to fetch products'}`);
      } else if (err.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError(err.message || 'Failed to fetch products');
      }
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  // Helper function to parse price
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      return parseFloat(price.replace('$', '').replace(/,/g, '')) || 0;
    }
    return 0;
  };

  // Calculate filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

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

    // Apply price range filter
    filtered = filtered.filter(product => {
      const price = parsePrice(product.price);
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Apply sorting
    switch (sortOption) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
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
        break;
    }

    return filtered;
  }, [sortOption, filters, products]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / showCount);
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: document.querySelector('.products-section')?.offsetTop || 400,
      behavior: 'smooth'
    });
  };

  // Handle show count change
  const handleShowCountChange = (count) => {
    setShowCount(count);
    setCurrentPage(1);
  };

  // Handle filter reset
  const handleResetFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 10000],
      inStock: false,
      onSale: false
    });
    setSortOption('default');
    setCurrentPage(1);
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full min-h-screen">
        <HeroSection heroHeading="Shop" heroTitle="Shop" />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#B88E2F]"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full min-h-screen">
        <HeroSection heroHeading="Shop" heroTitle="Shop" />
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Error Loading Products</h3>
          <p className="text-gray-500 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#A37E27] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full">
        <HeroSection heroHeading="Shop" heroTitle="Shop" />
      </div>
      
      {/* Filter Section */}
      <div className="products-section">
        <FilterSection 
          sortOption={sortOption}
          setSortOption={setSortOption}
          showCount={showCount}
          setShowCount={handleShowCountChange}
          total={filteredProducts.length}
          filters={filters}
          setFilters={setFilters}
          onReset={handleResetFilters}
        />
      </div>

      {/* Products Display */}
      <div className="mb-12">
        {currentProducts.length > 0 ? (
          <Products 
            products={currentProducts} 
            showButton={false}  
          />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#A37E27] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > showCount && (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 mb-12 px-4">
          {/* Previous Button */}
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-3 bg-[#F9F1E7] rounded-xl hover:bg-[#B88E2F] hover:text-white transition-colors font-medium"
            >
              Previous
            </button>
          )}

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            if (
              pageNum === 1 ||
              pageNum === totalPages ||
              (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-3 rounded-xl font-medium ${
                    currentPage === pageNum
                      ? 'bg-[#B88E2F] text-white'
                      : 'bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white transition-colors'
                  }`}
                >
                  {pageNum}
                </button>
              );
            } else if (
              pageNum === currentPage - 2 ||
              pageNum === currentPage + 2
            ) {
              return <span key={pageNum} className="px-2">...</span>;
            }
            return null;
          })}

          {/* Next Button */}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-3 bg-[#F9F1E7] rounded-xl hover:bg-[#B88E2F] hover:text-white transition-colors font-medium"
            >
              Next
            </button>
          )}
        </div>
      )}

      {/* Items Per Page Info */}
      <div className="text-center text-gray-600 mb-8">
        <p>
          Showing {Math.min(startIndex + 1, filteredProducts.length)} to{' '}
          {Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
        </p>
      </div>

      {/* Promise Section */}
      <div className="mt-16">
        <Promise />
      </div>
    </div>
  );
}

export default Shop;
