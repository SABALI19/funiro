import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Products({ showButton = true, products = [] }) {
  const { addToCart } = useCart();

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Handle both string and number price formats
    let priceValue;
    if (typeof product.price === 'string') {
      priceValue = parseFloat(product.price.replace('$', '').replace(/,/g, ''));
    } else if (typeof product.price === 'number') {
      priceValue = product.price;
    } else {
      priceValue = 0;
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: priceValue,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <>
      {/* Products Grid - Responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group relative bg-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Discount & newItem badges */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex flex-col gap-2">
              {product.discount && (
                <div className="bg-red-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xs sm:text-sm font-semibold">
                  {product.discount}
                </div>
              )}
              {product.newItem && (
                <div className="bg-green-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xs sm:text-sm font-semibold">
                  {product.newItem}
                </div>
              )}
            </div>

            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Add to Cart Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button
                  variant="primary"
                  size="md"
                  onClick={(e) => handleAddToCart(product, e)}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-5 lg:p-6 bg-gray-100">
              <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-gray-800 mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900">
                  {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}
                </span>
                {product.discountPrice && (
                  <span className="text-gray-400 line-through text-sm sm:text-base">
                    {product.discountPrice}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      {showButton && (
        <div className="flex justify-center my-8 sm:my-10 lg:my-12 px-4">
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Show More
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Products;