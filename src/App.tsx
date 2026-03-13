import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="services" className="bg-sec">
          <div className="container">
            <h2>Vores Ydelser</h2>
            <Services />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span className="hero-badge">Om os</span>
                <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Din partner i økonomisk vækst</h2>
                <p>
                  Nordens Revision tilbyder kompetent regnskabsrådgivning og service i høj klasse. Vi er dedikerede til at skabe gennemsigtighed og tryghed for vores kunder.
                </p>
                <p>
                  Vores erfarne team arbejder proaktivt med din økonomi, så du kan fokusere på at drive din virksomhed. Vi betjener alt fra personlige virksomheder til større selskaber og fonde.
                </p>
              </div>
              <div style={{ background: 'var(--bg-sec)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                <h3 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1rem' }}>Vores Mission</h3>
                <p style={{ fontStyle: 'italic', marginBottom: 0 }}>
                  "At levere revision og rådgivning med øje for detaljen og fokus på gennemsigtighed, så vores klienter altid føler sig i trygge hænder."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-sec">
          <div className="container text-center">
            <h2 style={{ marginBottom: '1rem' }}>Lad os tage en uforpligtende snak</h2>
            <p className="mx-auto" style={{ marginBottom: '4rem' }}>Vi står klar til at hjælpe dig med dine revisionsfaglige spørgsmål.</p>

            <div className="contact-card">
              <div className="contact-item">
                <h3>Send en mail</h3>
                <a href="mailto:info@nordensrevision.dk">info@nordensrevision.dk</a>
              </div>
              <div className="contact-item">
                <h3>Ring til os</h3>
                <a href="tel:+4550696917">+45 50 69 69 17</a>
              </div>
              <div className="contact-item">
                <h3>Besøg os</h3>
                <p>Arnold Nielsens Blvd. 124<br />2650 Hvidovre</p>
              </div>
            </div>
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
