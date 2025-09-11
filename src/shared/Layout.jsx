import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Header , Footer} from '../components/index';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिं' },
  { code: 'pa', label: 'ਪੰ' },
];

export default function Layout({ children }) {
  const [lang, setLang] = useState('en');

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Header />


      <main className="container flex-grow w-full " style={{ paddingTop: 20, paddingBottom: 20 }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}



