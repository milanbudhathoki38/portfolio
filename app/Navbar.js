'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact']

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #f3f4f6',
        padding: '0 24px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
          Milan Budhathoki
        </span>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>
              {link}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            style={{
              background: 'none',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '4px 10px',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#6b7280',
            }}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Mobile right side - dark toggle + hamburger */}
        <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setDark(!dark)}
            style={{
              background: 'none',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '4px 10px',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#6b7280',
            }}
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              color: '#6b7280',
              padding: '4px',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f3f4f6',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 24px',
          gap: '20px',
        }}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '16px', color: '#374151', textDecoration: 'none', fontWeight: '500' }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        html.dark nav {
          background: rgba(17, 24, 39, 0.95) !important;
        }
        html.dark .mobile-nav button,
        html.dark .desktop-nav button,
        html.dark .desktop-nav a {
          color: #9ca3af !important;
          border-color: #374151 !important;
        }
        html.dark div[style*="rgba(255,255,255,0.97)"] {
          background: rgba(17, 24, 39, 0.97) !important;
        }
        html.dark div[style*="rgba(255,255,255,0.97)"] a {
          color: #f9fafb !important;
        }
      `}</style>
    </>
  )
}