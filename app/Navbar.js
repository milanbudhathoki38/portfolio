'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="#about" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Projects</a>
        <a href="#skills" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Skills</a>
        <a href="#experience" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Experience</a>
        <a href="#contact" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>Contact</a>
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
    </nav>
  )
}