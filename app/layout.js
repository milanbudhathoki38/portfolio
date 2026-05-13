import './globals.css'

export const metadata = {
  title: 'Milan Budhathoki',
  description: 'CS Student & Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f3f4f6',
          padding: '0 48px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
            Milan Budhathoki
          </span>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#about" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Projects</a>
            <a href="#skills" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Skills</a>
            <a href="#experience" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Experience</a>
            <a href="#contact" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>
        <div style={{ paddingTop: '60px' }}>
          {children}
        </div>
      </body>
    </html>
  )
}