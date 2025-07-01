import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Sajek Valley',
    description: 'Experience the clouds and tribal beauty of Sajek.',
    image: 'https://i.ibb.co/JXh3bg1/photo-1658383895221-173f07c6a9d0.jpg',
  },
  {
    id: 2,
    name: 'Cox’s Bazar',
    description: 'Walk along the world’s longest natural sea beach.',
    image: 'https://i.ibb.co/8DsM27NX/pexels-m-shahin7255-286672485-25288251.jpg',
  },
  {
    id: 3,
    name: 'Bandarban',
    description: 'Explore the hills, waterfalls, and tribal lifestyle.',
    image: 'https://i.ibb.co/BxnJ55k/download-21.jpg',
  },
  {
    id: 4,
    name: 'Saint Martin',
    description: 'A beautiful coral island in the Bay of Bengal.',
    image: 'https://i.ibb.co/35Hr91DY/download-22.jpg',
  },
  {
    id: 5,
    name: 'Sundarbans',
    description: 'Discover the mangrove forest and Royal Bengal Tigers.',
    image: 'https://i.ibb.co/TBrVQfmx/download-23.jpg',
  },
  {
    id: 6,
    name: 'Sylhet',
    description: 'Tea gardens, rivers and green countryside.',
    image: 'https://i.ibb.co/cXSSvnrk/download-24.jpg',
  },
  {
    id: 7,
    name: 'Pokhara, Nepal',
    description: 'A city of lakes and mountains in the Himalayas.',
    image: 'https://i.ibb.co/nsvVymXs/download-25.jpg',
  },
  {
    id: 8,
    name: 'Phuket, Thailand',
    description: 'White sand beaches and lively nightlife.',
    image: 'https://i.ibb.co/C5trFRzN/download-26.jpg',
  },
];

const TopDestinations = () => {
  return (
    <section className="py-10 px-4 w-11/12 mx-auto ">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
        <p className="">
          Discover breathtaking places that travelers love. From sea beaches to hill tracks, pick your perfect escape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-800 gap-6 max-w-7xl mx-auto">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition-all group"
            data-aos="fade-up"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
