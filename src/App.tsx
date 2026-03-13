import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
  }
};

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="services">
          <div className="glow" style={{ top: '20%', left: '-10%' }}></div>
          <div className="container">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Ydelser skabt til vækst
            </motion.h2>
            <Services />
          </div>
        </section>

        <section id="about" className="glass-bright" style={{ margin: '0 2rem', borderRadius: '3rem', border: 'none' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <span className="logo" style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'block' }}>Visionen bag</span>
                <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Mere end bare revision</h2>
                <p>
                  Nordens Revision er født ud fra tanken om, at finansiel rådgivning skal være gennemsigtig, proaktiv og moderne. Vi bruger de nyeste teknologier til at sikre, at dit regnskab ikke bare er "i orden", men er et værktøj til din succes.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Vi betjener visionære virksomheder, der værdsætter kvalitet og personlig sparring på højeste niveau.
                </p>
              </motion.div>
              <div style={{ position: 'relative' }}>
                <motion.div
                  className="glass"
                  style={{ padding: '4rem', borderLeft: '8px solid var(--accent)' }}
                  initial={{ rotate: -2, scale: 0.95 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h3 style={{ color: 'white', fontSize: '2rem' }}>Vores Løfte</h3>
                  <p style={{ fontStyle: 'italic', fontSize: '1.4rem', color: 'white', opacity: 0.9 }}>
                    "Vi bygger bro mellem komplekse tal og dine drømme, så du kan fokusere på det, du er bedst til – mens vi sikrer fundamentet."
                  </p>
                </motion.div>
                <div className="glow" style={{ bottom: '-20%', right: '-10%', width: '300px', height: '300px' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Tag næste skridt
            </motion.h2>

            <div className="contact-grid">
              {[
                { label: 'EMAIL', val: 'info@nordensrevision.dk', href: 'mailto:info@nordensrevision.dk', icon: <Mail size={24} /> },
                { label: 'TELEFON', val: '+45 50 69 69 17', href: 'tel:+4550696917', icon: <Phone size={24} /> },
                { label: 'LOKATION', val: 'Hvidovre, DK', icon: <MapPin size={24} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass contact-box"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                      {item.val} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <p style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>{item.val}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', background: 'linear-gradient(to bottom, var(--primary), #000)' }}>
        <div className="container text-center">
          <div className="logo" style={{ fontSize: '2rem', marginBottom: '2rem' }}>NORDENS<span>REVISION</span></div>
          <p style={{ margin: '0 auto', fontSize: '1rem' }}>&copy; {new Date().getFullYear()} Nordens Revision ApS. Intelligens i hvert tal.</p>
        </div>
      </footer>
    </>
  )
}

export default App
