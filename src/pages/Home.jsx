import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='grid gap-6 sm:gap-8'>
      {/* Hero Section */}
      <section
  className="text-center px-4 sm:px-5 py-12 sm:py-16 bg-gradient-to-br from-[var(--surface)] to-[#e8f4fd] rounded-2xl mb-4 sm:mb-5"
>
  <h1
    className="font-bold text-[clamp(2.5rem,5vw,4rem)] mb-5 text-[var(--text)]">
    Healthcare at Your Doorstep
  </h1>

  <p
    className="text-[clamp(1.1rem,2.5vw,1.3rem)] text-[var(--muted)] mb-8 max-w-[600px] mx-auto
    "
  >
    Get professional medical consultation, order medicines, and access healthcare
    records anytime, anywhere with Telemedicine Nabha.
  </p>

  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
    <Link
      to="/consult"
      className="btn primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
    >
      🩺 Start Consultation
    </Link>
    <Link
      to="/medicines"
      className="btn secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
    >
      💊 Order Medicines
    </Link>
  </div>
</section>


      {/* Quick Actions Grid */}
      <section>
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Quick Access</h2>

  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5">
    <Link
      to="/symptoms"
      className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 transition duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg rounded-xl bg-white"
    >
      <span className="text-3xl sm:text-4xl">🔍</span>
      <div>
        <div className="font-semibold text-base sm:text-lg mb-1">Symptom Checker</div>
        <div className="text-[var(--muted)] text-sm sm:text-base">
          Check your symptoms and get preliminary guidance
        </div>
      </div>
    </Link>

    <Link
      to="/records"
      className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 transition duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg rounded-xl bg-white"
    >
      <span className="text-3xl sm:text-4xl">📋</span>
      <div>
        <div className="font-semibold text-base sm:text-lg mb-1">Health Records</div>
        <div className="text-[var(--muted)] text-sm sm:text-base">
          Access your medical history and reports
        </div>
      </div>
    </Link>

    <Link
      to="/awareness"
      className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 transition duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg rounded-xl bg-white"
    >
      <span className="text-3xl sm:text-4xl">📚</span>
      <div>
        <div className="font-semibold text-base sm:text-lg mb-1">Health Awareness</div>
        <div className="text-[var(--muted)] text-sm sm:text-base">
          Learn about preventive healthcare
        </div>
      </div>
    </Link>

    <Link
      to="/contact"
      className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 transition duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg rounded-xl bg-white"
    >
      <span className="text-3xl sm:text-4xl">📞</span>
      <div>
        <div className="font-semibold text-base sm:text-lg mb-1">Emergency Contact</div>
        <div className="text-[var(--muted)] text-sm sm:text-base">
          24/7 emergency support available
        </div>
      </div>
    </Link>
  </div>
</section>


      {/* Features Section */}
      <section className="bg-[var(--surface)] px-4 sm:px-5 py-8 sm:py-10 rounded-2xl text-center">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
    Why Choose Telemedicine Nabha?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
    <div>
      <div className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--green)] text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
        ⚡
      </div>
      <h3 className="font-semibold mb-2 sm:mb-3">Instant Access</h3>
      <p className="text-[var(--muted)] m-0 text-sm sm:text-base">
        Get medical consultation within minutes, no waiting in queues
      </p>
    </div>

    <div>
      <div className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--blue)] text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
        👨‍⚕️
      </div>
      <h3 className="font-semibold mb-2 sm:mb-3">Expert Doctors</h3>
      <p className="text-[var(--muted)] m-0 text-sm sm:text-base">
        Consult with qualified healthcare professionals
      </p>
    </div>

    <div>
      <div className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 rounded-full bg-[var(--green)] text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
        🔒
      </div>
      <h3 className="font-semibold mb-2 sm:mb-3">Secure & Private</h3>
      <p className="text-[var(--muted)] m-0 text-sm sm:text-base">
        Your health information is completely confidential
      </p>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="text-center">
  <div className="rounded-2xl px-4 sm:px-5 py-8 sm:py-10 bg-gradient-to-br from-[var(--blue)] to-[var(--green)] text-white">
    <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Ready to Get Started?</h2>
    <p className="text-base sm:text-lg mb-5 sm:mb-6 opacity-90">
      Join thousands of patients who trust Telemedicine Nabha for their
      healthcare needs
    </p>
    <Link
      to="/consult"
      className="inline-block bg-white text-[var(--blue)] text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl hover:shadow-md transition"
    >
      Start Your Health Journey Today
    </Link>
  </div>
</section>

    </div>
  );
}
