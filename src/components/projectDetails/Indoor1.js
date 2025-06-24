import React from 'react';
import { Link } from 'react-router-dom';
import '../projectDetail.css'; // Optional custom CSS for styling
import { Helmet } from 'react-helmet';

const Indoor1 = () => {
  return (
    <div className="project-detail-container fade-in">
      <Helmet>
        <title>Indoor Garden Setup | Green Garden Kolhapur</title>
        <meta name="description" content="Check out our Indoor Garden project — a cozy and refreshing home corner with natural indoor plants, perfect for apartment living." />
        <meta name="keywords" content="indoor plants, apartment gardening, Kolhapur indoor garden, small garden setup, house plants" />
        <meta property="og:title" content="Indoor Plant Project by Green Garden" />
        <meta property="og:description" content="We transformed an indoor space into a fresh green zone. Explore the project gallery and details." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/indoor1.webp" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/projects/indoor1" />
      </Helmet>

      {/* Hero Image with Title */}
      <div className="project-hero" style={{ backgroundImage: "url('/images/indoor5.webp')" }}>
        <div className="project-hero-text">
          <h1>Indoor Plant Setup</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <Link to="/projects" className="btn btn-outline-success mb-4">← Back to Projects</Link>

        <div className="row">
          <div className="col-lg-8">
            <h2 className="mb-3">Project Overview</h2>
            <p>
              This indoor plant setup is ideal for small apartments and low-light areas. We used low-maintenance plants like
              Snake Plant, Pothos, and ZZ Plant to create a calming, green corner.
            </p>

            <h3 className="mt-4">Key Features</h3>
            <ul>
              <li>Low-maintenance indoor plants</li>
              <li>Air-purifying and aesthetic</li>
              <li>Decorative ceramic pots</li>
              <li>Natural wooden stand for vertical spacing</li>
            </ul>

            <h3 className="mt-4">Care Tips</h3>
            <p>
              Place near indirect sunlight. Water once a week. Use well-draining potting soil. Clean leaves monthly to avoid dust buildup.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="p-3 bg-light rounded shadow-sm">
              <h5>Project Details</h5>
              <ul className="list-unstyled">
                <li><strong>Category:</strong> Indoor</li>
                <li><strong>Duration:</strong> 2 Days</li>
                <li><strong>Location:</strong> Pune, India</li>
                <li><strong>Date:</strong> May 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indoor1;
