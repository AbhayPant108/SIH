import React from 'react';

export default function Contact() {
  return (
    <div className="grid cols-2">
      <div className="card" style={{ display: 'grid', gap: 12 }}>
        <button className="btn danger" style={{ fontSize: 18 }}>🚑 SOS</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="icon-circle">📞</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 20 }}>Toll-free: 1800-123-456</div>
            <div className="muted" style={{ fontSize: 14 }}>Available 24x7</div>
          </div>
        </div>
      </div>
      <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <img src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1000&auto=format&fit=crop" alt="Helpdesk" style={{ width: 140, height: 100, objectFit: 'cover', borderRadius: 12 }} />
        <div>
          <div style={{ fontWeight: 600 }}>Helpdesk</div>
          <div className="muted" style={{ fontSize: 14 }}>Doctor support with headset</div>
        </div>
      </div>
    </div>
  );
}




