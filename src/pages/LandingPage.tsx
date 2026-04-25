import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, ArrowRight, MapPin, UserCheck, Clock, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';

// ─── Data ───────────────────────────────────────────────────────────────────

const FEATURED_REVIEWS = [
    {
        initial: 'T',
        name: 'Tanja Andersen',
        role: 'Google Anmeldelse',
        quote: 'En samarbejdspartner, der gør en reel forskel. Det har været en fornøjelse at samarbejde med Nordens Revision ApS. De investerer tid i at forstå min virksomheds behov og leverer altid høj kvalitet — hvad enten det drejer sig om bogføring, årsrapport eller skat.',
    },
    {
        initial: 'J',
        name: 'J.I.M. Transport ApS',
        role: 'Transportvirksomhed',
        quote: 'Som ejer af en mindre virksomhed har jeg haft fornøjelsen af at arbejde med Nordens Revision ApS. Deres tilgang er både professionel og personlig — jeg føler mig i trygge hænder, og de kender transportbranchens særlige krav.',
    },
    {
        initial: 'U',
        name: 'Umaar Malik',
        role: 'Google Anmeldelse',
        quote: 'En revisor, der føles som en del af teamet. De er ikke bare dygtige til tal, men giver rådgivning der giver mening i praksis — om moms, bilag og skat. Meget mere end man forventer af en revisor.',
    },
];

const SMALL_REVIEWS = [
    {
        name: 'J.I.M. Transport ApS',
        role: 'Transportvirksomhed',
        text: 'Professionel og personlig tilgang. Jeg føler mig i trygge hænder og kan anbefale Nordens Revision til enhver transportvirksomhed der har brug for styr på erklæringer og regnskab.',
    },
    {
        name: 'Umaar Malik',
        role: 'Google Anmeldelse',
        text: 'En revisor, der føles som en del af teamet. De er ikke bare dygtige til tal, men giver rådgivning der giver mening i praksis — om moms, bilag og skat.',
    },
    {
        name: 'Shervin M',
        role: 'Google Anmeldelse',
        text: "Super god oplevelse hele vejen igennem. Nemme at få fat i og yder professionel service. Kan helt klart anbefales til alle selvstændige og ApS'er.",
    },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
    const [count, setCount] = React.useState(0);
    const [hasAnimated, setHasAnimated] = React.useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
                if (!hasAnimated) {
                    let start = 0;
                    const increment = value / (1800 / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= value) { setCount(value); clearInterval(timer); }
                        else setCount(Math.floor(start));
                    }, 16);
                    setHasAnimated(true);
                }
            }}
        >
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-main)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {count}{suffix}
            </div>
        </motion.div>
    );
};

const Stars: React.FC<{ size?: number }> = ({ size = 14 }) => (
    <div style={{ display: 'flex', gap: '0.15rem' }}>
        {[...Array(5)].map((_, i) => <Star key={i} size={size} fill="#b8924a" color="#b8924a" />)}
    </div>
);

const ProfilePanel: React.FC = () => (
    <div style={{
        border: '1px solid var(--border)',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 16px 48px rgba(13, 28, 46, 0.09)',
    }}>
        {/* Navy header */}
        <div style={{ background: 'var(--primary)', padding: '1.75rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-main)', marginBottom: '0.4rem' }}>
                        Revisor &amp; Rådgiver · CVR 43754610
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-main)', letterSpacing: '-0.035em', lineHeight: 1.15 }}>
                        Nordens<span style={{ color: 'var(--accent-light)' }}>Revision</span> ApS
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.3rem' }}>
                        Arnold Nielsens Blvd. 124, Hvidovre
                    </div>
                </div>
                <div style={{
                    background: 'rgba(59,181,163,0.15)',
                    border: '1px solid rgba(59,181,163,0.25)',
                    borderRadius: '2px',
                    padding: '0.3rem 0.6rem',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-light)',
                    fontFamily: 'var(--font-main)',
                    whiteSpace: 'nowrap',
                    marginTop: '0.1rem',
                }}>
                    Aktiv
                </div>
            </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', background: 'var(--bg-offset)', borderBottom: '1px solid var(--border)' }}>
            {[
                { value: '100+', label: 'Kunder' },
                { value: '2023', label: 'Grundlagt' },
                { value: '< 1 dag', label: 'Svartid' },
            ].map((stat, i) => (
                <div key={i} style={{
                    padding: '1.125rem 0.75rem',
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                        {stat.value}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>

        {/* Service tags */}
        <div style={{ padding: '1.375rem 2rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.875rem', fontFamily: 'var(--font-main)' }}>
                Ydelser
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Bogføring', 'Årsregnskaber', 'Lønadministration', 'Revision', 'Rådgivning', 'Erklæringer'].map((tag) => (
                    <span key={tag} style={{
                        padding: '0.275rem 0.625rem',
                        background: 'var(--accent-pale)',
                        color: 'var(--accent)',
                        borderRadius: '2px',
                        fontSize: '0.775rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-main)',
                        letterSpacing: '-0.01em',
                    }}>{tag}</span>
                ))}
            </div>
        </div>

        {/* Promise rows */}
        <div style={{ background: 'white' }}>
            {[
                { icon: <MapPin size={14} />, text: 'Personlig revisor — ikke et callcenter' },
                { icon: <UserCheck size={14} />, text: 'Personlig service — ikke et callcenter' },
                { icon: <Clock size={14} />, text: 'Svar inden for én hverdag' },
            ].map((item, i) => (
                <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 2rem',
                    borderBottom: '1px solid var(--border)',
                    fontSize: '0.875rem',
                    color: 'var(--text-body)',
                    fontWeight: 500,
                }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                </div>
            ))}
        </div>

        {/* Footer */}
        <div style={{
            padding: '1.125rem 2rem',
            background: 'var(--bg-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, fontFamily: 'var(--font-main)', marginBottom: '0.2rem' }}>
                    Ring direkte
                </div>
                <a
                    href="tel:+4550696917"
                    style={{ fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                    <Phone size={13} style={{ color: 'var(--accent)' }} />
                    +45 50 69 69 17
                </a>
            </div>
            <div style={{
                width: '36px', height: '36px',
                background: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.625rem', fontWeight: 800,
                color: 'white', fontFamily: 'var(--font-main)',
                letterSpacing: '-0.01em', flexShrink: 0,
            }}>
                NR
            </div>
        </div>
    </div>
);

// ─── FeaturedCarousel ────────────────────────────────────────────────────────

const FeaturedCarousel: React.FC = () => {
    const [active, setActive] = React.useState(0);
    const [hovered, setHovered] = React.useState(false);
    const reducedMotion = React.useMemo(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );

    React.useEffect(() => {
        if (hovered) return;
        const id = setInterval(() => {
            setActive(prev => (prev + 1) % FEATURED_REVIEWS.length);
        }, 6000);
        return () => clearInterval(id);
    }, [hovered]);

    const rev = FEATURED_REVIEWS[active];

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: 'var(--primary)',
                borderRadius: '6px',
                padding: '2rem 2.5rem 1.75rem',
                marginBottom: '1rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Stars size={15} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeInOut' }}
                >
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.88)',
                        lineHeight: 1.72,
                        margin: '1.25rem 0 1.5rem',
                        maxWidth: '700px',
                        fontWeight: 400,
                    }}>
                        "{rev.quote}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '34px', height: '34px', borderRadius: '50%',
                            background: 'rgba(59, 181, 163, 0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-light)',
                            fontFamily: 'var(--font-main)', flexShrink: 0,
                        }}>{rev.initial}</div>
                        <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                                {rev.name}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>
                                <ShieldCheck size={11} style={{ color: 'var(--accent-light)' }} /> {rev.role}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1.5rem' }}>
                {FEATURED_REVIEWS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Anmeldelse ${i + 1}`}
                        style={{
                            width: i === active ? '1.5rem' : '0.4rem',
                            height: '0.25rem',
                            borderRadius: '2px',
                            background: i === active ? 'var(--accent-light)' : 'rgba(255,255,255,0.2)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: reducedMotion ? 'none' : 'width 0.35s ease, background 0.35s ease',
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

// ─── Page ────────────────────────────────────────────────────────────────────

const LandingPage: React.FC = () => {
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#/', '').replace('#', '');
            if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

    return (
        <main>
            <Helmet>
                <title>Nordens Revision | Revisor & Bogføring til Selvstændige</title>
                <meta name="description" content="Nordens Revision ApS — bogføring, årsregnskaber, lønadministration, revision og rådgivning til selvstændige og ApS. Svar inden for én hverdag." />
                <link rel="canonical" href="https://nordensrevision.dk/" />
            </Helmet>
            <Hero />

            {/* Services */}
            <section id="ydelser" style={{ backgroundColor: 'white', paddingTop: '5rem', paddingBottom: '5rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <span className="section-label">Ydelser</span>
                        <h2 style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Bogføring, revision og rådgivning til selvstændige</h2>
                        <p style={{ maxWidth: '560px', fontSize: '1.0625rem' }}>
                            Fra daglig bogføring og momsindberetning til årsrapport, lønadministration og specialiserede erklæringer til Færdselsstyrelsen.
                        </p>
                    </motion.div>
                    <Services />
                </div>
            </section>

            {/* Om os */}
            <section id="omos" style={{ backgroundColor: 'white', borderTop: '1px solid var(--border)', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '4.5rem',
                        alignItems: 'center',
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">Om os</span>
                            <h2 style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                                Din revisor —<br />altid tilgængelig
                            </h2>
                            <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                Bag ethvert regnskab er der en selvstændig med frister, bilag og ansvar. Vi sørger for at moms er indberettet, løn er korrekt, årsrapporten er klar — og at du sover roligt om natten.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.25rem' }}>
                                Vi hjælper ApS'er, enkeltmandsvirksomheder og transportvirksomheder med alt fra daglig bogføring til skattemæssig rådgivning og revisorerklæringer. Personlig service — ikke et callcenter.
                            </p>
                            <div style={{ display: 'flex', gap: '3rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border)' }}>
                                <div>
                                    <Counter value={100} suffix="+" />
                                    <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: '0.35rem' }}>Glade kunder</p>
                                </div>
                                <div style={{ width: '1px', background: 'var(--border)' }} />
                                <div>
                                    <Counter value={2023} />
                                    <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: '0.35rem' }}>Grundlagt</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <ProfilePanel />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section id="anmeldelser" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-offset)', borderTop: '1px solid var(--border)' }}>
                <div className="container">

                    {/* Header — staggered */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                            <motion.span
                                className="section-label"
                                style={{ marginBottom: 0 }}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5 }}
                            >
                                Anmeldelser
                            </motion.span>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                            >
                                <Stars size={13} />
                                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.02em' }}>5.0</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>· 14 Google-anmeldelser</span>
                            </motion.div>
                        </div>
                        <motion.h2
                            style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.65, delay: 0.1 }}
                        >
                            Det siger vores kunder
                        </motion.h2>
                        <motion.p
                            style={{ maxWidth: '440px', fontSize: '0.9375rem' }}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Selvstændige og virksomheder anbefaler os for vores personlige tilgang og faglighed.
                        </motion.p>
                    </div>

                    {/* Featured carousel */}
                    <FeaturedCarousel />

                    {/* 3 smaller cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.75rem', alignItems: 'stretch' }}>
                        {SMALL_REVIEWS.map((rev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    background: 'white',
                                    border: '1px solid var(--border)',
                                    borderRadius: '6px',
                                    padding: '1.5rem 1.75rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'box-shadow 0.22s ease, transform 0.22s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(13,28,46,0.10)';
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                    (e.currentTarget as HTMLElement).style.transform = 'none';
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
                                    <Stars size={13} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.69rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.01em' }}>
                                        <ShieldCheck size={11} /> Verificeret
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-body)', margin: 0, flexGrow: 1 }}>
                                    "{rev.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '1.25rem' }}>
                                    <div style={{
                                        width: '30px', height: '30px', borderRadius: '50%',
                                        background: 'var(--accent-pale)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)',
                                        fontFamily: 'var(--font-main)', flexShrink: 0,
                                    }}>
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{rev.name}</div>
                                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{rev.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Google trust bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <svg viewBox="0 0 24 24" width="15" height="15" style={{ flexShrink: 0 }}>
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em' }}>5.0</span>
                            <Stars size={12} />
                        </div>
                        <div style={{ width: '1px', height: '12px', background: 'var(--border-strong)' }} />
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>14 verificerede Google-anmeldelser · Nordens Revision ApS</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--primary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}
                    >
                        <div>
                            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-main)', display: 'block', marginBottom: '0.875rem' }}>
                                Kom i gang
                            </span>
                            <h2 style={{ textAlign: 'left', color: 'white', marginBottom: '0.875rem', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                                Klar til at få styr<br />på tallene?
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '1rem', lineHeight: 1.72, maxWidth: '400px', margin: 0 }}>
                                Fortæl os kort om din virksomhed. Vi vender tilbage inden for én hverdag med næste skridt.
                            </p>
                        </div>
                        <div>
                            <Link to="/kontakt" className="btn btn-accent" style={{ fontSize: '0.9375rem', padding: '0.9rem 2rem' }}>
                                Book en gratis samtale <ArrowRight size={15} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;
