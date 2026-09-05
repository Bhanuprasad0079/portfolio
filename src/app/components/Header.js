"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';      // <--- CHANGED '/Logo' to './Logo'
import MobileMenu from './MobileMenu';

export const NAV_LINKS = [
  { num: '01', name: 'About', href: '#about' },
  { num: '02', name: 'Experience', href: '#experience' },
  { num: '03', name: 'Work', href: '#work' },
  { num: '04', name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(!open && y > lastY.current && y > 90);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
        <motion.a
          className="logo" href="#top" aria-label="Home"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Logo />
        </motion.a>

        <motion.nav
          className="nav"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.name}>
                <a className="nav-link" href={l.href}>
                  <span className="num">{l.num}.</span> {l.name}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn small" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

        </motion.nav>
      </header>
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}