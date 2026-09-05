import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
}