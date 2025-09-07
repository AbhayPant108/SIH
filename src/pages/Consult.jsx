import React from 'react';

const doctors = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Dr. Singh ${i + 1}`,
  specialization: i % 2 === 0 ? 'General Physician' : 'Pediatrics',
  online: i % 3 !== 0,
  photo: `https://i.pravatar.cc/150?img=${i + 10}`,
}));

export default function Consult() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <img src="https://i.pravatar.cc/80?img=5" alt="Patient avatar" style={{ width: 56, height: 56, borderRadius: 12 }} />
        <div>
          <div style={{ fontWeight: 700 }}>Welcome back</div>
          <div className="muted" style={{ fontSize: 14 }}>Find an available doctor below</div>
        </div>
      </div>

      <div className="grid cols-4">
        {doctors.map(d => (
          <div key={d.id} className="card" style={{ textAlign: 'center' }}>
            <img src={d.photo} alt={d.name} style={{ width: 86, height: 86, borderRadius: 16, margin: '0 auto' }} />
            <div style={{ marginTop: 8, fontWeight: 600 }}>{d.name}</div>
            <div className="muted" style={{ fontSize: 14 }}>{d.specialization}</div>
            <div style={{ marginTop: 6 }} className={`badge ${d.online ? 'online' : 'offline'}`}>{d.online ? 'Online' : 'Offline'}</div>
            <button className="btn primary" style={{ marginTop: 10, width: '100%' }} disabled={!d.online}>Start Video Call</button>
          </div>
        ))}
      </div>
    </div>
  );
}




