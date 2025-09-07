import React from 'react';

export default function Records() {
  return (
    <div className="grid cols-2">
      <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <img src="https://i.pravatar.cc/100?img=7" alt="Patient" style={{ width: 80, height: 80, borderRadius: 14 }} />
        <div>
          <div style={{ fontWeight: 700 }}>Gurpreet Kaur</div>
          <div className="muted" style={{ fontSize: 14 }}>Patient ID: NAB12345</div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=NAB12345" alt="QR" />
        </div>
      </div>
      <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 600 }}>Download Records</div>
          <div className="muted" style={{ fontSize: 14 }}>PDF format</div>
        </div>
        <button className="btn ghost">📄 Download PDF</button>
      </div>
      <div className="card" style={{ gridColumn: '1 / -1' }}>
        <h3>Consultation Timeline</h3>
        <div style={{ borderLeft: '3px solid #e7eef5', paddingLeft: 12 }}>
          {[
            { date: '2025-07-14', note: 'Fever and cough. Teleconsult with Dr. Singh.' },
            { date: '2025-08-02', note: 'Follow-up. Improvement noted.' },
            { date: '2025-09-01', note: 'Seasonal allergy guidance provided.' },
          ].map((t, i) => (
            <div key={i} style={{ margin: '12px 0' }}>
              <div style={{ fontWeight: 600 }}>{t.date}</div>
              <div className="muted" style={{ fontSize: 14 }}>{t.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




