import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe size={24} />,
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS' , 'React Native']
    },
    {
      category: 'Backend',
      icon: <Database size={24} />,
      technologies: ['Node.js', 'Express', 'Python', 'MongoDB', 'MySQL', 'REST API', 'Flask']
    },
    
    {
      category: 'Tools & Others',
      icon: <Code size={24} />,
      technologies: ['Git', 'Figma']
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3 className="about-subtitle">
              Passionate Developer with a Love for Innovation
            </h3>
            <p>
              I'm a dedicated full-stack developer with experience in building 
              web and mobile applications. My journey in tech started with curiosity 
              and grew into a passion for creating solutions that make a real impact.
            </p>
            <p>
              When I'm not coding, you'll find me participating in hackathons, 
              contributing to open-source projects, or exploring the latest 
              technologies. I believe in continuous learning and staying updated 
              with industry trends.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Hackathons Participated</span>
              </div>
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="skills-grid"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card card"
              >
                <div className="skill-header">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h4 className="skill-title">{skill.category}</h4>
                </div>
                <div className="skill-technologies">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          padding-right: 2rem;
        }

        .about-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .skill-card {
          padding: 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .skill-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-text {
            padding-right: 0;
          }

          .stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;