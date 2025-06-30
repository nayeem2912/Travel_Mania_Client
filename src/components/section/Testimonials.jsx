import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Khan',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    review:
      'Amazing experience! The tour was well-organized and the guides were super friendly. Highly recommend Travel Mania!',
  },
  {
    id: 2,
    name: 'Rafiq Ahmed',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review:
      'Great customer support and beautiful destinations. Booking was easy and hassle-free. Will travel again!',
  },
  {
    id: 3,
    name: 'Mina Islam',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 4,
    review:
      'Loved the trip to Bandarban. Comfortable stay and excellent arrangements. A memorable journey indeed!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 px-4  ">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
        <p className="">
          Hear from our happy customers who have explored the world with us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-gray-800 gap-8">
        {testimonials.map(({ id, name, photo, rating, review }) => (
          <div
            key={id}
            className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            <img
              src={photo}
              alt={name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <div className="flex mb-3 text-yellow-400">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600">{review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
