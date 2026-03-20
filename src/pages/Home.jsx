import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <div className="projects-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ fontFamily: 'Michroma', color: 'rgb(255,242,0)', fontSize: '2.5rem', marginBottom: '20px' }}>
            Hello, I'm Paulina
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            I'm a Stockholm based Fullstack .NET student learning how to build robust backend systems
            and intuitive user experiences. Currently mastering C#, SQL, and modern web technologies.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" className="tag" style={{ padding: '12px 25px', textDecoration: 'none' }}>
              View Projects →
            </Link>
            <Link to="/contact" className="tag" style={{ padding: '12px 25px', textDecoration: 'none', background: 'transparent', border: '1px solid #fff200' }}>
              Contact Me
            </Link>
          </div>
        </header>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: 'Michroma', fontSize: '0.8rem', color: 'white', letterSpacing: '3px', marginBottom: '30px', textTransform: 'uppercase', textShadow: '0px 0.1rem 0.9rem rgb(245,243,245)' }}>
            My Tech Stack
          </h2>
          <div className="tech-stack">
            <i className="devicon-html5-plain colored" title="HTML5"></i>
            <i className="devicon-css3-plain colored" title="CSS3"></i>
            <i className="devicon-javascript-plain colored" title="JavaScript"></i>
            <i className="devicon-react-original colored" title="React"></i>
            <i className="devicon-csharp-plain colored" title="C#"></i>
            <i className="devicon-azuresqldatabase-plain colored" title="SQL"></i>
            <i className="devicon-git-plain colored" title="Git"></i>
          </div>
        </div>
      </div>
    </main>
  )
}