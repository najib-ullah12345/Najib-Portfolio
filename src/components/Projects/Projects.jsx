import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  const filters = ['All', ...new Set(projects.map((p) => p.title.split(' ')[0]))].slice(0, 4);
  const filtered = activeFilter === 'All' ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-pad bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of my front-end development work showcasing responsive design and interactive interfaces."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`card overflow-hidden group reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ height: '220px' }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.siteUrl && (
                    <button
                      onClick={() => window.open(project.siteUrl, '_blank')}
                      className="btn-primary text-sm py-2 px-4"
                    >
                      <i className="fas fa-external-link-alt" />
                      Live Demo
                    </button>
                  )}
                  {project.githubUrl && (
                    <button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="btn-outline text-sm py-2 px-4"
                    >
                      <i className="fab fa-github" />
                      Code
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs py-1 px-3">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-text-muted pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-user text-gold/60" />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock text-gold/60" />
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 reveal" style={{ transitionDelay: '0.4s' }}>
          <p className="text-text-muted mb-4 text-sm">More projects available on GitHub</p>
          <a
            href="https://github.com/najib-ullah12345"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <i className="fab fa-github" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
