import React from 'react';

export default function About() {
  return (
    <div className="grid gap-8">
      <section className="text-center px-5 py-16 bg-gradient-to-br from-[var(--surface)] to-[#e8f4fd] rounded-2xl">
        <h1 className="font-bold text-[clamp(2rem,4vw,3rem)] mb-4 text-[var(--text)]">About Telemedicine Nabha</h1>
        <p className="text-[clamp(1rem,2.2vw,1.2rem)] text-[var(--muted)] max-w-[800px] mx-auto">
          We are building accessible, secure, and patient-first digital healthcare. Our platform connects
          patients with certified doctors, enables medication ordering, and keeps health records at your
          fingertips.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-[var(--muted)] m-0">Make quality healthcare reachable for everyone, anywhere.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <div className="text-4xl mb-3">🔒</div>
          <h3 className="font-semibold mb-2">Privacy First</h3>
          <p className="text-[var(--muted)] m-0">Your medical data is encrypted and handled with care.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="font-semibold mb-2">Patient Centric</h3>
          <p className="text-[var(--muted)] m-0">We prioritize simplicity, clarity, and outcomes.</p>
        </div>
      </section>

      <section className="px-5 py-10 rounded-2xl bg-[var(--surface)]">
        <h2 className="text-2xl font-semibold mb-4 text-center">What We Offer</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-5 bg-white rounded-xl">🩺 Instant video consultations</li>
          <li className="p-5 bg-white rounded-xl">💊 Medicine ordering and delivery</li>
          <li className="p-5 bg-white rounded-xl">📄 Secure health record storage</li>
          <li className="p-5 bg-white rounded-xl">📚 Preventive health awareness</li>
        </ul>
      </section>

      <section className="text-center">
        <div className="rounded-2xl px-5 py-10 bg-gradient-to-br from-[var(--blue)] to-[var(--green)] text-white">
          <h2 className="text-2xl font-semibold mb-3">Have questions?</h2>
          <p className="mb-6 opacity-90">Reach out to our support team anytime.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--blue)] px-6 py-3 font-semibold rounded-xl">Contact Us</a>
        </div>
      </section>
    </div>
  );
}


