import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CONTACT_METHODS = [
    {
        label: 'Telefon',
        value: '+45 50 69 69 17',
        note: 'Man–fre · 9–17',
        icon: <Phone size={17} />,
        href: 'tel:+4550696917',
    },
    {
        label: 'E-mail',
        value: 'info@nordensrevision.dk',
        note: 'Vi svarer inden for én hverdag',
        icon: <Mail size={17} />,
        href: 'mailto:info@nordensrevision.dk',
    },
    {
        label: 'Adresse',
        value: 'Arnold Nielsens Blvd. 124',
        note: '2650 Hvidovre',
        icon: <MapPin size={17} />,
    },
    {
        label: 'CVR-nummer',
        value: '43754610',
        note: 'Nordens Revision ApS',
        icon: <ShieldCheck size={17} />,
    },
];

const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '6.5rem', paddingBottom: '7rem', backgroundColor: 'var(--bg-base)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'stretch',
                }}>

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                    >
                        <span className="section-label">Kontakt</span>
                        <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2.25rem, 6vw, 3.5rem)' }}>
                            Lad os tage<br />en snak
                        </h1>
                        <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '380px' }}>
                            Uanset om du har et hurtigt spørgsmål eller vil i gang med et samarbejde — vi er klar. Ingen lange ventetider, ingen omveje.
                        </p>

                        {/* Trust pills */}
                        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            {[
                                { icon: <ShieldCheck size={12} />, text: 'Gratis og uforpligtende' },
                                { icon: <Clock size={12} />, text: 'Svar inden for 1 hverdag' },
                                { icon: <ArrowRight size={12} />, text: 'Lokal revisor i Hvidovre' },
                            ].map((pill, i) => (
                                <div key={i} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.375rem',
                                    padding: '0.375rem 0.75rem',
                                    background: 'var(--accent-pale)',
                                    border: '1px solid rgba(26, 112, 101, 0.15)',
                                    borderRadius: '2px',
                                    fontSize: '0.775rem',
                                    fontWeight: 600,
                                    color: 'var(--accent)',
                                    fontFamily: 'var(--font-main)',
                                    letterSpacing: '-0.01em',
                                }}>
                                    {pill.icon} {pill.text}
                                </div>
                            ))}
                        </div>

                        {/* Contact rows */}
                        <div>
                            {CONTACT_METHODS.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.07 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        padding: '1.25rem 0',
                                        borderBottom: idx < CONTACT_METHODS.length - 1 ? '1px solid var(--border)' : 'none',
                                    }}
                                >
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '4px',
                                        background: 'var(--accent-pale)',
                                        color: 'var(--accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '1px',
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.2rem', fontFamily: 'var(--font-main)' }}>
                                            {item.label}
                                        </div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em', display: 'block', lineHeight: 1.3 }}
                                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--primary)')}
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                                                {item.value}
                                            </div>
                                        )}
                                        {item.note && (
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                                                {item.note}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.15 }}
                        style={{
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '6px',
                            padding: '3rem',
                            boxShadow: '0 4px 24px rgba(13, 28, 46, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', fontFamily: 'var(--font-main)', letterSpacing: '-0.02em' }}>
                            Skriv til os
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                            Fortæl os kort om din virksomhed og hvad du har brug for hjælp til.
                        </p>
                        <div style={{ flexGrow: 1 }}>
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
