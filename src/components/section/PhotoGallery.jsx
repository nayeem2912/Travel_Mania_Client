import React, { useState } from 'react';

const images = [
  {
    id: 1,
    src: 'https://via.placeholder.com/600x400?text=Travel+1',
    alt: 'Travel Image 1',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/600x400?text=Travel+2',
    alt: 'Travel Image 2',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/600x400?text=Travel+3',
    alt: 'Travel Image 3',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/600x400?text=Travel+4',
    alt: 'Travel Image 4',
  },
  {
    id: 5,
    src: 'https://via.placeholder.com/600x400?text=Travel+5',
    alt: 'Travel Image 5',
  },
  {
    id: 6,
    src: 'https://via.placeholder.com/600x400?text=Travel+6',
    alt: 'Travel Image 6',
  },
  {
    id: 7,
    src: 'https://via.placeholder.com/600x400?text=Travel+7',
    alt: 'Travel Image 7',
  },
  {
    id: 8,
    src: 'https://via.placeholder.com/600x400?text=Travel+8',
    alt: 'Travel Image 8',
  },
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Moments</h2>
        <p className="text-gray-600">
          Explore beautiful travel memories captured from around the world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg"
            onClick={() => openModal(index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full p-2"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full p-3"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full p-3"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
