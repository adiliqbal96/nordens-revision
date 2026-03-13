import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <section id="about" style={{ padding: '10rem 0', background: 'var(--primary-light)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2>Om Nordens Revision</h2>
              <p>
                Nordens Revision er startet med henblik på at tilbyde sine kunder kompetent regnskabsrådgivning og service i høj klasse.
              </p>
              <p>
                Vores målgruppe er personlige virksomheder, selskaber, fonde og foreninger, der drives efter ærlige og redelige principper.
              </p>
            </div>
            <div className="glass" style={{ padding: '3rem', borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ color: 'white' }}>Mission</h3>
              <p style={{ fontStyle: 'italic', color: 'white' }}>
                "At skabe tryghed og værdi for vores kunder gennem faglig stolthed og personlig kontakt."
              </p>
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: '10rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Kontakt os</h2>
            <p>Klar til at tage din virksomhed til næste niveau? Vi står klar til at hjælpe.</p>
            <div className="glass" style={{ maxWidth: '800px', margin: '3rem auto', padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--accent)' }}>MAIL</h3>
                <a href="mailto:info@nordensrevision.dk" style={{ fontSize: '1.25rem' }}>info@nordensrevision.dk</a>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--accent)' }}>TELEFON</h3>
                <a href="tel:+4550696917" style={{ fontSize: '1.25rem' }}>+45 50 69 69 17</a>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--accent)' }}>ADRESSE</h3>
                <p style={{ fontSize: '1rem', margin: 0 }}>Arnold Nielsens Blvd. 124, 2650 Hvidovre</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Nordens Revision ApS. Alle rettigheder forbeholdes.</p>
      </footer>
    </>
  )
}

export default App
