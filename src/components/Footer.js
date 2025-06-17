import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">

          {/* Column 1: About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-success">GardenCare</h5>
            <p>
              We bring nature to your doorstep. From indoor plants to full landscape makeovers,
              GardenCare is your green partner in every season.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-success">Quick Links</h5>
            <p><Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p><Link to="/about" className="text-white text-decoration-none">About</Link></p>
            <p><Link to="/services" className="text-white text-decoration-none">Services</Link></p>
            <p><Link to="/projects" className="text-white text-decoration-none">Projects</Link></p>
            <p><Link to="/contact" className="text-white text-decoration-none">Contact</Link></p>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-success">Contact</h5>
            <p><FaMapMarkerAlt className="me-2" /> Kolhapur, Maharashtra, India</p>
            <p><FaEnvelope className="me-2" /> info@greentouch.com</p>
            <p><FaPhoneAlt className="me-2" /> +91-9876543210</p>
          </div>

          {/* Column 4: Social */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3 text-md-end text-center">
            <h5 className="text-uppercase mb-4 fw-bold text-success">Follow Us</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
              <FaTwitter />
            </a>
          </div>
        </div>

        <hr className="my-4" />

        {/* Footer Bottom */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} GardenCare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
