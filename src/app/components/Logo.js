export default function Logo() {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="logo-hex"
        d="M60 6 108 33v54L60 114 12 87V33L60 6Z"
        stroke="var(--green)"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <text className="logo-letter" x="60" y="76">B</text>
    </svg>
  );
}