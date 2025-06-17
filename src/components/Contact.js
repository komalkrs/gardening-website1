import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    emailjs
      .sendForm(
        'service_0qragpu',
        'template_mgcgox2',
        form.current,
        'lq2W-uFoV6TxY2-O8'
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        form.current.reset();
        setTimeout(() => setSubmitted(false), 4000);
        document
          .querySelector('.alert-success')
          ?.scrollIntoView({ behavior: 'smooth' });
      })
      .catch(() => {
        setLoading(false);
        setError('❌ Something went wrong. Please try again.');
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Komal's Garden</title>
        <meta
          name="description"
          content="Get in touch with Komal's Garden for gardening consultations, custom plant designs, and green decor. Visit us in Hanmantwadi, Maharashtra."
        />
        <meta
          name="keywords"
          content="contact garden expert, gardening consultation, plant service, Hanmantwadi, Maharashtra, Komal's Garden"
        />
        <meta property="og:title" content="Contact Us | Komal's Garden" />
        <meta property="og:description" content="Reach out to Komal's Garden for expert gardening help or visit our location. Let's grow something beautiful together!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://komalsgarden.in/contact" />
        <meta property="og:image" content="https://komalsgarden.in/images/contact-preview.jpg" />
      </Helmet>

      <div className="container my-5 py-5 px-4 shadow bg-white rounded">
        <div className="row g-4 align-items-center">
          {/* Contact Form */}
          <div className="col-lg-6">
            <h2 className="mb-4">Contact Us</h2>
            <div className="p-4 bg-light border rounded shadow-sm">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="email">Your Email</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    id="message"
                    style={{ height: '120px' }}
                    required
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="alert alert-success mt-3">
                    ✅ Message sent successfully!
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )}
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-lg-6">
            <h2 className="mb-4">Visit Us</h2>
            <div className="rounded shadow-sm overflow-hidden">
              <div
                className="ratio ratio-4x3 rounded"
                style={{ minHeight: '300px' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15284.406224488639!2d74.16369883649813!3d16.72178384383403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1aaffbf68d6a1%3A0xfed116d527974beb!2sHanmantwadi%2C%20Maharashtra%20416010!5e0!3m2!1sen!2sin!4v1749893841727!5m2!1sen!2sin"
                  title="Google Map"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
