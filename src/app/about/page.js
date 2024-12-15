/* eslint-disable */
'use client';
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
    <div className="min-h-screen bg-gray-50">
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
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/product-4.png"
                  alt="About Us"
                  fill
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="relative w-full aspect-square mt-8">
                <Image
                  src="/images/product-5.png"
                  alt="About Us"
                  fill
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/product-6.png"
                  alt="About Us"
                  fill
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="relative w-full aspect-square mt-8">
                <Image
                  src="/images/product-7.png"
                  alt="About Us"
                  fill
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
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
                  <div className="relative w-full aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex gap-4">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <a 
                          key={platform}
                          href={link} 
                          className="text-white hover:text-indigo-300 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{platform}</span>
                          {/* Social icons remain the same */}
                        </a>
                      ))}
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
    </div>
  )
}
