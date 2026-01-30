import { useParams, useLocation, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const { orderData, emailSent } = location.state || {};
  
  // If no state, try to load from localStorage
  const savedOrders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  const order = orderData || savedOrders.find(o => o.orderId === orderId);

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
        <Link to="/" className="text-[#B88E2F] underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <HeroSection heroHeading="Order Confirmed" />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-green-500 text-6xl mb-6">✓</div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          
          {emailSent && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-700 font-medium">
                ✅ Confirmation email sent to: {order.customerEmail}
              </p>
              <p className="text-green-600 text-sm mt-1">
                Please check your inbox (and spam folder)
              </p>
            </div>
          )}

          <div className="bg-[#FFF6E9] rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p><strong>Order ID:</strong> {order.orderId}</p>
                <p><strong>Date:</strong> {order.orderDate}</p>
                <p><strong>Customer:</strong> {order.customerName}</p>
              </div>
              <div>
                <p><strong>Email:</strong> {order.customerEmail}</p>
                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <p className="font-medium">Email Confirmation</p>
                <p className="text-sm text-gray-600">Check your email for order details</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl mb-2">📦</div>
                <p className="font-medium">Order Processing</p>
                <p className="text-sm text-gray-600">We'll prepare your items (1-2 days)</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl mb-2">🚚</div>
                <p className="font-medium">Shipping Update</p>
                <p className="text-sm text-gray-600">You'll get tracking info via email</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#a07b26] transition-all"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              Print Receipt
            </button>
            <Link
              to={`/order/${orderId}`}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              View Order Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;