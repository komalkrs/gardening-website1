import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LawnLandscapeCarePage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Lawn & Landscape Care Services in Kolhapur | Green Garden</title>
        <meta name="description" content="Get expert lawn care and landscaping services in Kolhapur. We provide grass trimming, watering systems, seasonal plant setup, and more." />
        <meta name="keywords" content="lawn care, landscaping Kolhapur, landscape design, garden makeover, grass trimming" />
        <meta property="og:title" content="Lawn and Landscape Care by Green Garden" />
        <meta property="og:description" content="Premium lawn maintenance and landscape services to beautify your outdoor space." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/service2.webp" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/services/lawn-landscape-care" />
      </Helmet>


      <div className="text-center mb-4">
        <div className="text-start mt-4">
          <Link to="/services" className="btn btn-outline-success">
            ← Back to Services
          </Link>
        </div>
        <h1 className="display-5">Lawn & Landscape Care</h1>
        <p className="lead">Keep your garden looking its best all year round!</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/images/img6.webp"
            alt="Lawn & Landscape Care"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Our Services Include:</h3>
          <ul className="list-unstyled">
            <li>🌾 Lawn Mowing & Weed Control</li>
            <li>🌼 Seasonal Flower Planting</li>
            <li>🌳 Hedge Trimming & Shaping</li>
            <li>🪻 Garden Bed Edging & Mulching</li>
            <li>🔄 Regular Maintenance Packages</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p>Let your landscape make a lasting impression with our expert care.</p>
        <Link to="/contact" className="btn btn-success px-4 py-2">
          Book Lawn Service
        </Link>
      </div>
    </div>
  );
};

export default LawnLandscapeCarePage;
