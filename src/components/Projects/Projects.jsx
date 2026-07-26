import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/projects';

export default function Projects() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="section bg-[#111117] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
          <div className="divider divider-center" />
        </div>

        {/* Project Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay buttons */}
              <div className="overlay">
                {project.siteUrl && (
                  <button onClick={() => window.open(project.siteUrl, '_blank')}>
                    <i className="fas fa-external-link-alt text-xs" />
                    Live Demo
                  </button>
                )}
                {project.githubUrl && (
                  <button onClick={() => window.open(project.githubUrl, '_blank')}>
                    <i className="fab fa-github text-xs" />
                    Source
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
                <p className="text-[#7a7a8c] text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-[11px] py-1 px-3">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-[10px] text-[#4a4a5c] pt-3 border-t border-white/[0.05]">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-user text-gold/50" />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock text-gold/50" />
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div ref={ref} className={`text-center mt-16 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-[#4a4a5c] text-xs tracking-widest uppercase mb-4">More on GitHub</p>
          <a
            href="https://github.com/najib-ullah12345"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex text-sm px-8 py-3"
          >
            <i className="fab fa-github" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
