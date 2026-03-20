import { useState, useEffect } from 'react'
import ProjectModal from '../components/ProjectModal'

const featuredProjects = [
  {
    id: 'school-db',
    name: 'School Database System',
    description: 'A SQL Server database project designed to manage a school system, featuring tables for students, teachers, classes, and grades. Fully normalized to 3NF.',
    tags: ['SQL Server', 'T-SQL', 'Database Design'],
    github: 'https://github.com/PaulinaPorsmyr/SchoolTestDb',
    image: '/PortfolioReact/img/Database.jpg'
  },
  {
    id: 'bank-app',
    name: 'Bank Application',
    description: 'A console-based banking system simulating core functionalities like creating accounts, transferring funds, and checking balances. Built with strict OOP principles.',
    tags: ['C#', 'Console App', 'OOP', '.NET'],
    github: 'https://github.com/PaulinaPorsmyr/BankApp',
    image: '/PortfolioReact/img/Bank.jpg'
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description: 'This very website! Built to showcase my journey as a developer, focusing on clean UI/UX and modern CSS techniques like Flexbox and Grid.',
    tags: ['HTML/CSS', 'JavaScript', 'React'],
    github: 'https://github.com/PaulinaPorsmyr/Portfolio',
    image: '/PortfolioReact/img/Printscreen.png'
  }
]

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

        {/* Handskrivna kort */}
        <header className="projects-header">
          <h1>Selected Projects</h1>
          <p>A collection of my work in .NET development, APIs, and Fullstack systems.</p>
        </header>

        <div className="projects-grid">
          {featuredProjects.map(project => (
            <article className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.name} className="project-image"
                  onError={e => e.target.style.display = 'none'} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
                    View Repository →
                  </a>
                  <button className="info-btn" onClick={() => setSelectedProject({
                    name: project.name,
                    description: project.description,
                    topics: project.tags,
                    html_url: project.github,
                    image: project.image
                  })}>
                    More Info
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub-repos */}
        <header className="projects-header" style={{ marginTop: '5rem' }}>
          <h1>GitHub Repositories</h1>
          <p>All my public repositories on GitHub.</p>
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