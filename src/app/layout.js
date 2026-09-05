import './styles/globals.css';
import { Inter, Fira_Code } from 'next/font/google';

export const metadata = {
  title: 'Bhanu Prasad Khuntia| Software Engineer',
  description: 'I build things for the web.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`app ${inter.variable} ${fira.variable}`}
        style={{ backgroundColor: '#0a192f' }}
      >
        {children}
      </body>
    </html>
  );
}