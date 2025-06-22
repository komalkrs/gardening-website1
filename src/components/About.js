import React from 'react';
import { Helmet } from 'react-helmet';
const About = () => {

  return (

    <section className="py-5 bg-light fade-in" id="about">
      <Helmet>
        <title>About Us | Sandip's Garden</title>
        <meta name="description" content="Learn about our passion for plants and how Komal's Garden started offering eco-friendly gardening solutions in Kolhapur." />
        <meta name="keywords" content="about Komal's Garden, gardening journey, garden story, eco-friendly garden" />
      </Helmet>

      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="/images/img1.webp" alt="About us garden" className="img-fluid rounded shadow" />
          </div>

          {/* Right Text */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="mb-3">About Us</h2>
            <p>
              Welcome to our gardening haven! 🌱 We're passionate about transforming homes, balconies, and terraces into
              lush, green sanctuaries. Whether you're new to plants or a seasoned gardener, our mission is to bring joy,
              calm, and beauty through greenery.
            </p>
            <p>
              From indoor succulents to full backyard makeovers, we provide personalized gardening advice,
              plant care tips, and creative ideas that suit every space. Let’s make your home bloom together!
            </p>
            <a href="/contact" className="btn btn-success mt-3">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
