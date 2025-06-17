import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../Gallery.css';

const images = [
  { src: '/indoor1.webp', alt: 'Indoor Plant Setup', category: 'Indoor' },
  { src: '/herbs1.webp', alt: 'Herb Garden', category: 'Herbs' },
  { src: '/indoor2.webp', alt: 'Indoor Plant Setup', category: 'Indoor' },
  { src: '/outdoor2.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/indoor3.webp', alt: 'Succulent Pots', category: 'Indoor' },
  { src: '/outdoor3.webp', alt: 'Vertical Garden', category: 'Outdoor' },
  { src: '/indoor4.webp', alt: 'Indoor Plant Setup', category: 'Indoor' },
  { src: '/outdoor4.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/herbs2.webp', alt: 'Kitchen Herbs', category: 'Herbs' },
  { src: '/outdoor5.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/herbs3.webp', alt: 'Herb Garden', category: 'Herbs' },
  { src: '/outdoor1.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/herbs4.webp', alt: 'Herb Garden', category: 'Herbs' },
  { src: '/living-room.jpg', alt: 'Indoor Plant', category: 'Indoor' },
  { src: '/indoor5.webp', alt: 'Indoor Plant Setup', category: 'Indoor' }
];

const categories = ['All', 'Indoor', 'Outdoor', 'Herbs'];

const GallerySection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Gallery | Komal's Garden</title>
        <meta
          name="description"
          content="Explore Komal's Garden gallery featuring stunning indoor plants, outdoor landscaping, and herb gardens. See how we bring green to life!"
        />
        <meta
          name="keywords"
          content="garden gallery, indoor plants, herb garden, backyard landscaping, vertical garden, plant collection"
        />
        <meta property="og:title" content="Gallery | Komal's Garden" />
        <meta property="og:description" content="A visual tour of our indoor, outdoor, and herb gardening creations. Discover inspiration for your green space." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://komalsgarden.in/gallery" />
        <meta property="og:image" content="https://komalsgarden.in/images/gallery-preview.webp" />
      </Helmet>

      <section className="py-5 bg-light fade-in" id="gallery">
        <div className="container text-center">
          <h2 className="mb-4">Our Garden Gallery</h2>

          {/* Filter Buttons */}
          <div className="mb-4">
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn btn-outline-success mx-1 ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Image Grid */}
          <div className="gallery-grid">
            {filteredImages.map((img, idx) => (
              <div
                className="gallery-img-wrapper animate__animated animate__fadeInUp"
                key={idx}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="gallery-img" />
                <div className="overlay-caption">{img.alt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div className="modal show d-block" tabIndex="-1" onClick={() => setSelectedImage(null)}>
            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-body p-0">
                  <img src={selectedImage.src} alt={selectedImage.alt} className="img-fluid w-100" />
                  <p className="text-center mt-2">{selectedImage.alt}</p>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3"
                  onClick={() => setSelectedImage(null)}
                ></button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default GallerySection;
