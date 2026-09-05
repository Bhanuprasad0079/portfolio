"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Fade({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.645, 0.045, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
}