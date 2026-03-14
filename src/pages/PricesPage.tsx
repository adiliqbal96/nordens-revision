import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '6rem' }}>
            <section className="prices-hero" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge">Gennemsigtighed</span>
                        <h1 style={{ marginBottom: '2rem' }}>Priser</h1>
                    </motion.div>
                </div>
            </section>

            <section style={{ backgroundColor: 'var(--bg-offset)', paddingTop: '2rem' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="service-card"
                            style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', backgroundColor: 'white' }}
                        >
                            <h2 style={{ textAlign: 'left', marginBottom: '2.5rem', color: 'var(--accent)' }}>Ingen skal klemmes ned i en kasse</h2>
                            
                            <div style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                                <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
                                    Vi leverer revision og bogføring til dit behov.
                                    Vores priser på revision og bogføring matcher de ydelser vi sammen vurderer du skal bruge.
                                </p>
                                
                                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Skræddersyet løsning</h3>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Hos Nordens Revision ApS tror vi på, at hver eneste virksomhed fortjener en skræddersyet løsning, 
                                    der præcist matcher dens unikke behov og udfordringer. Forståelse og tilpasning er nøglen til vores service, 
                                    og det starter med den første samtale.
                                </p>
                                
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Vi har bevidst valgt ikke at liste priser på vores hjemmeside. Dette er fordi vi ønsker at basere vores tilbud 
                                    på en dybdegående forståelse af netop dine behov og præferencer, hvilket vi mener bedst opnås gennem en direkte dialog.
                                </p>

                                <div style={{ 
                                    padding: '0rem', 
                                    marginTop: '4rem', 
                                    borderLeft: '4px solid var(--accent)',
                                    paddingLeft: '2rem'
                                }}>
                                    <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem', color: 'var(--primary)' }}>Tryk på "Kontakt"</h4>
                                    <p style={{ marginBottom: '1.5rem' }}>
                                        For at tage det første skridt mod en tilpasset revisionsløsning, opfordrer vi dig til at udfylde vores kontaktformular. 
                                        Det giver os mulighed for at samle de nødvendige oplysninger, så vi kan kontakte dig for en uforpligtende samtale om, 
                                        hvordan vi kan støtte din virksomhed på bedste vis.
                                    </p>
                                    <p>
                                        Ved at udfylde formularen sikrer du, at vi kan tilbyde dig den mest relevante og værdiskabende rådgivning fra start. 
                                        Vi ser frem til at lære mere om din virksomhed og hvordan vi sammen kan opnå de bedste resultater.
                                    </p>
                                </div>

                                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                                    <Link to="/kontakt" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
                                        Kontakt os nu
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PricesPage;
