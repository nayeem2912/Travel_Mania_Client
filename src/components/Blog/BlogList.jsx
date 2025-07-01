import React from 'react';
import { Link } from 'react-router';

const blogs = [
  {
    id: 1,
    title: "Top 5 Places to Visit in Bangladesh",
    excerpt: "Explore the must-see destinations of Bangladesh including Sajek, Cox’s Bazar, and more...",
    content: `
Top 5 Places to Visit in Bangladesh

1. **Sajek Valley** – Known as the queen of hills, Sajek is a peaceful retreat with stunning sunsets.
2. **Cox’s Bazar** – The longest sandy beach in the world and perfect for a beach vacation.
3. **Bandarban** – Hills, tribal life, and nature’s purest beauty.
4. **Sylhet Tea Gardens** – Endless green landscapes and natural falls.
5. **Sundarbans** – The largest mangrove forest and home to the Royal Bengal Tiger.

Travel through these beautiful locations for the experience of a lifetime.`,
    image: "https://i.ibb.co/tpMMjmXX/images-1.jpg",
  },
  {
    id: 2,
    title: "Travel Packing Checklist for Tour",
    excerpt: "Don’t forget these essentials before heading out. A complete list for smart travelers!",
    content: `
Travel Packing Checklist for Tour

- Clothes  (weather-appropriate)
- Toiletries (toothbrush, soap, sanitizer)
- Chargers & power banks
- Lightweight backpack
- First aid kit
- Valid ID, booking documents

Travel light but smart! Avoid overpacking and focus on comfort.`,
    image: "https://i.ibb.co/gFH9KDTY/large-The-Ultimate-Packing-List-feature-image-778ccfa441.webp",
  },
  {
    id: 3,
    title: "Best Time to Visit Cox’s Bazar",
    excerpt: "Wondering when to enjoy Cox’s Bazar at its best? Here’s our seasonal guide.",
    content: `
 Best Time to Visit Cox’s Bazar

- **Winter (November to February)**: Best weather, calm sea, less humidity.
- **Spring (March-April)**: Warm and sunny, great for swimming.
- **Monsoon (June-August)**: Scenic clouds and rain, but beach activities limited.

So plan your trip accordingly for the best experience!`,
    image: "https://i.ibb.co/8DsM27NX/pexels-m-shahin7255-286672485-25288251.jpg",
  },
];


const BlogList = () => {
    return (
        <section className="px-6 py-16 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-500">Travel Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-xl shadow hover:shadow-md border bg-white">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="btn btn-sm text-black btn-outline hover:bg-blue-500 hover:text-white "
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default BlogList;