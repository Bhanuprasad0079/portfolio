"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fade from './Fade';
import SectionHeading from './SectionHeading';


const jobs = [
  {
    company: 'ChatBot Solutions Pvt. Ltd.',
    role: 'Software Engineering Intern',
    range: 'Oct 2025 – Apr 2026',
    url: '#',
    bullets: [
      'Developed and optimized full-stack web applications using Next.js, React, and ASP.NET Core API backends.',
      'Designed and executed database schemas, queries, and integrations with PostgreSQL to handle application data reliably.',
      'Collaborated using Git and GitHub for daily code commits, code reviews, and version control workflows.',
    ],
  },
  {
    company: 'Web_Bocket',
    role: 'Software Development Intern',
    range: 'Jun 2024 – Jul 2024',
    url: '#',
    bullets: [
      'Developed responsive web interfaces using React, JavaScript, and modern CSS as part of a MERN stack application.',
      'Integrated REST APIs with React components to fetch, display, and manage dynamic application data.',
      'Worked with MongoDB and Node.js/Express to understand and implement basic full-stack application workflows.',
    ],
  },
  {
    company: 'OCAC',
    role: 'Core Java Intern',
    range: 'Jul 2023 – Aug 2023',
    url: '#',
    bullets: [
      'Strengthened Core Java fundamentals through hands-on programming and Object-Oriented Programming concepts.',
      'Developed Java programs using classes, inheritance, polymorphism, exception handling, and collections.',
      'Practiced problem-solving and implemented small console-based applications using Java.',
    ],
  },
]

export default function Jobs() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section className="section" id="experience">
      <SectionHeading num="02" title="Where I've Worked" />
      <Fade delay={0.1}>
        <div className="jobs">
          <div className="jobs-tabs" role="tablist">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                role="tab"
                className={`jobs-tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {j.company}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <h3 className="job-role">
                {job.role}{' '}
                <a className="company" href={job.url} target="_blank" rel="noreferrer">
                  @ {job.company}
                </a>
              </h3>
              <p className="job-range">{job.range}</p>
              <ul className="job-bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Fade>
    </section>
  );
}