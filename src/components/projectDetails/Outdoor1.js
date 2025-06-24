import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../projectDetail.css';

const Outdoor1 = () => {
  return (
    <div className="project-detail-container fade-in">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Outdoor Landscaping Project | Green Garden Kolhapur</title>
        <meta name="description" content="View our Outdoor Landscaping project — a complete makeover with lawn, decorative plants, and eco-friendly layout for a bungalow in Kolhapur." />
        <meta name="keywords" content="outdoor gardening, landscape design Kolhapur, garden makeover, lawn setup" />
        <meta property="og:title" content="Outdoor Garden Project - Green Garden" />
        <meta property="og:description" content="We designed a stunning outdoor garden with functional and beautiful landscaping for our client." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/outdoor1.webp" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/projects/outdoor1" />
      </Helmet>


      {/* Hero Section */}
      <div
        className="project-hero"
        style={{ backgroundImage: "url('/images/img4.webp')" }}
        aria-label="Outdoor Garden Design"
      >
        <div className="project-hero-text">
          <h1 className="text-white text-shadow">Outdoor Garden Design</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-5">
        <Link to="/projects" className="btn btn-outline-success mb-4">
          ← Back to Projects
        </Link>

        <div className="row">
          {/* Left Content */}
          <section className="col-lg-8">
            <h2 className="mb-3">Project Overview</h2>
            <p>
              This outdoor garden setup brings life and color to entrance spaces, balconies, and front yards. A mix of seasonal flowers,
              tall greens, and ornamental shrubs make this a vibrant, welcoming space for any home.
            </p>

            <h3 className="mt-4">Key Features</h3>
            <ul>
              <li>Colorful seasonal flowering plants (Marigold, Petunia, Dianthus)</li>
              <li>Eco-friendly terracotta and ceramic pots</li>
              <li>Hand-trimmed hedges for structure and flow</li>
              <li>Natural compost and drip irrigation used</li>
            </ul>

            <h3 className="mt-4">Care Tips</h3>
            <p>
              Ensure 5–6 hours of daily sunlight. Water early in the morning. Use compost every 15 days. Trim and remove dead flowers
              regularly to encourage new blooms.
            </p>
          </section>

          {/* Project Metadata */}
          <aside className="col-lg-4">
            <div className="p-3 bg-light rounded shadow-sm">
              <h5 className="mb-3">Project Details</h5>
              <ul className="list-unstyled small">
                <li><strong>📂 Category:</strong> Outdoor</li>
                <li><strong>🕒 Duration:</strong> 3 Days</li>
                <li><strong>📍 Location:</strong> Madangad Landscape,Kolhapur, India</li>
                <li><strong>📅 Date:</strong> April 2025</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Outdoor1;
