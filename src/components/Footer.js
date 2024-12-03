import React from 'react'

export default function Footer() {
  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Press", href: "#" }
  ]

  const shopLinks = [
    { text: "All Products", href: "#" },
    { text: "New Arrivals", href: "#" },
    { text: "Best Sellers", href: "#" },
    { text: "Discounts", href: "#" }
  ]

  const supportLinks = [
    { text: "Help Center", href: "#" },
    { text: "Shipping Info", href: "#" },
    { text: "Returns", href: "#" },
    { text: "Order Status", href: "#" }
  ]

  const policyLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Cookie Policy", href: "#" }
  ]

  return (
    <div>
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
              {/* Company Info */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300 hover:shadow-xl p-6 rounded-xl backdrop-blur-sm bg-gray-800/30">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-400/30 pb-2">Company</h3>
                <ul className="space-y-4">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-blue-400 transition duration-300 flex items-center gap-2 hover:translate-x-2">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shop */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300 hover:shadow-xl p-6 rounded-xl backdrop-blur-sm bg-gray-800/30">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-400/30 pb-2">Shop</h3>
                <ul className="space-y-4">
                  {shopLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-blue-400 transition duration-300 flex items-center gap-2 hover:translate-x-2">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300 hover:shadow-xl p-6 rounded-xl backdrop-blur-sm bg-gray-800/30">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-400/30 pb-2">Support</h3>
                <ul className="space-y-4">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-blue-400 transition duration-300 flex items-center gap-2 hover:translate-x-2">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="text-center sm:text-left transform hover:scale-105 transition duration-300 hover:shadow-xl p-6 rounded-xl backdrop-blur-sm bg-gray-800/30">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-400/30 pb-2">Stay Connected</h3>
                <p className="mb-6 text-gray-300">Subscribe to our newsletter for updates and exclusive offers.</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 w-full rounded-lg sm:rounded-r-none text-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 border-2 border-transparent focus:border-blue-400"
                  />
                  <button className="bg-blue-500 px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-blue-600 w-full sm:w-auto transition duration-300 transform hover:scale-105 font-semibold hover:shadow-lg hover:shadow-blue-500/50">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700/50 mt-16 pt-10">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 hover:text-gray-300 transition duration-300">© 2024 Your Store. All rights reserved.</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
                  {policyLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:text-blue-400 transition duration-300 hover:underline">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}