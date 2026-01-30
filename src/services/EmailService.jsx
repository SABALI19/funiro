import emailjs from 'emailjs-com';

const initEmailJS = () => {
  if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS Public Key is missing');
    return false;
  }
  
  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('✅ EmailJS initialized');
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

initEmailJS();

export const sendOrderConfirmation = async (orderData) => {
  try {
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
      throw new Error('EmailJS configuration missing');
    }

    // Format items as HTML
    const itemsHTML = orderData.items.map(item => `
      <div class="item-row">
        <span>${item.name} ${item.color ? `(${item.color})` : ''} ${item.size ? `- Size: ${item.size}` : ''} x ${item.quantity}</span>
        <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');

    // ALL template parameters matching your EmailJS dashboard variables
    const templateParams = {
      customer_name: orderData.customerName,
      order_id: orderData.orderId,
      order_date: orderData.orderDate,
      customer_email: orderData.customerEmail,
      shipping_address: orderData.shippingAddress,
      items: itemsHTML,
      subtotal: `$${orderData.subtotal.toFixed(2)}`,
      shipping_cost: `$${orderData.shippingCost.toFixed(2)}`,
      total_amount: `$${orderData.totalAmount.toFixed(2)}`,
      email: orderData.customerEmail  // Added this - it's the recipient email
    };

    console.log('📧 Sending email with all required params:', templateParams);

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Email sent successfully!', response);
    return { success: true, status: response.status };
    
  } catch (error) {
    console.error('❌ Email Error Details:', error);
    console.error('Status:', error.status);
    console.error('Text:', error.text);
    throw new Error(`Failed to send email: ${error.text || error.message}`);
  }
};

export const testEmailConnection = async () => {
  try {
    const testData = {
      customerName: 'Test Customer',
      customerEmail: 'test@example.com',
      orderId: 'TEST-12345',
      orderDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      shippingAddress: '123 Test St, Test City, TC 12345, USA',
      items: [
        {
          name: 'Test Product',
          quantity: 2,
          price: 19.99,
          color: 'Blue',
          size: 'M'
        }
      ],
      subtotal: 39.98,
      shippingCost: 4.99,
      totalAmount: 44.97
    };
    
    return await sendOrderConfirmation(testData);
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
};