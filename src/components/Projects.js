import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const projectImages = [
  { src: '/indoor-plant.jpg', alt: 'Indoor plant shelf arrangement', category: 'Indoor', link: '/projects/indoor1' },
  { src: '/img2.webp', alt: 'Outdoor garden landscape with flowering plants', category: 'Outdoor', link: '/projects/outdoor1' },
  { src: '/balcony-herbal-garden.jpg', alt: 'Balcony herbal garden setup', category: 'Herbs', link: '/projects/herbs1' },
  { src: '/living-room.jpg', alt: 'Living room succulent setup', category: 'Indoor', link: '/projects/indoor1' },
  { src: '/img5.webp', alt: 'Terrace garden herbs', category: 'Herbs', link: '/projects/herbs1' },
  { src: '/img6.webp', alt: 'Lawn landscape makeover', category: 'Outdoor', link: '/projects/outdoor1' },
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
        <title>Our Gardening Projects | Komal's Garden</title>
        <meta
          name="description"
          content="Explore Komal's Garden project gallery including indoor decor, outdoor landscapes, and herbal gardens."
        />
        <meta
          name="keywords"
          content="garden projects, indoor plants, outdoor gardens, herbs, gardening gallery"
        />
        <meta property="og:title" content="Our Gardening Projects | Komal's Garden" />
        <meta property="og:description" content="Get inspired by Komal's completed indoor and outdoor garden setups." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://komalsgarden.in/projects" />
        <meta property="og:image" content="https://komalsgarden.in/images/projects-preview.webp" />
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
              <img src={img.src} alt={img.alt} className="img-fluid rounded shadow-sm" />
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
