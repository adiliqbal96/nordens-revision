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
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
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
              Kompetencer & Ydelser
            </motion.h2>
            <Services />
          </div>
        </section>

        <section id="about" style={{ background: '#fcfaf6' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div style={{ background: 'var(--gold-500)', width: '40px', height: '2px', marginBottom: '2rem' }}></div>
                <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Revision med rødder <br />i tillid og vækst</h2>
                <p>
                  Nordens Revision er startet med ét formål: At tilbyde kompetent hjælp og rådgivning, der flytter virksomheder fremad. Vi ser ikke bare på tallene; vi ser på de visioner, der driver dem.
                </p>
                <p style={{ marginTop: '1.5rem' }}>
                  Vore klienter spænder vidt – fra iværksættere til etablerede selskaber og fonde. Fælles for dem alle er ønsket om en revisor, der forstår værdien af personlig kontakt.
                </p>
              </motion.div>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '4rem' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <h3 style={{ color: 'var(--emerald-900)', fontSize: '2.5rem', marginBottom: '2rem' }}>Vores værdisæt</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <h4 style={{ color: 'var(--gold-600)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Transparent</h4>
                      <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Ingen overraskelser. Vi kommunikerer klart og tydeligt om dit regnskab.</p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--gold-600)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Proaktiv</h4>
                      <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Vi venter ikke på at problemer opstår, vi forudser muligheder for din vækst.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-emerald">
          <div className="container">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Lad os tage en dialog om <br />din fremtid
            </motion.h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem' }}>Vi står klar til en uforpligtende snak om dit næste regnskabsår.</p>

            <div className="contact-info">
              <motion.div className="info-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Mail size={18} color="var(--gold-500)" />
                  <h4>E-mail</h4>
                </div>
                <a href="mailto:info@nordensrevision.dk">info@nordensrevision.dk</a>
              </motion.div>
              <motion.div className="info-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Phone size={18} color="var(--gold-500)" />
                  <h4>Telefon</h4>
                </div>
                <a href="tel:+4550696917">+45 50 69 69 17</a>
              </motion.div>
              <motion.div className="info-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <MapPin size={18} color="var(--gold-500)" />
                  <h4>Besøg</h4>
                </div>
                <p>Arnold Nielsens Blvd. 124<br />2650 Hvidovre</p>
              </motion.div>
            </div>

            <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'center' }}>
              <a href="mailto:info@nordensrevision.dk" className="btn btn-primary" style={{ backgroundColor: 'var(--gold-500)', color: 'var(--emerald-900)', padding: '1.5rem 4rem', fontSize: '1.25rem' }}>
                FÅ ET UFORPLIGTENDE TILBUD <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 0', background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div className="logo" style={{ marginBottom: '2rem' }}>NORDENS<span>REVISION</span></div>
          <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            &copy; {new Date().getFullYear()} Nordens Revision ApS. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
