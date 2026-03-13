import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="services" className="bg-sec">
          <div className="container">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Vores Ydelser
            </motion.h2>
            <Services />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <span className="hero-badge">Om os</span>
                <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Din partner i økonomisk vækst</h2>
                <p>
                  Nordens Revision tilbyder kompetent regnskabsrådgivning og service i høj klasse. Vi er dedikerede til at skabe gennemsigtighed og tryghed for vores kunder.
                </p>
                <p>
                  Vores erfarne team arbejder proaktivt med din økonomi, så du kan fokusere på at drive din virksomhed. Vi betjener alt fra personlige virksomheder til større selskaber og fonde.
                </p>
              </motion.div>
              <motion.div
                style={{ background: 'var(--bg-sec)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1rem' }}>Vores Mission</h3>
                <p style={{ fontStyle: 'italic', marginBottom: 0 }}>
                  "At levere revision og rådgivning med øje for detaljen og fokus på gennemsigtighed, så vores klienter altid føler sig i trygge hænder."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-sec">
          <div className="container text-center">
            <motion.h2
              style={{ marginBottom: '1rem' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Lad os tage en uforpligtende snak
            </motion.h2>
            <motion.p
              className="mx-auto"
              style={{ marginBottom: '4rem' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              Vi står klar til at hjælpe dig med dine revisionsfaglige spørgsmål.
            </motion.p>

            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Mail size={16} color="#2563eb" />
                  <h3>Send en mail</h3>
                </div>
                <a href="mailto:info@nordensrevision.dk">info@nordensrevision.dk</a>
              </div>
              <div className="contact-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Phone size={16} color="#2563eb" />
                  <h3>Ring til os</h3>
                </div>
                <a href="tel:+4550696917">+45 50 69 69 17</a>
              </div>
              <div className="contact-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={16} color="#2563eb" />
                  <h3>Besøg os</h3>
                </div>
                <p>Arnold Nielsens Blvd. 124<br />2650 Hvidovre</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div className="logo" style={{ marginBottom: '1.5rem' }}>NORDENS<span>REVISION</span></div>
          <p style={{ fontSize: '0.875rem', margin: '0 auto' }}>&copy; {new Date().getFullYear()} Nordens Revision ApS. CVR: XXXXXXXX. Alle rettigheder forbeholdes.</p>
        </div>
      </footer>
    </>
  )
}

export default App
