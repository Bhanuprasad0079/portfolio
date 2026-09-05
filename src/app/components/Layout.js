"use client";

import { useState } from 'react';
import Header from './Header';
import Side from './Side';
import Footer from './Footer';
import Loader from './Loader';
import { ContactProvider } from './ContactModal';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <ContactProvider>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <Side />
          {children}
          <Footer />
        </>
      )}
    </ContactProvider>
  );
}