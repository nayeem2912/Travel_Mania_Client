import React from 'react';
import { FaSearch, FaClipboardList, FaCreditCard, FaPlaneDeparture } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    icon: <FaSearch className="text-blue-500 w-10 h-10 mb-4" />,
    title: 'Search Packages',
    description: 'Browse tours and find your dream trip easily.',
  },
  {
    id: 2,
    icon: <FaClipboardList className="text-blue-500 w-10 h-10 mb-4" />,
    title: 'Select & Book',
    description: 'Choose the best package and book online securely.',
  },
  {
    id: 3,
    icon: <FaCreditCard className="text-blue-500 w-10 h-10 mb-4" />,
    title: 'Make Payment',
    description: 'Secure and hassle-free payment process.',
  },
  {
    id: 4,
    icon: <FaPlaneDeparture className="text-blue-500 w-10 h-10 mb-4" />,
    title: 'Enjoy Your Trip',
    description: 'Get ready and enjoy your amazing journey.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="">
          Follow these simple steps to plan and book your perfect travel experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-gray-800 gap-8">
        {steps.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
