import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'kondetitarun.tej.s81@kalvium.community',
      href: 'mailto:kondetitarun.tej.s81@kalvium.community'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 832 839 4354',
      href: 'tel:+918328394354'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Madurai, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Tarun-tej-2007 ',
      color: '#333'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: '#0077B5'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Work Together
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-text">
              <h3 className="contact-subtitle">Get in Touch</h3>
              <p className="contact-description">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text-info">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="social-links">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .section {
          background: var(--bg-secondary);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          padding-right: 2rem;
        }

        .contact-subtitle {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .contact-details {
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          margin-bottom: 1rem;
          background: var(--bg-primary);
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .contact-item:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .contact-text-info {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 0.8rem;
          color: var(--text-light);
          margin-bottom: 0.25rem;
        }

        .contact-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .social-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: var(--bg-primary);
          border-radius: 50%;
          color: var(--social-color, var(--text-primary));
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .social-link:hover {
          background: var(--social-color);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .contact-form-container {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
        }

        .contact-form {
          width: 100%;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid var(--border-color);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background: var(--bg-primary);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          justify-content: center;
          font-size: 1.1rem;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            padding-right: 0;
          }

          .contact-subtitle {
            font-size: 1.5rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;