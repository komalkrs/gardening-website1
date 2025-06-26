import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../Gallery.css';

const images = [
  { src: '/images/indoor1.webp', alt: 'Indoor Plant Setup', category: 'Indoor' },
  { src: '/images/herbs1.webp', alt: 'Herb Garden', category: 'Herbs' },
  { src: '/images/indoor2.webp', alt: 'Indoor Plant Setup', category: 'Indoor' },
  { src: '/images/outdoor2.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/images/indoor3.webp', alt: 'Succulent Pots', category: 'Indoor' },
  { src: '/images/outdoor3.webp', alt: 'Vertical Garden', category: 'Outdoor' },
  { src: '/images/indoor4.webp', alt: 'Indoor Plant Setup', category: 'Indoor' },
  { src: '/images/outdoor4.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/images/herbs2.webp', alt: 'Kitchen Herbs', category: 'Herbs' },
  { src: '/images/outdoor5.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/images/herbs3.webp', alt: 'Herb Garden', category: 'Herbs' },
  { src: '/images/outdoor1.webp', alt: 'Backyard Landscaping', category: 'Outdoor' },
  { src: '/images/herbs4.webp', alt: 'Herb Garden', category: 'Herbs' },
  { src: '/images/living-room.webp', alt: 'Indoor Plant', category: 'Indoor' },
  { src: '/images/indoor5.webp', alt: 'Indoor Plant Setup', category: 'Indoor' }
];

const categories = ['All', 'Indoor', 'Outdoor', 'Herbs'];

const GallerySection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Project Gallery | Green Garden Works in Kolhapur</title>
        <meta name="description" content="Browse our gallery to see beautiful indoor and outdoor garden setups, landscape projects, and plant styling done by Green Garden in Kolhapur." />
        <meta name="keywords" content="garden project gallery, Kolhapur gardening, landscaping images, indoor garden, outdoor garden, before after garden" />
        <meta property="og:title" content="Project Gallery | Green Garden Kolhapur" />
        <meta property="og:description" content="Discover the transformation magic of Green Garden through our stunning photo gallery of completed garden projects." />
        <meta property="og:url" content="https://green-garden-website.vercel.app/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://green-garden-website.vercel.app/preview.jpg" />
        <link rel="canonical" href="https://green-garden-website.vercel.app/gallery" />
      </Helmet>

      <section className="py-5 bg-light fade-in" id="gallery">
        <div className="container text-center">
          <h2 className="mb-4">Our Garden Gallery</h2>

          {/* Filter Buttons */}
          <div className="mb-4 d-flex flex-wrap justify-content-center gap-2 px-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn btn-outline-success ${filter === cat ? 'active' : ''}`}
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
