// components/ScrollToTopButton.jsx
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

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

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-success position-fixed d-flex justify-content-center align-items-center"
      style={{
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        zIndex: 9999,
        fontSize: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
      aria-label="Scroll to top"
      title="Go to Top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
