import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm('service_5pako7m', 'template_uo1ucrv', formRef.current, '91le_1fEl2eKxRyaH')
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <main>
      <div className="projects-container" style={{ maxWidth: '700px' }}>
        <header className="projects-header">
          <h1>Contact Me</h1>
          <p>I'm always open to discussing new projects, creative ideas, or internship opportunities.</p>
        </header>

        <div className="project-card form-container">
          {status === 'success' ? (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h2 style={{ fontFamily: 'Michroma' }}>Message Sent!</h2>
              <p>Thank you for reaching out. I'll get back to you soon!</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input type="text" id="from_name" name="from_name" placeholder="Jane Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="reply_to">Email</label>
                <input type="email" id="reply_to" name="reply_to" placeholder="jane.doe@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Hi Paulina! Let's connect..." required />
              </div>
              {status === 'error' && (
                <p style={{ color: 'salmon', marginBottom: '1rem' }}>Something went wrong, please try again.</p>
              )}
              <button className="submit-btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}