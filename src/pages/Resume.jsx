import cvData from '../data/cv-data.json'

export default function Resume() {
  const { name, intro, links, languages, techStack, education, experience, communityInvolvement } = cvData

  return (
    <main style={{ width: '100%' }}>
      <div className="resume-container">

        {/* Sidebar */}
        <aside className="resume-sidebar">
          <section style={{ marginBottom: '2rem' }}>
            <h3>Links</h3>
            <p><a href={links.github} target="_blank" rel="noreferrer">GitHub</a></p>
            <p><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h3>Tech Stack</h3>
            <div className="badge-container">
              {techStack.map(item => (
                <span className={`badge ${item.category}`} key={item.name}>{item.name}</span>
              ))}
            </div>
          </section>

          <section>
            <h3>Languages</h3>
            {languages.map(lang => (
              <p key={lang.name}>{lang.name} – {lang.level}</p>
            ))}
          </section>
        </aside>

        {/* Main content */}
        <article className="resume-main">
          <section>
            <h1>{name}</h1>
            <p>{intro}</p>
          </section>

          <section>
            <h2>Education</h2>
            {education.map((edu, i) => (
              <div className="edu-item" key={i}>
                <h3>{edu.degree} – {edu.school}</h3>
                <p className="date">{edu.period}</p>
                {edu.description && <p>{edu.description}</p>}
              </div>
            ))}
          </section>

          <section>
            <h2>Experience</h2>
            {experience.map((job, i) => (
              <div className="job" key={i}>
                <h3>{job.role} – {job.company}</h3>
                <p className="date">{job.period}</p>
                {job.description && <p>{job.description}</p>}
              </div>
            ))}
          </section>

          <section>
            <h2>Community Involvement</h2>
            {communityInvolvement.map((item, i) => (
              <div className="job" key={i}>
                <h3>{item.role} – {item.organization}</h3>
                <p className="date">{item.period}</p>
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </section>
        </article>

      </div>
    </main>
  )
}