"use client";

import { useState } from 'react';
import Fade from './Fade';
import SectionHeading from './SectionHeading';

const skills = [
  'Python',
  'C++',
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
];

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading num="01" title="About Me" />
      <div className="about-grid">
        <Fade delay={0.1}>
          <div className="about-text">
  <p>
    Hello! My name is Bhanu and I enjoy building full-stack applications and digital experiences that live on the web.
    My journey in software development began during my Computer Science Engineering studies, where crafting interactive user interfaces and writing efficient backend logic sparked my passion for engineering robust web systems.
  </p>
  <p>
    Fast-forward to today, and I've had the privilege of completing internships across dynamic software environments like{' '}
    <a className="inline-link" href="#experience">Chatbot Solutions</a>,{' '}
    <a className="inline-link" href="#experience">Web_Bocket</a>, and{' '}
    <a className="inline-link" href="#experience">OCAC</a>. My main focus these days is mastering software testing methodologies, designing robust backend APIs, and building seamless web applications using modern web stacks.
  </p>
  <p>
  I recently built and deployed{' '}
  <a
    className="inline-link"
    href="https://agro-nxt.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    AgroNXT
  </a>
  , a full-stack Smart Farming Decision & Planning System that combines
  Next.js, TypeScript, Python, FastAPI, and machine learning to help farmers
  make data-driven decisions about crop selection, soil health, weather,
  disease detection, and farm profitability.
</p>

<p>Here are a few technologies I've been working with recently:</p>
  <ul className="skills-list">
    {skills.map((s) => <li key={s}>{s}</li>)}
  </ul>
</div>
        </Fade>
        <Fade delay={0.2}>
          <div className="photo-frame">
            <img src="/images/me.jpeg" alt="Portrait" />
          </div>
        </Fade>
      </div>
    </section>
  );
}