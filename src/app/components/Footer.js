"use client";

import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Bhanuprasad0079" },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/bhanuprasad01/?hl=en",
  },
  { icon: <FaTwitter />, href: "https://x.com/Akash_4481" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/bhanu-prasad-khuntia-168849202/",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* horizontal icon row — only visible when side rails are hidden */}
      <ul className="footer-socials">
        {socials.map((s, i) => (
          <li key={i}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Social link"
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://github.com/Bhanuprasad0079"
        target="_blank"
        rel="noreferrer"
      >
        VibeCoded by Bhanu Prasad Khuntia
      </a>
    </footer>
  );
}
