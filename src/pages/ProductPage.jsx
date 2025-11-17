import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import Breadcrumbs from "../components/Breadcrumbs";
import { useCart } from "../context/CartContext";


const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === parseInt(id));
  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image || ""
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500">
        <h2>Product not found</h2>
        <Link
          to="/"
          className="bg-[#B88E2F] text-white px-6 py-3 rounded-lg hover:bg-[#a07d28] transition"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const gallery = product.images || [product.image];

  // Function to render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full">
      <Breadcrumbs productName={product.name} />

      <div className="flex flex-col md:flex-row gap-8 p-10 max-w-7xl mx-auto">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3 w-full md:w-[120px] justify-center md:justify-start">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} view ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover cursor-pointer rounded-md border-2 ${
                mainImage === img ? "border-[#B88E2F]" : "border-transparent"
              } hover:opacity-80 transition-all duration-200`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-w-[600px] h-auto rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Product Details & Reviews Side by Side */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Product Name */}
          <h1 className="text-3xl font-semibold font-poppins text-[#3A3A3A]">
            {product.name}
          </h1>

          {/* Price */}
          <div className="text-2xl font-bold text-[#3A3A3A]">
            {product.price}
          </div>

          {/* Reviews Section - Positioned here */}
          <div className="flex items-center gap-4">
            <div className="flex">
              {renderStars(product.averageRating || 5)}
            </div>
            <span className="text-gray-600 border-l border-gray-300 pl-4">
              {product.reviewCount || 5} Customer Review
              {product.reviewCount !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Product Description */}
          <p className="text-[#616161] text-lg font-poppins">
            {product.description ||
              "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."}
          </p>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold text-[#3A3A3A] mb-3">Size</h3>
            <div className="flex gap-3">
              {["XL", "L", "M", "S", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center font-semibold transition-all ${
                    selectedSize === size
                      ? "border-[#B88E2F] bg-[#B88E2F] text-white"
                      : "border-gray-300 text-gray-600 hover:border-[#B88E2F]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold text-[#3A3A3A] mb-3">Color</h3>
            <div className="flex gap-3">
              {["#000000", "#B88E2F", "#0000FF"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? "border-gray-800 scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button className="px-8 py-3 border-2 border-[#3A3A3A] text-[#3A3A3A] rounded-lg font-semibold hover:bg-gray-100 transition-all">
              1
            </button>
            <button
              onClick={() => {
                 if (!selectedSize || !selectedColor) {
                  alert("Please select size and color before adding to cart.");
                  return;
                }
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: mainImage,
                  size: selectedSize,
                  color: selectedColor,
                  quantity: 1,
                })
               }
              }
              className="flex-1 px-8 py-3 bg-[#B88E2F] text-white rounded-lg font-semibold hover:bg-[#a07b26] transition-all duration-200"
            >
              Add To Cart
            </button>

            <button className="px-6 py-3 border-2 border-[#3A3A3A] text-[#3A3A3A] rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Additional product details can go below if needed */}
    </div>
  );
};

export default ProductPage;
