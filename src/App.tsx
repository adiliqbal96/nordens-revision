import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PricesPage from './pages/PricesPage';
import DeclarationsPage from './pages/DeclarationsPage';

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
      </Routes>

      <footer style={{ padding: '6rem 0', background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div className="logo" style={{ marginBottom: '1.5rem' }}>NORDENS<span>REVISION</span></div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Nordens Revision ApS. CVR: XXXXXXXX.
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
