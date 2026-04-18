import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';

const DocCard: React.FC = () => (
    <div style={{ position: 'relative', paddingBottom: '1.5rem' }}>
        {/* Deadline chip — floats top-right */}
        <motion.div
            className="doc-deadline-chip"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#e67e22', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '0.675rem', textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--text-muted)', fontWeight: 700 }}>Næste frist</span>
            </div>
            <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em' }}>
                Momsindberetning
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#c0392b', fontWeight: 600, marginTop: '0.2rem' }}>
                01. maj 2025
            </div>
        </motion.div>

        <motion.div
            className="doc-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Card header */}
            <div className="doc-card-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div className="doc-card-kicker">Nordens Revision ApS · CVR 43754610</div>
                        <div className="doc-card-title">Årsrapport 2024</div>
                        <div className="doc-card-subtitle">1. jan – 31. dec 2024 · Hvidovre</div>
                    </div>
                    <div style={{
                        background: 'rgba(59, 181, 163, 0.18)',
                        color: 'var(--accent-light)',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '2px',
                        whiteSpace: 'nowrap',
                        marginTop: '0.1rem',
                    }}>
                        Godkendt
                    </div>
                </div>
            </div>

            {/* Financial rows */}
            <div className="doc-card-body">
                <div className="doc-row">
                    <span className="doc-row-label">Omsætning</span>
                    <span className="doc-row-value">2.450.000 <span>kr.</span></span>
                </div>
                <div className="doc-row">
                    <span className="doc-row-label">Driftsresultat</span>
                    <span className="doc-row-value">385.000 <span>kr.</span></span>
                </div>
                <div className="doc-row">
                    <span className="doc-row-label">Skatteberegning</span>
                    <span className="doc-row-value" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>96.250 <span>kr.</span></span>
                </div>
                <div className="doc-row highlighted">
                    <span className="doc-row-label">Egenkapital</span>
                    <span className="doc-row-value">1.120.000 <span>kr.</span></span>
                </div>
            </div>

            {/* Footer */}
            <div className="doc-card-footer">
                <div>
                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: 700 }}>
                        Revisorpåtegning
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ color: 'var(--accent)', fontSize: '1rem', lineHeight: 1 }}>✓</span> Uden forbehold
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        Underskrevet 28. februar 2025
                    </div>
                </div>
                <div className="doc-stamp">NR</div>
            </div>
        </motion.div>

        {/* "Godkendt uden forbehold" label — floats bottom-left */}
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{
                position: 'absolute',
                bottom: '0',
                left: '-1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1rem',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                boxShadow: '0 6px 20px rgba(13, 28, 46, 0.09)',
                whiteSpace: 'nowrap',
            }}
        >
            <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block', flexShrink: 0,
            }} />
            <span style={{ fontSize: '0.775rem', fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em' }}>
                Godkendt uden forbehold
            </span>
        </motion.div>
    </div>
);

const Hero: React.FC = () => {
    const handleScrollToYdelser = (e: React.MouseEvent) => {
        const el = document.getElementById('ydelser');
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="badge"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <MapPin size={11} /> Hvidovre · Siden 2023
                        </motion.span>

                        <h1>
                            Vi klarer<br />tallene. Du<br />klarer forretningen.
                        </h1>

                        <p style={{ fontSize: '1.125rem', color: 'var(--text-body)', maxWidth: '480px', lineHeight: 1.75 }}>
                            Professionel bogføring, revision og rådgivning til erhvervsdrivende i Hvidovre.
                            Personlig betjening fra en lokal revisor der kender din branche.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                            <Link to="/kontakt" className="btn btn-primary">
                                Book en gratis samtale <ArrowRight size={15} />
                            </Link>
                            <Link
                                to="/#ydelser"
                                className="btn btn-outline"
                                onClick={handleScrollToYdelser}
                            >
                                Se vores ydelser
                            </Link>
                        </div>

                        <div className="trust-bar">
                            <span className="trust-item">
                                <Star size={12} fill="#b8924a" color="#b8924a" />
                                <strong style={{ color: 'var(--text-main)' }}>5.0</strong>
                                <span style={{ color: 'var(--text-muted)' }}>· 14 Google-anmeldelser</span>
                            </span>
                            <span className="trust-divider" />
                            <span className="trust-item">100+ kunder</span>
                            <span className="trust-divider" />
                            <span className="trust-item">
                                <MapPin size={11} style={{ flexShrink: 0 }} /> Hvidovre
                            </span>
                            <span className="trust-divider" />
                            <span className="trust-item">CVR 43754610</span>
                        </div>
                    </motion.div>

                    <div className="hero-visual" style={{ paddingLeft: '60px' }}>
                        <DocCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
