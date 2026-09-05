"use client";

import Fade from './Fade';
import { useContact } from './ContactModal';

export default function Contact() {
  const { openContact } = useContact();

  return (
    <section className="contact" id="contact">
      <Fade>
        <p className="contact-overline">04. What's Next?</p>
        <h2 className="contact-title">Get In Touch</h2>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <button className="btn" onClick={openContact}>Say Hello</button>
      </Fade>
    </section>
  );
}