import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import products from "../../data/products";

function Products({ showButton = true }) {  
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-[] ">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="bg-[#F4F5F7] shadow-md w-70">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                {/* // discount & newItem badges // */}
                <div className="top-4 right-6 absolute flex flex-col items-end space-y-2">
                  {product.discount && (
                    <span className="top-4 right-6 p-3 shadow-5xl font-poppins text-amber-50 rounded-2xl bg-amber-900">
                      {product.discount}
                    </span>
                  )}

                  {/* // new item // */}
                  {product.newItem && (
                    <span className="font-poppins p-4 rounded-2xl text-sm bg-[#2EC1AC] shadow-sm text-amber-50">
                      {product.newItem}
                    </span>
                  )}
                </div>
              </div>

              {/* // product info // */}
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
        ))}

        {/* will  show button if prop is true */}
        {showButton && (
          <div>
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
