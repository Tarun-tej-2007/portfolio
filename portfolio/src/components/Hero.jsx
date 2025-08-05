import React from 'react';
import { motion } from 'framer-motion';
import  profile  from '../assets/portfoliopic.jpg';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Hi, I'm Kondeti Tarun Tej
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer & Problem Solver
            </h2>
            <p className="hero-description">
              I create innovative solutions through code, participate in hackathons, 
              and build projects that make a difference. Passionate about technology 
              and always eager to learn new things.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/Tarun-tej-2007" className="social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tarun-tej-b8a102344/" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kondetitarun.tej.s81@kalvium.community" className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src={profile}
                  alt="Profile" 
                />
              </div>
              <div className="floating-icons">
                <div className="floating-icon icon-1">⚛️</div>
                <div className="floating-icon icon-2">🚀</div>
                <div className="floating-icon icon-3">💻</div>
                <div className="floating-icon icon-4">🎯</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="scroll-indicator"
        >
          <a href="#about" className="scroll-link">
            <ArrowDown size={24} />
            <span>Scroll to explore</span>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="1" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;

        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          opacity: 0.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .profile-card {
          position: relative;
          max-width: 400px;
          margin: 0 auto;
        }

        .profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid rgba(255, 255, 255, 0.2);
          box-shadow: var(--shadow-xl);
          position: relative;
          z-index: 2;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-icon {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          backdrop-filter: blur(10px);
          animation: float 3s ease-in-out infinite;
        }

        .icon-1 {
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .icon-2 {
          top: 30%;
          left: -10%;
          animation-delay: 0.5s;
        }

        .icon-3 {
          bottom: 30%;
          right: -10%;
          animation-delay: 1s;
        }

        .icon-4 {
          bottom: 10%;
          left: 20%;
          animation-delay: 1.5s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .scroll-link:hover {
          opacity: 1;
        }

        .scroll-link span {
          font-size: 0.9rem;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .profile-image {
            width: 250px;
            height: 250px;
          }

          .floating-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
          .gradient-text{
          color : white;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;