import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 px-6 ">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/vx9CtSc6/photo-1608958435020-e8a7109ba809.jpg"
            alt="About Travel Mania"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-4xl font-bold text-blue-500">About Travel Mania</h2>
          <p className="text-lg ">
            Travel Mania is your ultimate travel partner, dedicated to turning your vacation dreams into reality. From exotic beaches to breathtaking hills, we connect you with unforgettable experiences around the world.
          </p>
          <p className="">
            With expert guides, affordable packages, and 24/7 customer service, we ensure your journey is safe, smooth, and memorable.
          </p>
        </div>
      </div>

      {/* Mission and Experience */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-500">🌍 Our Mission</h3>
          <p className="text-gray-600">To inspire and enable people to explore the world with ease, excitement, and affordability.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-500">🚀 Our Vision</h3>
          <p className="text-gray-600">Becoming the most trusted travel platform in Bangladesh and beyond by 2030.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-500">⏳ Our Experience</h3>
          <p className="text-gray-600">Over 5 years of industry experience with 500+ successful tours and thousands of happy travelers.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl  text-gray-800 mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">Why Choose Travel Mania?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            '✅ Trusted & Verified Guides',
            '✅ Affordable Tour Packages',
            '✅ 24/7 Customer Support',
            '✅ Fast & Easy Booking',
            '✅ Safe Travel Guarantee',
            '✅ Flexible Cancellation Policy',
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
