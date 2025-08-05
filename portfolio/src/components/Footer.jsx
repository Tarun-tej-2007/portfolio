import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-message">
              Made with <Heart size={16} className="heart-icon" /> and <Code size={16} className="code-icon" /> by Tarun Tej
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Tarun Tej. All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#hackathons" className="footer-link">Hackathons</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-dark);
          color: white;
          padding: 2rem 0;
          margin-top: 4rem;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-text {
          text-align: left;
        }

        .footer-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .heart-icon {
          color: #EF4444;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .code-icon {
          color: #3B82F6;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary-color);
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;