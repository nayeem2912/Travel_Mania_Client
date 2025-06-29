import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <section className="min-h-screen py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            Have a question or ready to plan your next adventure? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>+880 1575-162723</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p>support@travelmania.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p>Banani, Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Optional: Google Map placeholder */}
            <div className="mt-8">
              <iframe
                title="Google Map"
                className="w-full h-64 rounded-md"
                src="https://maps.google.com/maps?q=banani%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-gray-50 p-6 rounded-xl shadow-md space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
