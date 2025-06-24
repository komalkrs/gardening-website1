import React, { useEffect, useState } from 'react';
import GallerySection from './GallerySection';
import { Helmet } from 'react-helmet';
import TestimonialSection from './TestimonialSection';
import DarkModeToggle from './DarkModeToggle';
const Home = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <DarkModeToggle />
      <Helmet>
        <title>Green Garden | Gardening Services in Kolhapur</title>
        <meta name="description" content="Expert gardening services in Kolhapur — including garden setup, plant maintenance, lawn care, and custom designs." />
        <meta name="keywords" content="gardening Kolhapur, garden services, plant maintenance, lawn care, landscape design" />
        <meta property="og:title" content="Green Garden | Gardening Services in Kolhapur" />
        <meta property="og:description" content="Transform your space into a green paradise with Green Garden's expert gardening services in Kolhapur." />
        <meta property="og:image" content="https://green-garden-website.vercel.app/images/preview.jpg" />
        <meta property="og:url" content="https://green-garden-website.vercel.app/" />
        <meta name="robots" content="index, follow" />
      </Helmet>




      <div className="container-fluid p-0 " >
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* First Slide - VIDEO BACKGROUND */}
            <div className="carousel-item active" style={{ height: '90vh', position: 'relative', overflow: 'hidden' }}>

              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-100 h-100 position-absolute top-0 start-0"
                style={{ objectFit: 'cover', zIndex: '-1' }}
              >
                <source src="/images/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 100, 0, 0.4)', zIndex: '0' }}
              ></div>

              {/* Centered Text */}
              <div className="d-flex flex-column justify-content-center align-items-center text-white text-center h-100 position-relative fadeInUp" style={{ zIndex: 1 }}>
                <h1 className="display-3 fw-bold text-shadow text-center text-md-start">Make Your Home Like Garden</h1>
                <a href="/services" className="btn btn-danger text-white py-sm-3 px-sm-4 mt-3">Explore More</a>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item position-relative">
              {/* Background Image */}
              <img
                className="w-100"
                src="/images/header1.webp"
                alt="Banner 2"
                loading="eager"
                width="1920"
                height="1080"
                style={{ height: '90vh', objectFit: 'cover' }}
              />


              {/* Overlay Layer */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
              ></div>

              {/* Text Content */}
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 "
                style={{ top: '0', bottom: '0', zIndex: 2 }}
              >
                <h1 className="display-3 text-white fw-bold text-shadow">Create Your Own Small Garden At Home</h1>
                <a href="/services" className="btn btn-danger py-sm-3 px-sm-4 mt-3 text-white">Explore More</a>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        {/* About Us Section */}
        <section className="py-5 bg-light fade-in" >
          <div className="container text-center ">
            <h2 className="mb-4">About Us</h2>
            <p className="text-dark">
              Welcome to our gardening haven! 🌱 We're passionate about transforming homes, balconies, and terraces into
              lush, green sanctuaries. Whether you're new to plants or a seasoned gardener, our mission is to bring joy,
              calm, and beauty through greenery.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5 fade-in" id="services  " >
          <div className="container ">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title">Gardening</h5>
                    <p className="card-text">Home garden setup, soil mix, pots & plant selection tailored to your space.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title">Landscaping</h5>
                    <p className="card-text">Transform your outdoor space into a lush green paradise with our team.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title">Plant Shop</h5>
                    <p className="card-text">Buy indoor & outdoor plants, planters, and get expert care tips.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`py-5 text-center fade-in ${document.body.classList.contains('dark-mode') ? 'bg-success text-white' : 'bg-light text-dark'}`}>
          <div className="container">
            <h2 className="mb-3">Let’s Grow Together</h2>
            <p className="mb-4">Get in touch to build your dream green corner at home or office.</p>
            <a href="/contact" className="btn btn-success dark:bg-white dark:text-success">
              Contact Us
            </a>
          </div>
        </section>


        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonial Section*/}
        <TestimonialSection />
        {/* Scroll-to-top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="btn btn-success position-fixed"
            style={{
              bottom: '20px',
              right: '20px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              zIndex: 1000,
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
            aria-label="Scroll to top"
            title="Go to Top"
          >
            ↑
          </button>
        )}
      </div>
    </>


  );
};

export default Home;
