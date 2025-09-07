import React, { useState } from 'react';

export default function Symptom() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Describe your symptoms. I can help with guidance.' },
  ]);

  function send() {
    if (!input.trim()) return;
    const next = [...messages, { role: 'user', text: input }];
    // Mock AI reply
    next.push({ role: 'ai', text: 'Consider hydration and rest. Seek doctor if persistent.' });
    setMessages(next);
    setInput('');
  }

  return (
    <div className="grid cols-2">
      <div className="grid" style={{ gap: 12 }}>
        <div className="card" style={{ background: `url(https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop) center/cover`, minHeight: 180 }} />
        <div className="chat">
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.role === 'user' ? 'user' : 'ai'}`}>{m.text}</div>
          ))}
        </div>
        <div className="card" style={{ display: 'flex', gap: 8 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your symptom"
            style={{ flex: 1, padding: '12px 14px', borderRadius: 10, border: '1px solid #e1e8f0' }}
          />
          <button className="btn secondary" onClick={send}>Send</button>
          <button className="btn ghost" title="Voice input">🎤</button>
        </div>
      </div>
      <div className="card">
        <h3>Note</h3>
        <p className="muted">This tool provides guidance and does not replace professional medical advice.</p>
      </div>
    </div>
  );
}



