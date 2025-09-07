import React, { useRef, useState } from 'react';

const posters = [
  'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584291527935-456e8e2dd734?q=80&w=1200&auto=format&fit=crop',
];

export default function Awareness() {
  const scroller = useRef(null);
  const [quizAnswer, setQuizAnswer] = useState('');
  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }} ref={scroller}>
          {posters.map((src, i) => (
            <img key={i} src={src} alt={`Poster ${i + 1}`} style={{ width: 320, height: 180, borderRadius: 12 }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button className="btn ghost" onClick={() => scroller.current && (scroller.current.scrollLeft -= 320)}>◀</button>
          <button className="btn ghost" onClick={() => scroller.current && (scroller.current.scrollLeft += 320)}>▶</button>
        </div>
      </div>

      <div className="grid cols-2">
        <div className="card">
          <h3>Seasonal Diseases</h3>
          <div className="grid cols-3">
            {[1,2,3].map(i => (
              <img key={i} src={`https://img.youtube.com/vi/dQw4w9WgXcQ/${i}.jpg`} alt={`Video ${i}`} />
            ))}
          </div>
        </div>
        <div className="card">
          <h3>Quick Quiz</h3>
          <p className="muted">How often should you wash hands each day?</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['1-2 times', '3-5 times', 'Before meals & after outdoors'].map(opt => (
              <button key={opt} className="btn ghost" onClick={() => setQuizAnswer(opt)}>{opt}</button>
            ))}
          </div>
          {quizAnswer && (
            <div style={{ marginTop: 10 }} className="muted">
              {quizAnswer === 'Before meals & after outdoors' ? 'Correct! Keep hands clean to prevent disease.' : 'Try again. Hygiene is key!'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




