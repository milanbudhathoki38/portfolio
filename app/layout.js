import './globals.css'
import Navbar from './Navbar'

export const metadata = {
  title: 'Milan Budhathoki',
  description: 'CS Student & Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ paddingTop: '60px' }}>
          {children}
        </div>
      </body>
    </html>
  )
}