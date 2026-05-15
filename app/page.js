'use client'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit() {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }
  return (
    <main style={{
      maxWidth: '1100px',
      margin: '0 auto',
      paddingLeft: 'clamp(24px, 5vw, 80px)',
      paddingRight: 'clamp(24px, 5vw, 80px)'
    }}>

      {/* HERO SECTION */}
     <section className="flex justify-center" style={{ minHeight: '100vh', paddingTop: '140px', flexDirection: 'row', alignItems: 'center', gap: '80px' }}>
  
  {/* LEFT SIDE - existing content */}
  <div style={{ flex: 1 }}>
    <div className="flex items-center gap-8 mb-8">
      <img
        src="/Melan.jpeg"
        alt="Milan Budhathoki"
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
      />
    </div>
    <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      Full Stack Developer · CS Student
    </p>
    <h1 className="text-6xl font-semibold text-gray-900 leading-tight" style={{ marginBottom: '24px' }}>
      Hi, I am Milan <br />
      Budhathoki.
    </h1>
    <p className="text-xl text-gray-500 font-light italic" style={{ marginBottom: '12px' }}>
      Mathematics is the why. Code is the how.
    </p>
    <p className="text-base text-gray-400 max-w-xl leading-relaxed" style={{ marginBottom: '40px' }}>
      CS student who loves building things from scratch —
      web apps, algorithms, and anything that makes me think.
    </p>
    <div className="flex gap-4">
      <a href="#projects" className="bg-gray-900 text-white rounded-lg text-sm font-medium cursor-pointer" style={{ padding: '12px 24px', textDecoration: 'none', display: 'inline-block' }}>
        View Projects
      </a>
      <a href="/resume.pdf" download className="border border-gray-300 text-gray-600 rounded-lg text-sm font-medium cursor-pointer" style={{ padding: '12px 24px', textDecoration: 'none', display: 'inline-block' }}>
        Download Resume
      </a>
    </div>
  </div>

  {/* RIGHT SIDE - contact info */}
  <div style={{ flex: '0 0 240px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <a href="https://github.com/milanbudhathoki38" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#6b7280' }}>
      <span style={{ fontSize: '20px' }}>⌥</span>
      <div>
        <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>GitHub</p>
        <p style={{ fontSize: '14px', color: '#374151' }}>milanbudhathoki38</p>
      </div>
    </a>
    <a href="mailto:milan.budhatho1@smail.astate.edu" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#6b7280' }}>
      <span style={{ fontSize: '20px' }}>✉</span>
      <div>
        <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Email</p>
        <p style={{ fontSize: '14px', color: '#374151' }}>milan.budhatho1@smail.astate.edu</p>
      </div>
    </a>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '20px' }}>◎</span>
      <div>
        <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Location</p>
        <p style={{ fontSize: '14px', color: '#374151' }}>Jonesboro, AR</p>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '20px' }}>◈</span>
      <div>
        <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Status</p>
        <p style={{ fontSize: '14px', color: '#374151' }}>Open to internships</p>
      </div>
    </div>
  </div>

</section>

      <hr className="border-gray-200" style={{ marginTop: '0px', marginBottom: '0px' }} />

      {/* ABOUT SECTION */}
      <section id="about" style={{ padding: '20px 0' }}>
        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          About Me
        </p>
        <h2 className="text-4xl font-semibold text-gray-900" style={{ marginBottom: '20px', marginTop: '12px' }}>
          A little about me.
        </h2>
        <div className="max-w-2xl flex flex-col" style={{ gap: '24px' }}>
          <p className="text-lg text-gray-500 leading-relaxed">
            I am a CS student who started college placing into intermediate algebra
            and ended up pursuing a math minor because I fell in love with it.
            There is a beauty in mathematics — a truth — that I did not expect to find.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            I am drawn to problems that make me think — whether that's algorithms,
            calculus, or figuring out how the web actually works under the hood.
            Outside of class I build real projects from scratch because
            I learn best by making things.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Currently studying CS with a Mathematics minor.
            Always building, always learning.
          </p>
        </div>
      </section>

      <hr className="border-gray-200" style={{ marginTop: '0px', marginBottom: '0px' }} />

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ padding: '20px 0' }}>
        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Projects
        </p>
        <h2 className="text-4xl font-semibold text-gray-900" style={{ marginBottom: '20px', marginTop: '12px' }}>
          Things I have built.
        </h2>

        <div className="flex flex-col" style={{ gap: '20px' }}>

             {/* Project 1 */}
          <div className="rounded-2xl hover:bg-gray-100 transition-colors" style={{ background: '#f9fafb', padding: '24px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '12px' }}>
              <h3 className="text-xl font-semibold text-gray-900">Digital Logic Projects</h3>
              <span className="text-sm text-gray-400">2024</span>
            </div>
            <p className="text-gray-500 leading-relaxed" style={{ marginBottom: '20px' }}>
              A collection of digital logic projects including a 7-segment display,
              logic gates, and circuit design from Intro to Digital Logic coursework.
            </p>
            <div className="flex gap-2" style={{ marginBottom: '20px' }}>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>Digital Logic</span>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>Circuit Design</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/milanbudhathoki38/digital-logic-labs" target="_blank" className="text-sm text-blue-600 hover:underline">GitHub →</a>
            </div>
          </div>


      

         {/* Project 2 */}
          <div className="rounded-2xl hover:bg-gray-100 transition-colors" style={{ background: '#f9fafb', padding: '24px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '12px' }}>
              <h3 className="text-xl font-semibold text-gray-900">Dragon Minigame</h3>
              <span className="text-sm text-gray-400">2024</span>
            </div>
            <p className="text-gray-500 leading-relaxed" style={{ marginBottom: '20px' }}>
              A text-based RPG minigame built in C++ using object oriented programming.
              Features multiple classes, inheritance, and game logic spread across 10+ files.
            </p>
            <div className="flex gap-2" style={{ marginBottom: '20px' }}>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>C++</span>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>OOP</span>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>Git</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/milanbudhathoki38/dragon-minigame" target="_blank" style={{ fontSize: '14px', color: '#2563eb', textDecoration: 'none' }}>GitHub →</a>
            </div>
          </div>
             
    

          {/* Project 3 */}
          <div className="rounded-2xl hover:bg-gray-100 transition-colors" style={{ background: '#f9fafb', padding: '24px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '12px' }}>
              <h3 className="text-xl font-semibold text-gray-900">Portfolio Website</h3>
              <span className="text-sm text-gray-400">2025</span>
            </div>
            <p className="text-gray-500 leading-relaxed" style={{ marginBottom: '20px' }}>
              Designed and built this portfolio from scratch — frontend, backend, and deployment.
              Built with Next.js and Tailwind CSS, deployed on Vercel.
            </p>
            <div className="flex gap-2" style={{ marginBottom: '20px' }}>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>Next.js</span>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>React</span>
              <span className="text-xs text-gray-500 rounded-full" style={{ background: 'white', border: '1px solid #e5e7eb', padding: '4px 12px' }}>Tailwind CSS</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/milanbudhathoki38/portfolio" target="_blank" style={{ fontSize: '14px', color: '#2563eb' }}>GitHub →</a>
              <a href="https://portfolio-delta-sandy-5ee88992ad.vercel.app" target="_blank" style={{ fontSize: '14px', color: '#2563eb' }}>Live Demo →</a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" style={{ marginTop: '0px', marginBottom: '0px' }} />

      {/* SKILLS SECTION */}
      <section id="skills" style={{ padding: '20px 0' }}>
        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Skills
        </p>
        <h2 className="text-4xl font-semibold text-gray-900" style={{ marginBottom: '20px', marginTop: '12px' }}>
          What I work with.
        </h2>

        <div className="flex flex-col" style={{ gap: '32px' }}>

          <div>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Languages</p>
            <div className="flex flex-wrap" style={{ gap: '10px' }}>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>C++</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Python</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>JavaScript</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>HTML & CSS</span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Frameworks & Tools</p>
            <div className="flex flex-wrap" style={{ gap: '10px' }}>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>React</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Next.js</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Tailwind CSS</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Git</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>GitHub</span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Concepts</p>
            <div className="flex flex-wrap" style={{ gap: '10px' }}>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>OOP</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Data Structures</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Algorithms</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Digital Logic</span>
              <span className="text-gray-600 rounded-lg text-sm" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '8px 16px' }}>Network Troubleshooting</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-gray-200" style={{ marginTop: '0px', marginBottom: '0px' }} />

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{ padding: '20px 0' }}>
        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Experience
        </p>
        <h2 className="text-4xl font-semibold text-gray-900" style={{ marginBottom: '20px', marginTop: '12px' }}>
          Where I have worked.
        </h2>

        <div className="flex flex-col" style={{ gap: '24px' }}>

          <div className="rounded-2xl" style={{ background: '#f9fafb', padding: '32px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '8px' }}>
              <h3 className="text-xl font-semibold text-gray-900">IT Student Intern</h3>
              <span className="text-sm text-gray-400">Jan 2025 – Jul 2025</span>
            </div>
            <a href="https://www.lyon.edu" target="_blank" style={{ fontSize: '14px', color: '#2563eb', marginBottom: '16px', display: 'block', textDecoration: 'none' }}>Lyon College →</a>
            <ul className="flex flex-col" style={{ gap: '8px' }}>
              <li className="text-gray-500 text-sm leading-relaxed">→ Provided technical support for campus hardware and software systems</li>
              <li className="text-gray-500 text-sm leading-relaxed">→ Assisted with network troubleshooting and system maintenance</li>
              <li className="text-gray-500 text-sm leading-relaxed">→ Configured and deployed new workstations on the Lyon domain</li>
            </ul>
          </div>

          <div className="rounded-2xl" style={{ background: '#f9fafb', padding: '32px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '8px' }}>
              <h3 className="text-xl font-semibold text-gray-900">Math Tutor</h3>
              <span className="text-sm text-gray-400">Aug 2024 – May 2025</span>
            </div>
            <a href="https://www.lyon.edu" target="_blank" style={{ fontSize: '14px', color: '#2563eb', marginBottom: '16px', display: 'block', textDecoration: 'none' }}>Lyon College →</a>
            <ul className="flex flex-col" style={{ gap: '8px' }}>
              <li className="text-gray-500 text-sm leading-relaxed">→ Tutored students in foundational mathematics improving understanding and performance</li>
              <li className="text-gray-500 text-sm leading-relaxed">→ Assisted with problem-solving and exam preparation in a peer-learning setting</li>
            </ul>
          </div>

        </div>
      </section>

      <hr className="border-gray-200" style={{ marginTop: '0px', marginBottom: '0px' }} />

      {/* CONTACT SECTION */}
      <section id="contact" style={{ padding: '20px 0' }}>
        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Contact
        </p>
        <h2 className="text-4xl font-semibold text-gray-900" style={{ marginBottom: '12px', marginTop: '12px' }}>
          Let's talk.
        </h2>
        <p className="text-gray-500" style={{ marginBottom: '40px' }}>
          Open to internship opportunities, collaborations, or just a good conversation about code and math.
        </p>

        <div style={{ maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif' }}
          />
          <textarea
            placeholder="Your message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '15px', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'none' }}
          />
          <button
            onClick={handleSubmit}
            style={{ background: '#111827', color: 'white', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent!' : 'Send message →'}
          </button>
          {status === 'error' && (
            <p style={{ color: 'red', fontSize: '14px' }}>Something went wrong. Please try again.</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid #e5e7eb', marginTop: '0px' }}>
        <p style={{ fontSize: '13px', color: '#9ca3af' }}>
          © 2025 Milan Budhathoki · Built with Next.js
        </p>
      </footer>

    </main>
  )
}