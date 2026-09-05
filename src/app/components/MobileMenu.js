"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "./Header";

export default function MobileMenu({ open, setOpen }) {
  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <ul>
            {NAV_LINKS.map((l, i) => (
              <motion.li
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              >
                <a href={l.href} onClick={close}>
                  <span className="num">{l.num}.</span> {l.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + NAV_LINKS.length * 0.08 }}
            >
              <a
                className="btn"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
