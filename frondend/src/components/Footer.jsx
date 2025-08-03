import logo from "../assets/Group52.png";
// import Background from "../assets/Group53.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Background Image */}
      <div className="footer-bg-image"></div>

      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-logo">
                <img src={logo} alt="ARISCHAIN Logo" className="logo-image" />
              </div>
              <div className="brand-info">
                <h3 className="brand-title">ARISCHAIN</h3>
                <p className="brand-description">
                  Empowering Indonesia's Digital Artisan with Blockchain
                  Transparency
                </p>
              </div>
            </div>

            <a
              href="https://github.com/ahnafyura/Arischain-Decentralized-Arisan-DApp"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <svg
                className="github-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="github-text">GitHub Repositories</span>
            </a>
          </div>

          {/* Components Section */}
          <div className="footer-section">
            <h4 className="section-title">Components</h4>
            <ul className="section-links">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#started" className="footer-link">
                  Started
                </a>
              </li>
            </ul>
          </div>

          {/* Action Section */}
          <div className="footer-section">
            <h4 className="section-title">Action</h4>
            <ul className="section-links">
              <li>
                <a href="#" className="footer-link">
                  Join
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Create
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <div className="copyright-content">
            <p className="copyright-text">
              &copy; 2025 ARISCHAIN. All rights reserved.
            </p>
            <p className="copyright-subtitle">
              Indonesia's First Blockchain-Based Identity Management System
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="footer-accent"></div>
    </footer>
  );
}

export default Footer;
