import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PricesPage from './pages/PricesPage';
import DeclarationsPage from './pages/DeclarationsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/priser" element={<PricesPage />} />
        <Route path="/erklaeringer" element={<DeclarationsPage />} />
        <Route path="/ydelser/:serviceId" element={<ServiceDetailPage />} />
      </Routes>

      <footer style={{ background: '#091523', borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

            {/* Brand */}
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-main)', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                NORDENS<span style={{ color: 'var(--accent-light)' }}>REVISION</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, maxWidth: '220px' }}>
                Professionel bogføring, revision og rådgivning til selvstændige.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem', fontFamily: 'var(--font-main)' }}>
                Sider
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Hjem', to: '/' },
                  { label: 'Ydelser', to: '/#ydelser' },
                  { label: 'Om os', to: '/#omos' },
                  { label: 'Priser', to: '/priser' },
                  { label: 'Erklæringer', to: '/erklaeringer' },
                  { label: 'Kontakt', to: '/kontakt' },
                ].map(item => (
                  <Link
                    key={item.label}
                    to={item.to}
                    style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem', fontFamily: 'var(--font-main)' }}>
                Kontakt
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: 'Arnold Nielsens Blvd. 124', sub: '2650 Hvidovre' },
                  { label: '+45 50 69 69 17', href: 'tel:+4550696917' },
                  { label: 'info@nordensrevision.dk', href: 'mailto:info@nordensrevision.dk' },
                  { label: 'CVR: 43754610' },
                ].map((item, i) => (
                  <div key={i}>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 500 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{item.label}</span>
                    )}
                    {item.sub && <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.1rem' }}>{item.sub}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              &copy; {new Date().getFullYear()} Nordens Revision ApS · CVR 43754610
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
              Professionel rådgivning 2023
            </p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
