import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, MapPin, Star } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      name: 'Bannari Amman Institute of Technology Hackathon',
      position: '1st Place Winner',
      date: 'March 2025',
      location: 'Sathyamangalam, India',
      description: 'Developed a website for ticket booking and management for trains, buses, and flights with real-time updates and user-friendly interface.',
      project: 'EcoTrack AI',
      technologies: ['React', 'Node.js', 'MongoDB'],
      participants: 500,
      prize: '$5,000',
      achievements: ['Best Innovation Award', 'Audience Choice Award'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Kalasalingam University Hackathon',
      position: '3rd Place',
      date: 'September 2024',
      location: 'Krishnankoil, India',
      description: 'created a chatbot for mental health support that provides resources, coping strategies, and connects users with professionals.',
      project: 'MindMate Bot',
      technologies: ['node.js', 'Express', 'Dialogflow', 'MongoDB'],
      participants: 1200,
      prize: '$2,000',
      achievements: ['Best Social Impact', 'Most Innovative Solution'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },

  ];

  const getPositionColor = (position) => {
    if (position.includes('1st')) return 'gold';
    if (position.includes('2nd')) return 'silver';
    if (position.includes('3rd')) return 'bronze';
    return 'participant';
  };

  return (
    <section id="hackathons" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Hackathon Journey
        </motion.h2>
        
        <div className="hackathons-grid">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hackathon-card card"
            >
              <div className="hackathon-image">
                <img src={hackathon.image} alt={hackathon.name} />
                <div className={`position-badge ${getPositionColor(hackathon.position)}`}>
                  <Trophy size={16} />
                  <span>{hackathon.position}</span>
                </div>
              </div>
              
              <div className="hackathon-content">
                <div className="hackathon-header">
                  <h3 className="hackathon-name">{hackathon.name}</h3>
                  <div className="hackathon-meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      {hackathon.date}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} />
                      {hackathon.location}
                    </span>
                    <span className="meta-item">
                      <Users size={14} />
                      {hackathon.participants} participants
                    </span>
                  </div>
                </div>
                
                <div className="project-info">
                  <h4 className="project-name">Project: {hackathon.project}</h4>
                  <p className="project-description">{hackathon.description}</p>
                </div>
                
                <div className="hackathon-technologies">
                  {hackathon.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {hackathon.achievements.length > 0 && (
                  <div className="achievements">
                    <h5 className="achievements-title">
                      <Star size={16} />
                      Achievements
                    </h5>
                    <ul className="achievements-list">
                      {hackathon.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {hackathon.prize !== 'Experience' && hackathon.prize !== 'Recognition' && (
                  <div className="prize">
                    <span className="prize-label">Prize:</span>
                    <span className="prize-amount">{hackathon.prize}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="hackathon-stats"
        >
          <div className="stat-card">
            <span className="stat-number">2</span>
            <span className="stat-label">Hackathons Participated</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">1</span>
            <span className="stat-label">First Place Wins</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">7k+</span>
            <span className="stat-label">Total Prize Money</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">2</span>
            <span className="stat-label">Awards Received</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hackathons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .hackathon-card {
          background: var(--bg-primary);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .hackathon-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .hackathon-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .position-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .position-badge.gold {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #8B4513;
        }

        .position-badge.silver {
          background: linear-gradient(135deg, #C0C0C0, #A9A9A9);
          color: #2F4F4F;
        }

        .position-badge.bronze {
          background: linear-gradient(135deg, #CD7F32, #A0522D);
          color: white;
        }

        .position-badge.participant {
          background: rgba(59, 130, 246, 0.9);
          color: white;
        }

        .hackathon-content {
          padding: 1.5rem;
        }

        .hackathon-header {
          margin-bottom: 1.5rem;
        }

        .hackathon-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .hackathon-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .project-info {
          margin-bottom: 1rem;
        }

        .project-name {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .hackathon-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .achievements {
          margin-bottom: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 0.5rem;
          border-left: 4px solid var(--accent-color);
        }

        .achievements-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--accent-color);
        }

        .achievements-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .achievements-list li {
          font-size: 0.8rem;
          color: var(--text-secondary);
          padding: 0.25rem 0;
        }

        .achievements-list li:before {
          content: '✓';
          color: var(--accent-color);
          font-weight: bold;
          margin-right: 0.5rem;
        }

        .prize {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 0.5rem;
          color: white;
        }

        .prize-label {
          font-size: 0.9rem;
        }

        .prize-amount {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .hackathon-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 2rem;
          background: var(--bg-primary);
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
        }

        .stat-card {
          text-align: center;
          padding: 1rem;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hackathons-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hackathon-content {
            padding: 1rem;
          }

          .hackathon-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .hackathon-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hackathons;