import React from 'react';
import { FaGlobe, FaShieldAlt, FaDollarSign, FaHeadset, FaMapMarkedAlt, FaSyncAlt } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaGlobe className="text-blue-500 w-8 h-8" />,
    title: 'Global Destinations',
    description: 'Explore trips across Bangladesh and beyond',
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-blue-500 w-8 h-8" />,
    title: 'Trusted Service',
    description: '1000+ happy travelers with positive feedback',
  },
  {
    id: 3,
    icon: <FaDollarSign className="text-blue-500 w-8 h-8" />,
    title: 'Affordable Pricing',
    description: 'Best packages at unbeatable rates',
  },
  {
    id: 4,
    icon: <FaHeadset className="text-blue-500 w-8 h-8" />,
    title: '24/7 Support',
    description: 'We’re here for you anytime, anywhere',
  },
  {
    id: 5,
    icon: <FaMapMarkedAlt className="text-blue-500 w-8 h-8" />,
    title: 'Expert Guides',
    description: 'Professional tour guides for safe journeys',
  },
  {
    id: 6,
    icon: <FaSyncAlt className="text-blue-500 w-8 h-8" />,
    title: 'Easy Booking & Cancellation',
    description: 'Smooth and flexible travel experience',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 px-4 w-11/12 mx-auto ">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Travel With Us?</h2>
        <p className="">
          We provide top-notch travel experiences tailored to your needs. Discover why thousands
          trust us for their adventures.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-gray-800 gap-8">
        {features.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
