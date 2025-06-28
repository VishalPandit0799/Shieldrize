import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-white" href="#">
          <span className="text-primary">Shield</span>rize
        </a>

        {/* Toggler for Mobile */}
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

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4 me-auto">
            <li className="nav-item">
              <a className="nav-link active fw-medium" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">Courses</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-medium"
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
              <a className="nav-link fw-medium" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">Contact</a>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-none d-lg-flex me-3" role="search">
            <input
              type="search"
              className="form-control rounded-pill px-3"
              placeholder="Search courses..."
              aria-label="Search"
              style={{ minWidth: '220px' }}
            />
          </form>

          {/* Auth Buttons */}
          <div className="d-flex gap-2">
            <a href="#" className="btn btn-outline-light rounded-pill px-4">Sign In</a>
            <a href="#" className="btn btn-primary rounded-pill px-4 shadow">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
