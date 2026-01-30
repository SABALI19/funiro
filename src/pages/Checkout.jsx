import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { useCart } from "../hooks/useCart";
import { sendOrderConfirmation } from "../services/EmailService"; // You'll create this

const Checkout = () => {
  const { cart, clearCart, cartSubtotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
    saveInfo: false
  });

  // Calculate shipping and total
  const shippingCost = 10.00; // Fixed shipping cost
  const totalAmount = cartSubtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Generate order ID
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      // 2. Process payment (you'll integrate your payment gateway here)
      // Example: const paymentResult = await processStripePayment(totalAmount);
      
      // 3. Send confirmation email
      const orderDate = new Date().toLocaleDateString();
      await sendOrderConfirmation({
        customerEmail: formData.email,
        customerName: `${formData.firstName} ${formData.lastName}`,
        orderId: orderId,
        orderDate: orderDate,
        totalAmount: totalAmount,
        shippingCost: shippingCost,
        subtotal: cartSubtotal,
        shippingAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`,
        phone: formData.phone,
        items: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          color: item.color || '',
          size: item.size || ''
        }))
      });

      // 4. Clear cart and show success
      clearCart();

      // 5. Navigate to order confirmation page
      const orderData = {
        orderId: orderId,
        orderDate: orderDate,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        phone: formData.phone,
        shippingAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`,
        totalAmount: totalAmount,
        items: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          color: item.color || '',
          size: item.size || ''
        }))
      };

      navigate(`/order-confirmation/${orderId}`, {
        state: { orderData: orderData, emailSent: true }
      });

    } catch (error) {
      console.error('Checkout error:', error);
      alert('Payment processed but failed to send confirmation email. Please save your order number.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeroSection heroHeading="Checkout" />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          
          {/* Billing Details Section */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Country / Region *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Street Address *</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  placeholder="House number and street name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F] mb-2"
                  required
                />
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Town / City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Order Notes (Optional)</label>
                <textarea
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F] resize-none"
                />
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#B88E2F] border-gray-300 rounded focus:ring-[#B88E2F]"
                />
                <label htmlFor="saveInfo" className="ml-2 text-sm">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3">
            <div className="bg-[#FFF6E9] p-6 rounded-lg sticky top-4">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-xl font-bold text-[#B88E2F]">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="font-bold mb-3">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="bank" className="mr-3" defaultChecked />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="cash" className="mr-3" />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="paypal" className="mr-3" />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className="text-sm">
                    I have read and agree to the website <a href="/terms" className="text-[#B88E2F] underline">terms and conditions</a> *
                  </span>
                </label>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={loading || cart.length === 0}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  loading || cart.length === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#B88E2F] hover:bg-[#a07b26]'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : cart.length === 0 ? (
                  'Cart is Empty'
                ) : (
                  'Place Order'
                )}
              </button>

              {/* Back to Cart Link */}
              <button
                type="button"
                onClick={() => window.history.back()}
                className="w-full text-center text-gray-600 mt-4 hover:text-[#B88E2F] transition-colors"
              >
                ← Back to Cart
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;