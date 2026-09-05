"use client";

import { useState } from 'react';
import Fade from './Fade';

export default function SectionHeading({ num, title }) {
  return (
    <Fade>
      <h2 className="section-heading">
        <span className="num">{num}.</span> {title}
      </h2>
    </Fade>
  );
}