import React from 'react'

export default function Footer() {
  return (
    <div>
        
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                  <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                  <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                  <li><a href="#" className="hover:text-gray-300">Press</a></li>
                </ul>
              </div>
        
              {/* Shop */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Shop</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">All Products</a></li>
                  <li><a href="#" className="hover:text-gray-300">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-gray-300">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-gray-300">Discounts</a></li>
                </ul>
              </div>
        
              {/* Support */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                  <li><a href="#" className="hover:text-gray-300">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-gray-300">Returns</a></li>
                  <li><a href="#" className="hover:text-gray-300">Order Status</a></li>
                </ul>
              </div>
        
              {/* Newsletter */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                <p className="mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full rounded-lg sm:rounded-r-none text-gray-900"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-lg sm:rounded-l-none hover:bg-blue-700 w-full sm:w-auto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
        
            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <p>© 2024 Your Store. All rights reserved.</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-300">Terms of Service</a>
                  <a href="#" className="hover:text-gray-300">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
    </div>
  )
}