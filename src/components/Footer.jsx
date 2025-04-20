import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Academy Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning fw-bold">Lakshavedh Academy</h5>
            <p className="text-light">
              Empowering students in Math, Science & English Grammar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">🏠 Home</Link></li>
              <li><Link to="/courses" className="text-light text-decoration-none">📘 Courses</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">👨‍🏫 About</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">📞 Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white">Contact Us</h6>
            <p>
              <FaWhatsapp className="me-2 text-success" />
              <a href="https://wa.me/917756034259" className="text-light text-decoration-none">+91 77560 34259</a>
            </p>
            <p>
              <FaEnvelope className="me-2" />
              <a href="mailto:lakshavedhacademy@email.com" className="text-light text-decoration-none">
                lakshavedhacademy@email.com
              </a>
            </p>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-muted mb-0">
          &copy; {new Date().getFullYear()} Lakshavedh Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
