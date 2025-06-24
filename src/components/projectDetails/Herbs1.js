import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../projectDetail.css';

const Herbs1 = () => {
  return (
    <div className="project-detail-container fade-in">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Herbal Garden Project | Green Garden Kolhapur</title>
        <meta name="description" content="Explore our Herbal Garden project — a curated selection of medicinal and aromatic plants designed for home gardens in Kolhapur." />
        <meta name="keywords" content="herbal garden, herbs project Kolhapur, medicinal plants, garden herbs, Green Garden" />
        <meta property="og:title" content="Herbal Garden Project by Green Garden" />
        <meta property="og:description" content="Custom-designed herbal garden for a healthy lifestyle — check our Kolhapur client’s transformation." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/herbs1.webp" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/projects/herbs1" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      {/* Hero Section */}
      <div
        className="project-hero"
        style={{ backgroundImage: "url('/images/herbs1.webp')" }}
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
