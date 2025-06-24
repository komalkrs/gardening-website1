import React from 'react';
import { Helmet } from 'react-helmet';
const About = () => {

  return (

    <section className="py-5 bg-light fade-in" id="about">
      <Helmet>
        <title>About Us | Green Garden</title>
        <meta name="description" content="Learn about Green Garden’s mission, team, and passion for creating beautiful green spaces in Kolhapur." />
        <meta name="keywords" content="about gardening services, gardening team Kolhapur, green garden story" />
        <meta property="og:title" content="About Green Garden" />
        <meta property="og:description" content="Discover who we are and how we help Kolhapur homes bloom with greenery." />
        <meta property="og:url" content="https://green-garden-website.vercel.app/about" />
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
