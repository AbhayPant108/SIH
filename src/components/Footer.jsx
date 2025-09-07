import React from 'react'

function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div>© {new Date().getFullYear()} Telemedicine Nabha</div>
            <div className="muted">Healthcare at Your Doorstep – Anytime, Anywhere</div>
          </div>
        </div>
      </footer>
  )
}

export default Footer