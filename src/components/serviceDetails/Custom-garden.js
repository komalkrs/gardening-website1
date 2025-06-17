import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CustomGardenDesignPage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Custom Garden Design | Komal's Garden</title>
        <meta
          name="description"
          content="Unique garden designs tailored for your space, lifestyle, and environment using eco-friendly solutions."
        />
        <meta
          name="keywords"
          content="custom garden design, vertical garden, eco-friendly garden"
        />
        <meta property="og:title" content="Custom Garden Design | Komal's Garden" />
        <meta property="og:description" content="We offer vertical gardens, layout consultations, and drip irrigation design based on your space." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/custom-garden-design" />
        <meta property="og:image" content="https://yourdomain.com/images/service4.jpg" />
      </Helmet>

      <div className="text-center mb-4">
        <h1 className="display-5">Custom Garden Design</h1>
        <p className="lead">Beautiful gardens crafted just for you!</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/custom-garden.jpg"
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
