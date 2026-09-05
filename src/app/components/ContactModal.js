"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope, FaPhoneAlt, FaLinkedinIn,
  FaCopy, FaCheck, FaTimes, FaExternalLinkAlt,
} from 'react-icons/fa';

/* ===== EDIT THESE ===== */
const EMAIL = 'akabhanuprasad@gmail.com';
const PHONE = '+91 7735034481 ';
const LINKEDIN = 'https://www.linkedin.com/in/bhanu-prasad-khuntia-168849202/';
/* ======================= */

const ContactContext = createContext(null);
export const useContact = () => useContext(ContactContext);

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(null);

  // close on Escape + lock scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <ContactContext.Provider value={{ openContact: () => setOpen(true) }}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="contact-modal-backdrop"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
                <FaTimes />
              </button>

              <p className="modal-overline">04. What's Next?</p>
              <h3 className="modal-title">Choose how to reach me</h3>

              {/* EMAIL */}
              <div className="modal-option">
                <div className="modal-option-info">
                  <FaEnvelope className="modal-icon" />
                  <div>
                    <p className="modal-label">Email</p>
                    <p className="modal-value">{EMAIL}</p>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="btn tiny" onClick={() => copy(EMAIL, 'email')}>
                    {copied === 'email' ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                  </button>
                  <a className="btn tiny" href={`mailto:${EMAIL}`}>Open</a>
                </div>
              </div>

              {/* PHONE */}
              <div className="modal-option">
                <div className="modal-option-info">
                  <FaPhoneAlt className="modal-icon" />
                  <div>
                    <p className="modal-label">Phone</p>
                    <p className="modal-value">{PHONE}</p>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="btn tiny" onClick={() => copy(PHONE, 'phone')}>
                    {copied === 'phone' ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                  </button>
                  <a className="btn tiny" href={`tel:${PHONE.replace(/\s/g, '')}`}>Call</a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="modal-option">
                <div className="modal-option-info">
                  <FaLinkedinIn className="modal-icon" />
                  <div>
                    <p className="modal-label">LinkedIn</p>
                    <p className="modal-value">Connect with me professionally</p>
                  </div>
                </div>
                <div className="modal-actions">
                  <a className="btn tiny" href={LINKEDIN} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Open
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}