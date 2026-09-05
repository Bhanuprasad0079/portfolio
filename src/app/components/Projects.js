"use client";

import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import Fade from "./Fade";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    title: "AgroNXT",
    cover: "/images/agro.png",
    github: "https://github.com/Bhanuprasad0079/AgroNXT",
    external: "https://agro-nxt.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "SQLite",
    ],
    desc: (
      <>
        A smart farming decision and planning platform that helps farmers make
        data-driven decisions through crop recommendations, ROI estimation,
        weather insights, soil health analysis, crop calendars, and crop disease
        detection. Built with Next.js and Python-based machine learning APIs.
      </>
    ),
  },
  {
    title: "Grievance Management System",
    cover: "/images/gms.png",
    alt: true,
    github: "https://github.com/Bhanuprasad0079/GMS",
    external: "https://gms-sigma.vercel.app/",
    tech: ["Next.js", "TypeScript", ".NET", "REST API", "SQL"],
    desc: (
      <>
        A full-stack grievance management platform developed during my
        internship to streamline the process of submitting, tracking, and
        managing user complaints. Built with a Next.js frontend and .NET
        backend, with a focus on a clean interface and efficient grievance
        workflow.
      </>
    ),
  },
];

const other = [
  {
    title: "AgroNXT",
    desc: "A full-stack smart farming decision and planning system that provides crop recommendations, weather insights, soil health analysis, disease detection, and farm profitability estimates.",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI"],
    links: ["github", "external"], // ← added "external"
    github: "https://github.com/Bhanuprasad0079/AgroNXT",
    url: "https://agro-nxt.vercel.app/",
  },
  {
    title: "Grievance Management System",
    desc: "A full-stack web application for submitting, tracking, and managing grievances through a streamlined digital workflow.",
    tech: ["Next.js", "ASP.NET Core", "PostgreSQL"],
    links: ["github", "external"], // ← added "external"
    github: "https://github.com/Bhanuprasad0079/GMS",
    url: "https://gms-sigma.vercel.app/",
  },
  {
    title: "Expense Tracker",
    desc: "A simple web application for tracking and managing personal expenses with an intuitive interface and dynamic expense calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: ["github", "external"], // ← added "external"
    github: "https://github.com/Bhanuprasad0079/expensetracker",
    url: "https://expense-tracker-app-three-beryl.vercel.app/login",
  },
];

const LinkIcons = ({ github, external }) => (
  <div className="card-links">
    {github && (
      <a aria-label="GitHub" href={github} target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    )}
    {external && (
      <a aria-label="External" href={external} target="_blank" rel="noreferrer">
        <FaExternalLinkAlt />
      </a>
    )}
  </div>
);

export default function Projects() {
  return (
    <section className="section" id="work">
      <SectionHeading num="03" title="Some Things I've Built" />

      {featured.map((p) => (
        <Fade key={p.title} delay={0.1}>
          <article className={`project ${p.alt ? "alt" : ""}`}>
            <div className="project-image">
              <a href={p.external || p.github} target="_blank" rel="noreferrer">
                <img src={p.cover} alt={p.title} />
              </a>
            </div>

            <div className="project-content">
              <p className="project-overline">Featured Project</p>

              <h3 className="project-title">
                <a href={p.external} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </h3>

              <div className="project-desc">
                <p>{p.desc}</p>
              </div>

              <ul className="project-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub repository`}
                  >
                    <FaGithub />
                  </a>
                )}
                {p.external && (
                  <a
                    href={p.external}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live website`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>

              {p.cta && (
                <div className="project-cta">
                  <a
                    className="btn small"
                    href={p.external}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.cta}
                  </a>
                </div>
              )}
            </div>
          </article>
        </Fade>
      ))}

      <Fade className="other-heading">
        <h3>GitHub repository</h3>
        <a
          className="archive-link"
          href="https://github.com/Bhanuprasad0079"
          target="_blank"
          rel="noreferrer"
        >
          view the archive
        </a>
      </Fade>

      <div className="other-grid">
        {other.map((p, i) => (
          <Fade key={p.title} delay={0.05 * (i % 3)}>
            <div className="other-card">
              <div className="card-top">
                <FaFolder className="card-folder" />

                {/* ✓ FIXED: pass the right URLs to each icon */}
                <LinkIcons
                  github={p.links.includes("github") ? p.github : null}
                  external={p.links.includes("external") ? p.url : null}
                />
              </div>

              <h4 className="card-title">
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </h4>

              <p className="card-desc">{p.desc}</p>

              <ul className="card-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Fade>
        ))}
      </div>

      <Fade className="show-more-wrap">
        <a
          className="btn"
          href="https://github.com/Bhanuprasad0079"
          target="_blank"
          rel="noreferrer"
        >
          Show More
        </a>
      </Fade>
    </section>
  );
}
