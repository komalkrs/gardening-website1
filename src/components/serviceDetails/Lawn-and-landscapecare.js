import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LawnLandscapeCarePage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Lawn & Landscape Care | Komal's Garden</title>
        <meta
          name="description"
          content="Comprehensive lawn and landscape care including mowing, weeding, planting, and seasonal garden support."
        />
        <meta
          name="keywords"
          content="lawn care, landscape maintenance, gardening services"
        />
        <meta property="og:title" content="Lawn & Landscape Care | Komal's Garden" />
        <meta property="og:description" content="We provide lawn mowing, seasonal flower planting, hedge trimming and more for your landscape." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/lawn-landscape-care" />
        <meta property="og:image" content="https://yourdomain.com/images/service3.jpg" />
      </Helmet>

      <div className="text-center mb-4">
        <h1 className="display-5">Lawn & Landscape Care</h1>
        <p className="lead">Keep your garden looking its best all year round!</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/img6.webp"
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
