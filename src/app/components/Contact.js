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
          I am currently actively looking for new roles in software development. 
    If you have an opportunity that aligns with my skills, or if you simply want to connect, my inbox is always open!
        </p>
        <button className="btn" onClick={openContact}>Say Hello</button>
      </Fade>
    </section>
  );
}
