import React from 'react'

export default function Footer() {
  return (
    <div>
        
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Press</a></li>
                </ul>
              </div>
        
              {/* Shop */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Shop</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">All Products</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Discounts</a></li>
                </ul>
              </div>
        
              {/* Support */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Returns</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition duration-300">Order Status</a></li>
                </ul>
              </div>
        
              {/* Newsletter */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Stay Connected</h3>
                <p className="mb-6 text-gray-300">Subscribe to our newsletter for updates and exclusive offers.</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 w-full rounded-lg sm:rounded-r-none text-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                  />
                  <button className="bg-blue-500 px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-blue-600 w-full sm:w-auto transition duration-300 transform hover:scale-105 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
        
            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-16 pt-10">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <p className="text-gray-400">© 2024 Your Store. All rights reserved.</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
                  <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                  <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                  <a href="#" className="hover:text-blue-400 transition duration-300">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
    </div>
  )
}