import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';

const LandingPage: React.FC = () => {
    return (
        <main>
            <Hero />

            <section id="ydelser" className="services-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '1rem' }}>Professionelle Revisionsydelser</h2>
                        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.25rem' }}>
                            Vi tilbyder en bred vifte af ydelser skræddersyet til både små og store virksomheder.
                            Vores mål er at gøre din økonomi gennemsigtig og din hverdag lettere.
                        </p>
                    </motion.div>
                    <Services />
                </div>
            </section>

            <section id="omos" style={{ backgroundColor: 'var(--bg-offset)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="badge">Ekspertise & Tillid</span>
                            <h2 style={{ textAlign: 'left', marginBottom: '2rem', lineHeight: 1.1 }}>Din personlige partner midt i tallene</h2>
                            <p>
                                Hos Nordens Revision forstår vi, at bag ethvert regnskab findes en passioneret erhvervsdrivende med store drømme. Vi er ikke bare din revisor – vi er din medspiller.
                            </p>
                            <p style={{ marginTop: '1.5rem' }}>
                                Siden vores grundlæggelse har vi hjulpet hundreder af virksomheder med alt fra den daglige bogføring til kompleks skatterådgivning og strategisk planlægning. Vores tilgang er baseret på integritet, forståelse og et ønske om at skabe værdi for dig hver eneste dag.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>100+</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Glade kunder</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>15+</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Års erfaring</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="service-card"
                            style={{ padding: '4rem' }}
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem', marginBottom: '2.5rem', fontSize: '1.6rem' }}>Vision & Værdier</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>Kompromisløs Integritet</h4>
                                    <p style={{ fontSize: '1.05rem' }}>Ærlighed og gennemsigtighed er kernen i alt, hvad vi foretager os.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>Digital Innovation</h4>
                                    <p style={{ fontSize: '1.05rem' }}>Vi udnytter de nyeste cloud-teknologier til at optimere dit flow.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>Lokal Tilstedeværelse</h4>
                                    <p style={{ fontSize: '1.05rem' }}>Vi er din revisor i øjenhøjde, altid klar til en uforpligtende kop kaffe.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="cta-section" style={{ padding: '8rem 0', textAlign: 'center', backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ color: 'white', marginBottom: '2rem' }}>Klar til at optimere din økonomi?</h2>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                            Tag kontakt i dag og lad os finde den bedste løsning for din virksomhed.
                        </p>
                        <a href="/kontakt" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'white', padding: '1.25rem 3.5rem' }}>
                            Kontakt os nu
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;
