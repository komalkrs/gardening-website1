import React from 'react';

const BeforeAfterGallery = () => {
  const galleryData = [
    {
      before: '/images/before1.webp',
      after: '/images/after1.webp',
      title: 'Landscaping',
    },
    {
      before: '/images/before2.webp',
      after: '/images/after2.webp',
      title: 'Front Yard Transformation',
    },
    {
      before: '/images/before3.webp',
      after: '/images/after3.webp',
      title: 'Lawn Makeover',
    },
    
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-success fw-bold mb-4">Before & After Transformations</h2>
      <div className="row g-4">
        {galleryData.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center text-success">{item.title}</h5>
                <div className="row">
                  <div className="col-6 text-center">
                    <p className="fw-semibold">Before</p>
                    <img
                      src={item.before}
                      alt="Before"
                      className="img-fluid rounded border border-secondary"
                      style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                  <div className="col-6 text-center">
                    <p className="fw-semibold">After</p>
                    <img
                      src={item.after}
                      alt="After"
                      className="img-fluid rounded border border-success"
                      style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
