import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaLeaf, FaCut, FaTools, FaSolarPanel } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    title: 'Home Garden Setup',
    image: '/home-garden.webp',
    alt: 'Home Garden Setup',
    description: 'Balcony, terrace, herb, and indoor garden solutions tailored to your space.',
    fullDescription: `• Balcony garden design
• Terrace garden planning
• Kitchen herb garden installation
• Indoor plant arrangement`,
    icon: <FaLeaf className="me-2 text-success" />,
    link: '/services/home-garden-setup',
    delay: '0.1s'
  },
  {
    title: 'Plant Maintenance Services',
    image: '/client2.webp',
    alt: 'Plant Maintenance Services',
    description: 'We keep your plants healthy with regular care and expert monitoring.',
    fullDescription: `• Weekly/monthly maintenance
• Watering, pruning, and fertilizing
• Pest and disease control
• Soil health checks`,
    icon: <FaCut className="me-2 text-success" />,
    link: '/services/plant-maintenance',
    delay: '0.2s'
  },
  {
    title: 'Lawn & Landscape Care',
    image: '/service2.webp',
    alt: 'Lawn and Landscape Care',
    description: 'Professional lawn mowing, flower planting, and seasonal care for your green space.',
    fullDescription: `• Lawn mowing & weeding
• Garden bed edging & mulching
• Seasonal flower planting
• Hedge trimming and shaping`,
    icon: <FaTools className="me-2 text-success" />,
    link: '/services/lawn-landscape-care',
    delay: '0.3s'
  },
  {
    title: 'Custom Garden Design',
    image: '/custom-garden.jpg',
    alt: 'Custom Garden Design Services',
    description: 'Unique garden design tailored to your space, sun, and climate needs.',
    fullDescription: `• Garden layout consultation
• Plant selection based on sunlight & climate
• Eco-friendly vertical garden setup
• Water-saving drip irrigation installation`,
    icon: <FaSolarPanel className="me-2 text-success" />,
    link: '/services/custom-garden',
    delay: '0.4s'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container mt-5 fade-in">
      <Helmet>
        <title>Our Gardening Services | Komal's Garden</title>
        <meta name="description" content="Explore our professional gardening services like landscaping, pruning, maintenance, and eco-friendly green technology." />
        <meta name="keywords" content="gardening services, garden care, landscaping, pruning plants, green technology, maintenance" />
        <meta property="og:title" content="Our Gardening Services | Komal's Garden" />
        <meta property="og:description" content="We offer top-notch services like landscaping, pruning, and eco-friendly garden maintenance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:image" content="https://yourdomain.com/images/services-preview.webp" />
      </Helmet>

      <div className="container-xxl py-5">
        <h2>Our Services</h2>
        <h5 className="display-6 mb-5">Services That We Offer For You</h5>
        <div className="container">
          <div className="row g-4">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 fade-in-up"
                style={{ animationDelay: service.delay, animationFillMode: 'both' }}
              >
                <div className="service-item rounded d-flex flex-wrap h-100">
                  <div className="service-img rounded w-100">
                    <img
                      className="img-fluid w-100"
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="service-text rounded p-4">
                    <h4 className="mb-3">
                      {service.icon}
                      {service.title}
                    </h4>
                    <p className="mb-4">{service.description}</p>
                    <Link to={service.link} className="btn btn-sm btn-success me-2">
                      <i className="fa fa-arrow-right me-2"></i>View Details
                    </Link>
                    <button
                      className="btn btn-sm bg-danger text-white"
                      onClick={() => setSelectedService(service)}
                    >
                      <i className="fa fa-plus me-2"></i>Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA Section */}
          <div className="text-center mt-5">
            <h4>Need personalized help?</h4>
            <p>Contact us today to get a free garden consultation!</p>
            <Link to="/contact" className="btn btn-primary px-4 py-2">Get in Touch</Link>
          </div>
        </div>

        {/* Modal for "Read More" */}
        {selectedService && (
          <div className="modal show fade d-block" tabIndex="-1" onClick={() => setSelectedService(null)}>
            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedService.title}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedService(null)}></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedService.image}
                    alt={selectedService.alt}
                    className="mb-3 d-block mx-auto"
                    style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                  <pre style={{ whiteSpace: 'pre-wrap' }}>{selectedService.fullDescription}</pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
