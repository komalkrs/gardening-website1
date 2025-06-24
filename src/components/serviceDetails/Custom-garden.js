import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CustomGardenDesignPage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Custom Garden Design Services in Kolhapur | Green Garden</title>
        <meta name="description" content="Want a garden that's uniquely yours? Get custom garden design services with layout planning, theme gardens, and seasonal recommendations in Kolhapur." />
        <meta name="keywords" content="custom garden design, themed gardens, garden planning, green design Kolhapur" />
        <meta property="og:title" content="Custom Garden Design by Green Garden" />
        <meta property="og:description" content="Tailored garden layouts and ideas for your space — executed with creativity and care." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/custom-garden.jpg" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/services/custom-garden" />
      </Helmet>


      <div className="text-center mb-4">
        <div className="text-start mt-4">
          <Link to="/services" className="btn btn-outline-success">
            ← Back to Services
          </Link>
        </div>
        <h1 className="display-5">Custom Garden Design</h1>
        <p className="lead">Beautiful gardens crafted just for you!</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/images/custom-garden.webp"
            alt="Custom Garden Design"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Design Features:</h3>
          <ul className="list-unstyled">
            <li>📐 Personalized Garden Layout Consultation</li>
            <li>🪴 Plant Selection Based on Light & Climate</li>
            <li>🌿 Vertical Garden & Indoor Styling</li>
            <li>💧 Water-saving Drip Irrigation Setup</li>
            <li>🌍 Eco-conscious Garden Planning</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p>Bring your dream garden to life — sustainably and beautifully!</p>
        <Link to="/contact" className="btn btn-success px-4 py-2">
          Start Your Design
        </Link>

      </div>
    </div>
  );
};

export default CustomGardenDesignPage;
