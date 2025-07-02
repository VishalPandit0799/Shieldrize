import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  sticky-top shadow-sm py-2">
      <div className="container-fluid px-4">

       
        <a className="navbar-brand fw-bold fs-3 text-light" href="#">
          <span className="text-primary">Shield</span>rize
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav gap-3 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-light" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-light" href="#">Courses</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold text-light"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li><a className="dropdown-item" href="#">Web Development</a></li>
                <li><a className="dropdown-item" href="#">Cybersecurity</a></li>
                <li><a className="dropdown-item" href="#">Data Science</a></li>
                <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
                <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-light" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-light" href="#">Contact</a>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 mt-3 mt-lg-0">
            <a
              href="#"
              className="btn btn-light px-4 py-2 rounded-3 border border-light-subtle shadow-sm text-dark fw-medium"
              style={{ transition: 'all 0.2s ease-in-out' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.05)'}
            >
              Sign In
            </a>
            <a
              href="#"
              className="btn btn-dark px-4 py-2 rounded-3 fw-medium border border-light"
              style={{ transition: 'all 0.2s ease-in-out' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
