import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Products({ showButton = true, products = [] }) {  // Accept products as prop
  const { addToCart } = useCart();

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('$', '').replace(',', '')),
      image: product.image,
      quantity: 1
    });
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-[]">
          {products.map((product) => (  // Use the products prop
            <div key={product.id} className="relative group">
              <Link to={`/products/${product.id}`}>
                <div className="bg-[#F4F5F7] shadow-md w-70 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />

                    {/* discount & newItem badges */}
                    <div className="top-4 right-6 absolute flex flex-col items-end space-y-2">
                      {product.discount && (
                        <span className="top-4 right-6 p-3 shadow-5xl font-poppins text-amber-50 rounded-2xl bg-amber-900">
                          {product.discount}
                        </span>
                      )}

                      {product.newItem && (
                        <span className="font-poppins p-4 rounded-2xl text-sm bg-[#2EC1AC] shadow-sm text-amber-50">
                          {product.newItem}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button 
                        className="bg-white text-black px-6 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* product info */}
                  <div className="w-full p-4">
                    <div className="text-left">
                      <h2 className="font-semibold text-xl font-poppins">{product.name}</h2>
                      <p className="text-color-darkgrey font-poppins font-medium">
                        {product.description}
                      </p>
                    </div>

                    <div className="gap-30 flex">
                      <span className="font-poppins text-lg font-bold">{product.price}</span>
                      <span className="color-brightgrey font-poppins text-[#B0B0B0] text-base">
                        {product.discountPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Show More Button - You can remove this since you have pagination */}
        {showButton && (
          <div className="text-center mt-8">
            <Button variant="secondary" size="md">
              Show More
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;