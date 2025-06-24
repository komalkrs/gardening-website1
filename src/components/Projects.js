import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import BeforeAfterGallery from './BeforeAfterGallery';

const projectImages = [
  { src: '/images/indoor-plant.webp', alt: 'Indoor plant shelf arrangement', category: 'Indoor', link: '/projects/indoor1' },
  { src: '/images/img2.webp', alt: 'Outdoor garden landscape with flowering plants', category: 'Outdoor', link: '/projects/outdoor1' },
  { src: '/images/balcony-herbal-garden.webp', alt: 'Balcony herbal garden setup', category: 'Herbs', link: '/projects/herbs1' },
  { src: '/images/living-room.webp', alt: 'Living room succulent setup', category: 'Indoor', link: '/projects/indoor1' },
  { src: '/images/img5.webp', alt: 'Terrace garden herbs', category: 'Herbs', link: '/projects/herbs1' },
  { src: '/images/image6.webp', alt: 'Lawn landscape makeover', category: 'Outdoor', link: '/projects/outdoor1' },
];

const categories = ['All', 'Indoor', 'Outdoor', 'Herbs'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    filter === 'All'
      ? projectImages
      : projectImages.filter((img) => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects | Our Gardening Work | Green Garden</title>
        <meta name="description" content="View our completed gardening and landscaping projects across Kolhapur." />
        <meta name="keywords" content="gardening projects, landscaping samples, Kolhapur gardens" />
        <meta property="og:title" content="Green Garden Projects" />
        <meta property="og:description" content="See how we’ve transformed outdoor and indoor spaces with our expert gardening work." />
        <meta property="og:url" content="https://green-garden-website.vercel.app/projects" />
      </Helmet>


      <div className="container mt-5 fade-in" id="projects">
        <h2 className="mb-4 text-center">Our Work</h2>

        {/* Filter Buttons */}
        <div className="mb-4 text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-success mx-1 ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="row">
          {filteredImages.map((img, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              onClick={() => setSelectedImage(img)}
              style={{ cursor: 'pointer' }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="img-fluid rounded shadow-sm" style={{
                width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px'
              }} />
              <div className="text-center mt-2">
                <p>{img.alt}</p>
                <a href={img.link} className="btn btn-sm btn-success mt-1">
                  View Full Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BeforeAfterGallery />
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-body p-5">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="img-fluid w-70 rounded"
                  loading="lazy"
                />
                <p className="text-center my-3">{selectedImage.alt}</p>
                <div className="text-center mb-3">
                  <a href={selectedImage.link} className="btn btn-success">
                    View Full Project
                  </a>
                </div>
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
    </>
  );
};

export default Projects;
