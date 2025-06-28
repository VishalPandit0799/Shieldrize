import React from 'react';
import shieldLogo from '../Image/hero.png'; 

const HeroSection = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={shieldLogo}
              alt="Shieldrize Cybersecurity"
              className="img-fluid"
              style={{ maxWidth: '300px' }}
            />
          </div>

          <div className="col-md-6">
            <h1 className="display-5 fw-bold text-dark">
              Master Cybersecurity with <span className="text-primary">Shieldrize</span>
            </h1>
            <p className="lead text-muted mt-3">
              Learn how to protect systems, networks, and data from cyber threats.
              Our expert-led courses cover ethical hacking, penetration testing, digital forensics, and more.
            </p>
            <a href="#courses" className="btn btn-primary btn-lg mt-4 rounded-pill px-4 shadow-sm">
              Explore Courses
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
