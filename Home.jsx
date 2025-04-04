import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLock, FaShieldAlt, FaGlobe, FaUserShield, FaArrowRight, FaRocket, FaChartLine, FaInfinity } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-modern">
      {/* Modern Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <FaLock className="me-2 text-primary" />
            <span className="text-dark">Secure</span><span className="text-primary">Vault</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
              </li>
            </ul>
            <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
              <Link to="/login" className="btn btn-outline-primary me-2">
                Log In
              </Link>
              <Link to="/dashboard" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 py-5">
              <h1 className="display-4 fw-bold mb-4">
               EVARISTE<span className="text-primary"> WEBSITE</span>
              </h1>
              <p className="lead text-muted mb-4">
                Military-grade encryption for your passwords and sensitive data. 
                Trusted by millions worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/signup" className="btn btn-primary btn-lg px-4">
                  Start Free Trial <FaArrowRight className="ms-2" />
                </Link>
               <a 
  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn btn-outline-secondary btn-lg px-4"
>
  Watch Demo
</a>
              </div>
            </div>
            <div className="col-lg-6 py-5">
              <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Security illustration" 
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white py-4 border-top border-bottom">
        <div className="container">
          <p className="text-center text-muted mb-3">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="row justify-content-center g-4">
            {['Microsoft', 'Google', 'Amazon', 'IBM', 'Salesforce'].map((company, index) => (
              <div className="col-auto" key={index}>
                <div className="text-muted fw-bold">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Enterprise-grade security made simple</h2>
            <p className="text-muted lead mx-auto" style={{maxWidth: '600px'}}>
              All the tools you need to protect your digital identity in one secure platform
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { icon: <FaLock className="fs-3" />, title: "End-to-End Encryption", desc: "256-bit AES encryption keeps your data safe from prying eyes", color: "primary" },
              { icon: <FaShieldAlt className="fs-3" />, title: "Zero-Knowledge", desc: "We never see your data - only you have the keys", color: "info" },
              { icon: <FaGlobe className="fs-3" />, title: "Cross-Platform", desc: "Access your vault from any device, anywhere", color: "success" },
              { icon: <FaUserShield className="fs-3" />, title: "Secure Sharing", desc: "Share credentials with team members safely", color: "warning" },
              { icon: <FaRocket className="fs-3" />, title: "Password Generator", desc: "Create strong, unique passwords instantly", color: "danger" },
              { icon: <FaChartLine className="fs-3" />, title: "Security Audit", desc: "Identify weak or reused passwords", color: "purple" },
              { icon: <FaInfinity className="fs-3" />, title: "Unlimited Devices", desc: "Sync across all your devices seamlessly", color: "indigo" }
            ].map((feature, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="card-body p-4">
                    <div className={`bg-${feature.color}-subtle rounded-circle p-3 mb-3 icon-container d-inline-flex`}>
                      {React.cloneElement(feature.icon, { className: `text-${feature.color}` })}
                    </div>
                    <h5 className="card-title mb-3">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.desc}</p>
                    <Link to="https://ssd.eff.org/en/module/what-end-end-encryption" className="btn btn-link ps-0 text-decoration-none">
                      Learn more <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to take control of your digital security?</h2>
              <p className="lead mb-5">
                Join over 10 million users who trust SecureVault with their sensitive data
              </p>
              <Link to="http://www.youtube.com" className="btn btn-light btn-lg px-5">
                Get Started for Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="d-flex align-items-center mb-4">
                <FaLock className="me-2 text-primary" />
                <span>Secure</span><span className="text-primary">Vault</span>
              </h5>
              <p className="text-muted">
                The most trusted password manager for individuals and businesses.
              </p>
            </div>
            <div className="col-lg-2 col-md-4">
              <h6 className="mb-3">Product</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/features" className="text-muted text-decoration-none">Features</Link></li>
                <li className="mb-2"><Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link></li>
                <li className="mb-2"><Link to="/download" className="text-muted text-decoration-none">Download</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4">
              <h6 className="mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/blog" className="text-muted text-decoration-none">Blog</Link></li>
                <li className="mb-2"><Link to="/support" className="text-muted text-decoration-none">Support</Link></li>
                <li className="mb-2"><Link to="/docs" className="text-muted text-decoration-none">Documentation</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4">
              <h6 className="mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link to="/careers" className="text-muted text-decoration-none">Careers</Link></li>
                <li className="mb-2"><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6 className="mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                {['Twitter', 'Facebook', 'LinkedIn', 'GitHub'].map((social, index) => (
                  <Link key={index} to={`/${social.toLowerCase()}`} className="text-muted">
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted small mb-0">
                &copy; {new Date().getFullYear()} SecureVault. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <Link to="/privacy" className="text-muted small text-decoration-none">Privacy Policy</Link>
                <Link to="/terms" className="text-muted small text-decoration-none">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;