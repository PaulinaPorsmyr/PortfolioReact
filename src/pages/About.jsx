export default function About() {
  return (
    <main>
      <div className="about-container">
        <img src="/PortfolioReact/img/bild.jpg" alt="Paulina" className="profile-pic-side" />

        <section className="projects-container">
          <header className="projects-header">
            <h1>Who Am I?</h1>
            <p>Fullstack .NET student with a background in culture and production, bringing a creative edge to structured backend logic.</p>
          </header>

          <article className="project-card">
            <div className="project-content">
              <div className="project-tags">
                {['Music', 'History', 'Backend', 'Film', 'Innovation'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <h3>Creative Roots. Logic Driven.</h3>
              <p>My path into tech hasn't been the traditional one. With a bachelor's degree in Art History and several years in the cultural field, mainly at the Royal Dramatic Theatre and as a producer for a touring theatre company, I have found my way into a new world: the world of technology!</p>
              <p style={{ marginTop: '1rem' }}>I'm a very curious person, and that drive for discovery is what led me toward technology and innovation, a true paradigm shift for me. Right now, I am exploring the depths of .NET development and find the logic of backend systems to be incredibly appealing.</p>
              <p style={{ marginTop: '1rem' }}>When I'm not coding, I'm usually at a concert, visiting a gallery, or just enjoying the city's cultural scene. I am currently looking for an internship (LIA) starting november 2026.</p>
              <div className="project-links">
                <a href="https://boxd.it/95K9F" target="_blank" rel="noreferrer" className="github-link">My Letterboxd →</a>
                <a href="https://www.youtube.com/watch?v=tRoBfcPxJdA" target="_blank" rel="noreferrer" className="github-link">My Favourite Song →</a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}