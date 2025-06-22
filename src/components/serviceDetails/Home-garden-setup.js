import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomeGardenSetupPage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Home Garden Setup | Komal's Garden</title>
        <meta
          name="description"
          content="Get your dream home garden setup with balcony, terrace, herb, and indoor garden solutions customized for your space."
        />
        <meta
          name="keywords"
          content="home garden, balcony garden, terrace garden, herb garden, indoor plants"
        />
        <meta property="og:title" content="Home Garden Setup | Komal's Garden" />
        <meta property="og:description" content="We provide complete home garden setup services including balcony, terrace, herb, and indoor plant solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/home-garden-setup" />
        <meta property="og:image" content="https://yourdomain.com/images/service1.jpg" />
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
            src="/home-garden.webp"
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
