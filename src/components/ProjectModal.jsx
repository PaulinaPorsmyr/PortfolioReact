import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  // Stäng med Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>&times;</button>
        {project.image && (
          <img className="modal-image" src={project.image} alt={project.name} />
        )}
        <div className="modal-body">
          <div className="project-tags">
            {(project.topics || []).map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <h2>{project.name}</h2>
          <p>{project.description || 'No description available.'}</p>
          {project.html_url && (
            <a href={project.html_url} target="_blank" rel="noreferrer" className="github-link">
              View Repository →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}