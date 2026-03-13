import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="services" className="services-section">
          <div className="container">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Hvad vi kan hjælpe dig med
            </motion.h2>
            <Services />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <span className="badge">Om os</span>
                <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Din rådgivende partner <br />i en kompleks verden</h2>
                <p>
                  Nordens Revision hjælper virksomhedsejere med at navigere sikkert gennem økonomiske udfordringer. Vi ser ikke bare på tallene – vi ser på hele din forretning.
                </p>
                <p style={{ marginTop: '1.5rem' }}>
                  Som moderne revisionshus prioriterer vi tæt kontakt og proaktiv sparring. Uanset om du er nystartet iværksættere eller driver en etableret virksomhed, står vi klar til at hjælpe.
                </p>
              </motion.div>
              <motion.div
                style={{ background: 'white', padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--border)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h3 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>Vision & Værdier</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Integritet</h4>
                    <p style={{ fontSize: '0.95rem' }}>Vi arbejder altid med højeste etiske standarder.</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Innovation</h4>
                    <p style={{ fontSize: '0.95rem' }}>Vi bruger de nyeste digitale værktøjer for din effektivitet.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Skal vi hjælpe dig videre?</h2>
              <p>Vi tilbyder altid et uforpligtende møde for at se på dine behov.</p>
            </motion.div>

            <div className="contact-grid">
              <div className="contact-item">
                <h4>E-mail</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail size={20} color="var(--accent-light)" />
                  <a href="mailto:info@nordensrevision.dk">info@nordensrevision.dk</a>
                </div>
              </div>
              <div className="contact-item">
                <h4>Telefon</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone size={20} color="var(--accent-light)" />
                  <a href="tel:+4550696917">+45 50 69 69 17</a>
                </div>
              </div>
              <div className="contact-item">
                <h4>Adresse</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin size={20} color="var(--accent-light)" />
                  <p>Arnold Nielsens Blvd. 124, 2650 Hvidovre</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '5rem' }}>
              <a href="mailto:info@nordensrevision.dk" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'white', padding: '1.25rem 3rem' }}>
                Få et tilbud <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div className="logo" style={{ marginBottom: '1.5rem' }}>NORDENS<span>REVISION</span></div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Nordens Revision ApS. CVR: XXXXXXXX.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
