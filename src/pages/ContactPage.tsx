import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="contact-page" style={{ paddingTop: '10rem', paddingBottom: '8rem', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge">Kontakt</span>
                        <h1 style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '3.5rem' }}>Lad os tage <br />en snak</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '500px' }}>
                            Vi står altid klar til at hjælpe dig med dine spørgsmål. Uanset om det drejer sig om et simpelt spørgsmål eller et komplekst regnskab.
                        </p>

                        <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {[
                                { label: 'E-mail', value: 'info@nordensrevision.dk', icon: <Mail size={24} color="var(--accent)" />, href: 'mailto:info@nordensrevision.dk' },
                                { label: 'Telefon', value: '+45 50 69 69 17', icon: <Phone size={24} color="var(--accent)" />, href: 'tel:+4550696917' },
                                { label: 'Adresse', value: 'Arnold Nielsens Blvd. 124, 2650 Hvidovre', icon: <MapPin size={24} color="var(--accent)" /> }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                                >
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '1rem',
                                        backgroundColor: 'var(--bg-offset)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 600 }}>{item.label}</h4>
                                        {item.href ? (
                                            <a href={item.href} style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>{item.value}</a>
                                        ) : (
                                            <p style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 700 }}>{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
