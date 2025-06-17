import React from 'react';

const testimonials = [
  {
    name: 'Aarti Deshmukh',
    message: 'My balcony is now a green paradise thanks to their gardening service. Highly recommended!',
    image: '/client1.webp'
  },
  {
    name: 'Rajeev Patil',
    message: 'I loved the herb garden setup they did in my kitchen. Fresh mint every day!',
    image: '/client2.webp'
  },
  {
    name: 'Neha Kulkarni',
    message: 'They gave my terrace a full makeover with planters, lighting, and a water feature. Amazing!',
    image: '/client3.webp'
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-5 bg-white fade-in" id="testimonials">
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
