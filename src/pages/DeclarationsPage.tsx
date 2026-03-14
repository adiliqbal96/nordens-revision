import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Truck, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeclarationsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '6rem' }}>
            <section className="declarations-hero" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge">Specialiseret Rådgivning</span>
                        <h1 style={{ marginBottom: '2rem' }}>Erklæringer</h1>
                        <p style={{ maxWidth: '700px', fontSize: '1.25rem' }}>
                            Uafhængige og troværdige erklæringer, der sikrer din virksomheds overholdelse af gældende lovgivning.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ backgroundColor: 'var(--bg-offset)', paddingTop: '2rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="service-card"
                            style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: 'white' }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                                <Truck size={48} />
                            </div>
                            <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Persontransport & Varebil</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Vi har specialiseret os i at assistere vognmænd og transportvirksomheder med de nødvendige revisorerklæringer til Færdselsstyrelsen.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                {[
                                    'Erklæring om egenkapitalopgørelse',
                                    'Vurdering af økonomisk formåen',
                                    'Hurtig og professionel sagsbehandling',
                                    'Overholdelse af alle lovkrav'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <ShieldCheck size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to="/kontakt" className="btn btn-primary" style={{ width: '100%', backgroundColor: 'var(--primary)', transition: 'var(--transition)' }}>Få en erklæring</Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ padding: '0 2rem' }}
                        >
                            <h3 style={{ marginBottom: '3rem', fontSize: '1.8rem', color: 'var(--primary)' }}>Hvorfor er en erklæring vigtig?</h3>
                            <div style={{ display: 'grid', gap: '2.5rem' }}>
                                <div style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(13, 148, 136, 0.03)', borderLeft: '3px solid var(--accent)' }}>
                                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem' }}>
                                        <Scale size={22} /> Lovkrav
                                    </h4>
                                    <p style={{ fontSize: '1.05rem', margin: 0 }}>Mange tilladelser kræver en uvildig revisors bekræftelse af virksomhedens økonomiske fundament.</p>
                                </div>
                                <div style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(13, 148, 136, 0.03)', borderLeft: '3px solid var(--accent)' }}>
                                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem' }}>
                                        <FileText size={22} /> Troværdighed
                                    </h4>
                                    <p style={{ fontSize: '1.05rem', margin: 0 }}>En erklæring fra en revisor øger troværdigheden overfor samarbejdspartnere og myndigheder.</p>
                                </div>
                                <div style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(13, 148, 136, 0.03)', borderLeft: '3px solid var(--accent)' }}>
                                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem' }}>
                                        <ShieldCheck size={22} /> Sikkerhed
                                    </h4>
                                    <p style={{ fontSize: '1.05rem', margin: 0 }}>Vi sikrer, at alle beregninger er korrekte og overholder de nyeste regler på området.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="service-card"
                        style={{ padding: '4rem', background: 'var(--primary)', color: 'white' }}
                    >
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Har du brug for en anden type erklæring?</h2>
                        <p style={{ color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Uanset om det er til banken, Erhvervsstyrelsen eller en samarbejdspartner, 
                            kan vi levere den rette erklæring til jeres behov.
                        </p>
                        <Link to="/kontakt" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                            Kontakt os i dag
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default DeclarationsPage;
