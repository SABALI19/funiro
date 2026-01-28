import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import Breadcrumbs from "../components/Breadcrumbs";
import { useCart } from "../context/CartContext";
import { AlertTriangle, CheckCircle } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === parseInt(id));
  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image || ""
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'warning' or 'success'
  const [modalMessage, setModalMessage] = useState("");

  // Function to play notification sound
  const playNotificationSound = (type) => {
    // Create audio context for different notification sounds
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "success") {
      // Success sound - pleasant ascending tone
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } else {
      // Warning sound - attention-grabbing beep
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    }
  };

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

  // Handle add to cart with modal
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      // Show warning modal
      setModalType("warning");
      if (!selectedSize && !selectedColor) {
        setModalMessage("select size and color before adding to cart.");
      } else if (!selectedSize) {
        setModalMessage("select size before adding to cart.");
      } else {
        setModalMessage("select  color before adding to cart.");
      }
      setShowModal(true);
      playNotificationSound("warning"); // Play warning sound
      return;
    }

    // Add to cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: mainImage,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });

    // Show success modal
    setModalType("success");
    setModalMessage(`${product.name} has been successfully added to your cart!`);
    setShowModal(true);
    playNotificationSound("success"); // Play success sound
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
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
              onClick={handleAddToCart}
              className="flex-1 px-8 py-3 bg-[#B88E2F] text-white rounded-lg font-semibold hover:bg-[#a07b26] transition-all duration-200"
            >
              <span className="hidden sm:inline">Add To Cart</span>
              <span className="inline sm:hidden whitespace-nowrap">+ cart</span>
            </button>

            <button className="px-6 py-3 border-2 border-[#3A3A3A] text-[#3A3A3A] rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
  <div
    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
    onClick={closeModal}
  >
    <div
      className="bg-white rounded-2xl p-4 shadow-2xl animate-slideUp max-w-md w-85 mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Icon */}
      {modalType === "warning" ? (
  <AlertTriangle className="text-5xl text-orange-500 mx-auto" />
) : (
  <CheckCircle className="text-5xl text-green-500 mx-auto" />
)}

      {/* Modal Title */}
      <h2 className="text-lg font-bold text-center text-[#3A3A3A] mb-3">
        {modalType === "warning" ? "Selection Required" : "Added to Cart!"}
      </h2>

      {/* Modal Message */}
      <p className="text-center text-gray-600 text-sm mb-4">
        {modalMessage}
      </p>

      {/* Modal Button */}
      <button
        onClick={closeModal}
        className={`w-1/4 flex justify-center m-auto p-2 rounded-lg text-sm font-semibold text-white transition-all ${
          modalType === "warning"
            ? "bg-[#B88E2F] hover:bg-orange-600"
            : "bg-[#B88E2F] hover:bg-[#a07b26]"
        }`}
      >
        OK
      </button>
    </div>
  </div>
)}
      
    </div>
  );
};

export default ProductPage;