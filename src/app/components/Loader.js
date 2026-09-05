"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onFinish }) {
  const [showLetter, setShowLetter] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLetter(true), 1100); // hexagon finished drawing
    const t2 = setTimeout(() => setExit(true), 2100);       // start fading out
    const t3 = setTimeout(() => onFinish(), 2700);          // remove loader
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <motion.div
      className="loader"
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <svg className="loader-logo" viewBox="0 0 120 120" fill="none">
        <path
          className="loader-hex"
          d="M60 6 108 33v54L60 114 12 87V33L60 6Z"
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <text className={`loader-letter ${showLetter ? 'show' : ''}`} x="60" y="76">
          B
        </text>
      </svg>
    </motion.div>
  );
}