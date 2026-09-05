"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.645, 0.045, 0.355, 1];
const container = { show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="hero-overline">Hi, my name is</motion.p>
        <motion.h1 variants={item} className="hero-title">Bhanu Prasad Khuntia.</motion.h1>
        <motion.h2 variants={item} className="hero-subtitle">I build things for the web.</motion.h2>
        <motion.p variants={item} className="hero-desc">
          I’m a software engineer specializing in building (and testing) robust digital experiences. Currently, I’m focused on crafting full-stack web applications with Next.js, Python, and PostgreSQL.
      </motion.p>
        <motion.div variants={item}>
          <a className="btn" href="https://agro-nxt.vercel.app/" target="_blank" rel="noreferrer">
            Check out my latest work!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}