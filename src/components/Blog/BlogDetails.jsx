import React from 'react';
import { useParams } from 'react-router';
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
    title: "Travel Packing Checklist for  Tour",
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


const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find((item) => item.id === parseInt(id));
    console.log(id)

    return (
         <section className="max-w-4xl mx-auto px-6 py-20 ">
      <img src={blog.image} alt={blog.title} className="rounded-xl mb-6 w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold text-blue-500 mb-4">{blog.title}</h1>
      <article className="prose max-w-none prose-blue prose-lg">
        <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br />") }} />
      </article>
    </section>
    );
};

export default BlogDetails;