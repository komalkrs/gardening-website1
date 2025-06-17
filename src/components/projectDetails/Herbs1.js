import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../projectDetail.css';

const Herbs1 = () => {
  return (
    <div className="project-detail-container fade-in">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Herbal Garden Project | Komal's Garden</title>
        <meta
          name="description"
          content="Discover our Herbal Garden setup featuring Tulsi, Mint, Coriander, and more. Perfect for kitchens and small balconies!"
        />
        <meta
          name="keywords"
          content="herbal garden, kitchen herbs, balcony garden, mint, tulsi, coriander, organic herbs, gardening project"
        />
        <meta property="og:title" content="Herbal Garden Project | Komal's Garden" />
        <meta
          property="og:description"
          content="This project includes fresh herbs like Mint, Basil, and Coriander in terracotta pots. Great for healthy, organic living!"
        />
        <meta property="og:image" content="https://yourdomain.com/herbs1.jpg" />
        <meta property="og:url" content="https://yourdomain.com/projects/herbs1" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="project-hero"
        style={{ backgroundImage: "url('/herbs1.jpg')" }}
        aria-label="Herbal Garden Setup"
      >
        <div className="project-hero-text">
          <h1 className="text-white text-shadow">Herbal Garden Setup</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-5">
        <Link to="/projects" className="btn btn-outline-success mb-4">
          ← Back to Projects
        </Link>

        <div className="row">
          {/* Content */}
          <section className="col-lg-8">
            <h2 className="mb-3">Project Overview</h2>
            <p>
              This compact herbal garden is designed for home kitchens and balconies. We planted essential herbs like Tulsi, Mint,
              Coriander, and Lemongrass in organic soil for everyday use and healthy living.
            </p>

            <h3 className="mt-4">Key Features</h3>
            <ul>
              <li>Fresh herbs for daily cooking</li>
              <li>Organically grown in terracotta pots</li>
              <li>Compact design ideal for small spaces</li>
              <li>Fragrance-rich and mosquito-repelling plants</li>
            </ul>

            <h3 className="mt-4">Care Tips</h3>
            <p>
              Water every 2 days. Place in partial sunlight. Trim regularly to promote new leaf growth. Use compost monthly for healthy roots.
            </p>
          </section>

          {/* Project Meta Info */}
          <aside className="col-lg-4">
            <div className="p-3 bg-light rounded shadow-sm">
              <h5 className="mb-3">Project Details</h5>
              <ul className="list-unstyled small">
                <li><strong>📂 Category:</strong> Herbs</li>
                <li><strong>🕒 Duration:</strong> 1 Day</li>
                <li><strong>📍 Location:</strong> Kolhapur, India</li>
                <li><strong>📅 Date:</strong> March 2025</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Herbs1;
