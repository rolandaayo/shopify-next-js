/* eslint-disable */
"use client";
import { PaystackButton } from "react-paystack";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function PaystackConfig({ onSuccess, onClose, email }) {
  const { cartItems, totalPrice, setCartItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = (reference) => {
    setLoading(false);
    setShowSuccess(true);
    
    // Clear the cart
    setCartItems([]);
    
    // Save the order to localStorage with only necessary reference data
    const order = {
      items: cartItems,
      total: totalPrice,
      reference: reference.reference, // Only save the reference ID
      date: new Date().toISOString(),
      email: email,
      status: reference.status || 'success'
    };
    
    const previousOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...previousOrders, order]));
    
    // Wait for animation to complete before closing
    setTimeout(() => {
      onSuccess(reference.reference); // Pass only the reference ID
    }, 2000);
  };

  const componentProps = {
    email: email || "customer@example.com",
    amount: Math.round(totalPrice * 100), // Paystack amount in kobo
    metadata: {
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: cartItems.map(item => `${item.text} (${item.size}) x${item.quantity}`).join(', ')
        }
      ]
    },
    publicKey: "pk_test_dc632dcb524653128c7ffcd7f3c74cd9c2704c79",
    text: loading ? 'Processing...' : `Checkout (₦${totalPrice.toFixed(2)})`,
    onSuccess: handleSuccess,
    onClose: () => {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="w-full relative">
      {showSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10 animate-fadeIn">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-scaleIn">
              <svg 
                className="w-8 h-8 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-green-600 font-medium animate-slideUp">
              Payment Successful!
            </p>
          </div>
        </div>
      )}
      <PaystackButton
        {...componentProps}
        className={`w-full py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base font-medium
          ${loading || cartItems.length === 0 || !email || showSuccess
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
        disabled={loading || cartItems.length === 0 || !email || showSuccess}
      />
    </div>
  );
} 