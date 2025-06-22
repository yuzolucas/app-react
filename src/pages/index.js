import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <main>
        <section id="inicio">
          <Hero/>
        </section>
        <section id="projetos">
          <Projects/>
        </section>
        <section id="sobre">
          <About/>
        </section>
        <section id="contato">
          <ContactForm/>
        </section>
      </main>
      <Footer/>
    </div>
  );
};