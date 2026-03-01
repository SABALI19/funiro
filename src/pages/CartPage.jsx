import { Navigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Promise from "../components/Promise";
import { useCart } from "../hooks/useCart";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartSubtotal } = useCart();

  const navigate = useNavigate(); //to navigate to checkout page

  // Debug: Check what's in the cart
  console.log("Cart contents:", cart);
  console.log("Cart length:", cart.length);

  return (
    <div>
      <div className="w-full">
        <HeroSection heroHeading="Cart" heroTitle="Cart" />
      </div>
      
      <div className="container mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          {/* LEFT CART ITEMS TABLE */}
          <div className="flex-1">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden sm:grid sm:grid-cols-4 bg-[#FFF6E9] p-4 font-semibold text-gray-600">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/* Mobile Header */}
            <div className="sm:hidden bg-[#FFF6E9] p-4 font-semibold text-gray-600 text-center mb-4 rounded-lg">
              <p>Your Cart Items ({cart.length})</p>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12 border-b">
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some products to see them here</p>
              </div>
            ) : (
              cart.map((item, index) => {
                console.log("Rendering item:", item);
                return (
                  <div key={`${item.id}-${index}`} className="border-b last:border-b-0">
                    
                    {/* Desktop View */}
                    <div className="hidden sm:grid sm:grid-cols-4 items-center py-4 sm:py-6">
                      {/* Product Box */}
                      <div className="flex gap-4 items-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover" 
                        />
                        <div>
                          <p className="font-medium text-sm sm:text-base">{item.name}</p>
                          {(item.color || item.size) && (
                            <div className="flex gap-2 mt-1">
                              {item.color && (
                                <span className="text-xs text-gray-500">Color: {item.color}</span>
                              )}
                              {item.size && (
                                <span className="text-xs text-gray-500">Size: {item.size}</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base">${typeof item.price === 'number' ? item.price.toLocaleString() : '0'}</p>

                      {/* Quantity Input */}
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity || 1}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value) || 1;
                            console.log("Updating quantity:", item.id, newQuantity);
                            updateQuantity(item.id, item.color, item.size, newQuantity);
                          }}
                          className="w-16 sm:w-20 border border-gray-300 px-2 py-1 sm:py-2 rounded text-sm sm:text-base"
                        />
                      </div>

                      <div className="flex items-center gap-3 justify-between">
                        <p className="font-semibold text-sm sm:text-base">
                          ${((item.price || 0) * (item.quantity || 1)).toLocaleString()}
                        </p>
                        <Trash2
                          size={18}
                          className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                          onClick={() => {
                            console.log("Removing item:", item.id, item.color, item.size);
                            removeFromCart(item.id, item.color, item.size);
                          }}
                        />
                      </div>
                    </div>

                    {/* Mobile View */}
                    <div className="sm:hidden p-4 bg-white rounded-lg border mb-4">
                      <div className="flex gap-4 items-start">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 rounded-md object-cover shrink-0" 
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm mb-1">{item.name}</p>
                          
                          {/* Variant Info */}
                          {(item.color || item.size) && (
                            <div className="flex flex-wrap gap-2 mb-2">
                              {item.color && (
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                  Color: {item.color}
                                </span>
                              )}
                              {item.size && (
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                  Size: {item.size}
                                </span>
                              )}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-semibold text-sm">
                              ${typeof item.price === 'number' ? item.price.toLocaleString() : '0'}
                            </p>
                            <p className="font-bold text-[#B88E2F]">
                              ${((item.price || 0) * (item.quantity || 1)).toLocaleString()}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-600">Qty:</span>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity || 0}
                                onChange={(e) => {
                                  const newQuantity = parseInt(e.target.value) || 1;
                                  updateQuantity(item.id, item.color, item.size, newQuantity);
                                }}
                                className="w-16 border border-gray-300 px-2 py-1 rounded text-sm"
                              />
                            </div>
                            <Trash2
                              size={16}
                              className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                              onClick={() => removeFromCart(item.id, item.color, item.size)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT BOX CART TOTAL */}
          <div className="w-full lg:w-80 bg-[#FFF6E9] p-6 sm:p-8 rounded-lg h-fit sticky top-4">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Cart Totals</h2>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-1">
                <p className="text-sm sm:text-base">Subtotal</p>
                <p className="text-sm sm:text-base">${cartSubtotal.toLocaleString()}</p>
              </div>

              <div className="flex justify-between items-center py-1 font-semibold border-t border-gray-300 pt-3 sm:pt-4">
                <p className="text-base sm:text-lg">Total</p>
                <p className="text-[#B88E2F] text-base sm:text-lg">
                  ${cartSubtotal.toLocaleString()}
                </p>
              </div>
            </div>

            <button 
              className={`w-full border border-gray-800 mt-4 sm:mt-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                cart.length === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:text-white'
              }`}
              disabled={cart.length === 0}
              onClick={() =>{
                if (cart.length > 0) navigate('/checkout')
              }}
            >
              
              {cart.length === 0 ? 'Cart is Empty' : 'Check Out'}
            </button>

            {/* Continue Shopping Link */}
            <button className="w-full text-center text-gray-600 mt-3 hover:text-[#B88E2F] transition-colors text-sm sm:text-base">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <div>
        <Promise/>
      </div>
      
      
    </div>
  );
};

export default CartPage;