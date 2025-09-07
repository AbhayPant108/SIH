import React, { useMemo, useState } from 'react';

const allMeds = [
  { name: 'Paracetamol 500mg', stock: true },
  { name: 'Amoxicillin 250mg', stock: false },
  { name: 'ORS Sachet', stock: true },
  { name: 'Cough Syrup', stock: true },
  { name: 'Ibuprofen 200mg', stock: false },
];

export default function Medicines() {
  const [q, setQ] = useState('');
  const meds = useMemo(() => allMeds.filter(m => m.name.toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <div className="grid cols-2">
      <div className="card">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
          <span className="icon-circle" aria-hidden>💊</span>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search medicine"
            style={{ flex: 1, padding: '12px 14px', borderRadius: 10, border: '1px solid #e1e8f0' }}
          />
        </div>
        <table className="table">
          <thead>
            <tr><th>Medicine</th><th>Status</th></tr>
          </thead>
          <tbody>
            {meds.map(m => (
              <tr key={m.name}>
                <td>{m.name}</td>
                <td>{m.stock ? '✓ Available' : '✗ Out of stock'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid" style={{ gap: 16 }}>
        <div className="map-box">Mini-map with pharmacies</div>
        <div className="card grid cols-3">
          <img src="https://images.unsplash.com/photo-1587854692152-0217c0f79c31?q=80&w=800&auto=format&fit=crop" alt="Pharmacy" />
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" alt="Medicines" />
          <img src="https://images.unsplash.com/photo-1584291527935-456e8e2dd734?q=80&w=800&auto=format&fit=crop" alt="Medicine kit" />
        </div>
      </div>
    </div>
  );
}




