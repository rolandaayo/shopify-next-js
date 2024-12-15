/* eslint-disable */
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  const stats = [
    { number: "10K+", text: "Happy Customers" },
    { number: "5K+", text: "Products Available" },
    { number: "15+", text: "Years Experience" },
    { number: "50+", text: "Brand Partners" },
  ];

  const teamMembers = [
    { 
      name: "John Smith", 
      role: "CEO & Founder",
      image: "/images/product-1.png",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    { 
      name: "Sarah Johnson", 
      role: "Creative Director",
      image: "/images/product-2.png",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    { 
      name: "Michael Brown", 
      role: "Head of Design",
      image: "/images/product-3.png",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#a6b1d8] to-[#b8c1e3] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="hero-title text-4xl md:text-6xl font-bold text-indigo-900">
                Our Story
              </h1>
              <p className="body-text text-lg md:text-xl text-gray-700 leading-relaxed">
                Founded in 2010, Shopify has grown from a small boutique to a leading fashion destination. 
                We believe in quality, style, and sustainability.
              </p>
              <div className="flex gap-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contact Us
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image
                src="/images/product-4.png"
                alt="About Us"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/images/product-5.png"
                alt="About Us"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 mt-8"
              />
              <Image
                src="/images/product-6.png"
                alt="About Us"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/images/product-7.png"
                alt="About Us"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h2 className="price-text text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </h2>
                <p className="text-gray-600 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="hero-title text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white p-8">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex gap-4">
                      <a href={member.social.twitter} className="text-white hover:text-indigo-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                      <a href={member.social.linkedin} className="text-white hover:text-indigo-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href={member.social.instagram} className="text-white hover:text-indigo-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
