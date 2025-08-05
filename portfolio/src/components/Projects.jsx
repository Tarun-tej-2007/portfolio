import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StudyShelf',
      description: ' A book recommendation platform that uses AI to suggest books based on user preferences and reading history.',
      image: 'https://images.squarespace-cdn.com/content/v1/5876279bbebafb82a7c81c00/f4e17d6a-81db-4a04-9bda-63c86c517778/IMG_3105.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com/kalviumcommunity/s81_tarun_StudyShelf',
      date: '2024',
      category: 'Full Stack'
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive hospital management system that streamlines patient management, appointment scheduling, and medical records.',
      image: 'https://kindgeek.com/blog/wp-content/uploads/2019/12/OBUZORLdEFO3HofPcHMa-1024x654.jpeg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      github: 'https://github.com/Tarun-tej-2007/hms-project.git',
    
      date: '2025',
      category: 'Web App'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design, animations, and optimized performance.',
      image: 'https://media.slidesgo.com/storage/54256682/responsive-images/0-student-portfolio___media_library_original_655_368.jpg',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/Tarun-tej-2007/portfolio.git',
      date: '2024',
      category: 'Frontend'
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-category">
                      <Tag size={14} />
                      {project.category}
                    </span>
                    <span className="project-date">
                      <Calendar size={14} />
                      {project.date}
                    </span>
                  </div>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          background: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-primary);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .project-link:hover {
          background: var(--primary-color);
          transform: scale(1.1);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-header {
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .project-category,
        .project-date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1rem;
          }

          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;