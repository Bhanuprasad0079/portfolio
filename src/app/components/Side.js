// "use client";

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaCodepen } from 'react-icons/fa';

// const socials = [
//   { icon: <FaGithub />, href: 'https://github.com/Bhanuprasad0079' },
//   { icon: <FaInstagram />, href: 'https://www.instagram.com/bhanuprasad01/?hl=en' },
//   { icon: <FaTwitter />, href: 'https://twitter.com' },
//   { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/bhanu-prasad-khuntia-168849202/' },
//   { icon: <FaCodepen />, href: 'https://codepen.io' },
// ];

// export default function Side() {
//   return (
//     <>
//       <motion.div
//         className="side side-left"
//         initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1 }}
//       >
//         <ul>
//           {socials.map((s, i) => (
//             <li key={i}>
//               <a className="icon-link" href={s.href} target="_blank" rel="noreferrer">{s.icon}</a>
//             </li>
//           ))}
//         </ul>
//       </motion.div>

//       <motion.div
//         className="side side-right"
//         initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1.1 }}
//       >
//         <a className="email-link" href="mailto:akabhanuprasad@gmail.com">
//           akabhanuprasad@gmail.com
//         </a>
//       </motion.div>
//     </>
//   );
// }

"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { useContact } from './ContactModal';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Bhanuprasad0079' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/bhanuprasad01/?hl=en' },
  { icon: <FaTwitter />, href: 'https://x.com/Akash_4481' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/bhanu-prasad-khuntia-168849202/' },
];

export default function Side() {
  const { openContact } = useContact();

  return (
    <>
      <motion.div
        className="side side-left"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ul>
          {socials.map((s, i) => (
            <li key={i}>
              <a className="icon-link" href={s.href} target="_blank" rel="noreferrer">{s.icon}</a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="side side-right"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <a
          className="email-link"
          href="mailto:akabhanuprasad@gmail.com"
          onClick={(e) => { e.preventDefault(); openContact(); }}
        >
          akabhanuprasad@gmail.com
        </a>
      </motion.div>
    </>
  );
}