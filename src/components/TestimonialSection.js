import React from 'react';
import { Helmet } from 'react-helmet';
const testimonials = [
  {
    name: 'Aarti Deshmukh',
    message: 'My balcony is now a green paradise thanks to their gardening service. Highly recommended!',
    image: '/images/client1.webp'
  },
  {
    name: 'Rajeev Patil',
    message: 'I loved the herb garden setup they did in my kitchen. Fresh mint every day!',
    image: '/images/client2.webp'
  },
  {
    name: 'Neha Kulkarni',
    message: 'They gave my terrace a full makeover with planters, lighting, and a water feature. Amazing!',
    image: '/images/client3.webp'
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-5 bg-white fade-in" id="testimonials">
      <Helmet>
        <title>Client Testimonials | Green Garden Services in Kolhapur</title>
        <meta name="description" content="Read what our happy customers say about Green Garden’s gardening, landscaping, and plant maintenance services in Kolhapur."/>
        <meta name="keywords" content="gardening testimonials, Kolhapur garden services, happy clients, customer feedback, landscaping reviews"/>
        <meta property="og:title" content="Client Testimonials | Green Garden Kolhapur" />
        <meta property="og:description" content="Trusted by families across Kolhapur – discover real reviews from satisfied Green Garden customers."/>
        <meta property="og:url" content="https://green-garden-website.vercel.app/testimonials" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://green-garden-website.vercel.app/preview.jpg" />
        <link rel="canonical" href="https://green-garden-website.vercel.app/testimonials" />
      </Helmet>

      <div className="container text-center">
        <h2 className="mb-5">What Our Clients Say</h2>

        <div id="testimonialCarousel" className="carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="d-flex flex-column align-items-center" >
                  <img src={testimonial.image} className="rounded-circle mb-3" alt={testimonial.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <p className="lead fst-italic w-75">{`"${testimonial.message}"`}</p>
                  <h5 className="fw-bold mt-2">{testimonial.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
