import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomeGardenSetupPage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Home Garden Setup Services in Kolhapur | Green Garden</title>
        <meta name="description" content="Transform your space with our home garden setup service in Kolhapur. We help you choose the right plants, planters, and layouts for balconies, terraces, and yards." />
        <meta name="keywords" content="home garden setup, balcony garden, terrace garden Kolhapur, gardening services, indoor garden" />
        <meta property="og:title" content="Home Garden Setup by Green Garden" />
        <meta property="og:description" content="Get expert home gardening solutions — from soil to pot selection and plant care." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/home-garden.webp" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/services/home-garden-setup" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <div className="text-center mb-4">
        <div className="text-start mt-4">
          <Link to="/services" className="btn btn-outline-success">
            ← Back to Services
          </Link>
        </div>
        <h1 className="display-5">Home Garden Setup</h1>
        <p className="lead">Transform your space into a lush green haven!</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/images/home-garden.webp"
            alt="Home Garden Setup"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>What We Offer</h3>
          <ul className="list-unstyled">
            <li>🏡 Balcony Garden Design & Setup</li>
            <li>🌿 Terrace Garden Planning with Containers</li>
            <li>🌱 Kitchen Herb Garden Installation</li>
            <li>🪴 Indoor Plant Styling & Arrangement</li>
            <li>☀️ Customized Setup Based on Sunlight & Space</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p>Make your home greener, fresher, and more peaceful with our expert gardening setup!</p>
        <Link to="/contact" className="btn btn-success px-4 py-2">
          Request a Garden Plan
        </Link>
      </div>
    </div>
  );
};

export default HomeGardenSetupPage;
