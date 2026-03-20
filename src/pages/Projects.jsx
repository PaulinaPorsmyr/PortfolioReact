import { useState, useEffect } from 'react'
import ProjectModal from '../components/ProjectModal'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/PaulinaPorsmyr/repos?sort=updated&per_page=20')
      .then(res => {
        if (!res.ok) throw new Error('Could not fetch repositories')
        return res.json()
      })
      .then(data => {
        // Filtrera bort forked repos om du vill, ta bort raden nedan för att visa alla
        const ownRepos = data.filter(r => !r.fork)
        setRepos(ownRepos)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <div className="projects-container">
        <header className="projects-header">
          <h1>Selected Projects</h1>
          <p>A collection of my public work on GitHub.</p>
        </header>

        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Fetching projects from GitHub...</p>
          </div>
        )}

        {error && (
          <div className="loading-state">
            <p>⚠️ Could not load projects: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="projects-grid">
            {repos.map(repo => (
              <article className="project-card" key={repo.id}>
                <div className="project-content">
                  <div className="project-tags">
                    {repo.language && <span className="tag">{repo.language}</span>}
                    {repo.topics && repo.topics.slice(0, 3).map(t => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <h3>{repo.name.replace(/-/g, ' ')}</h3>
                  <p>{repo.description || 'No description available.'}</p>
                  <div className="project-links">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="github-link">
                      View Repository →
                    </a>
                    <button className="info-btn" onClick={() => setSelectedProject(repo)}>
                      More Info
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  )
}