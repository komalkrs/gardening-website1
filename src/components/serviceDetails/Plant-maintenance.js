import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PlantMaintenancePage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Plant Maintenance Services in Kolhapur | Green Garden</title>
        <meta name="description" content="Keep your plants healthy and vibrant with our plant maintenance services. We offer trimming, repotting, pest control, and watering routines in Kolhapur." />
        <meta name="keywords" content="plant maintenance, gardening service Kolhapur, repotting plants, trimming, pest control" />
        <meta property="og:title" content="Plant Maintenance by Green Garden" />
        <meta property="og:description" content="Regular plant care and maintenance service for homes and offices in Kolhapur." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/plant-maintenance.webp" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/services/plant-maintenance" />
      </Helmet>


      <div className="text-center mb-4">
        <div className="text-start mt-4">
          <Link to="/services" className="btn btn-outline-success">
            ← Back to Services
          </Link>
        </div>
        <h1 className="display-5">Plant Maintenance Services</h1>
        <p className="lead">Healthy plants, happy space!</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/images/client2.webp"
            alt="Plant Maintenance Services"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>What We Offer</h3>
          <ul className="list-unstyled">
            <li>🌿 Weekly or Monthly Maintenance Visits</li>
            <li>💧 Watering & Moisture Monitoring</li>
            <li>✂️ Pruning, Trimming & Fertilizing</li>
            <li>🐛 Pest & Disease Control</li>
            <li>🌱 Soil Health & Pot Refreshing</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p>Want your plants to thrive all year long? Let us take care of them!</p>
        <Link to="/contact" className="btn btn-success px-4 py-2">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
};

export default PlantMaintenancePage;
