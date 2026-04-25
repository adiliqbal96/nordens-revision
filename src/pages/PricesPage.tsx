import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ClipboardList, FileCheck, CheckCircle2 } from 'lucide-react';

const STEPS = [
    {
        num: '01',
        icon: <MessageSquare size={18} />,
        title: 'Kontakt os',
        desc: 'Udfyld kontaktformularen eller ring direkte. Vi svarer inden for én hverdag og aftaler en uforpligtende samtale.',
    },
    {
        num: '02',
        icon: <ClipboardList size={18} />,
        title: 'Behovsafklaring',
        desc: 'Vi lærer din virksomhed at kende — hvad er din branche, dit omfang, dine behov? En god løsning starter med den rigtige forståelse.',
    },
    {
        num: '03',
        icon: <FileCheck size={18} />,
        title: 'Tilpasset tilbud',
        desc: 'Du modtager et konkret tilbud skræddersyet til netop din virksomhed. Ingen skjulte priser. Ingen standardpakker du ikke har brug for.',
    },
];

const SERVICES = [
    'Bogføring og momsindberetning',
    'Lønadministration',
    'Årsregnskaber og årsrapporter',
    'Revisorerklæringer',
    'Stiftelse og omdannelser',
    'Skattemæssig rådgivning',
];

const PricesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '6.5rem', paddingBottom: '7rem', backgroundColor: 'var(--bg-base)' }}>
            <Helmet>
                <title>Priser | Nordens Revision</title>
                <meta name="description" content="Se priser på bogføring, årsregnskaber, lønadministration og revision hos Nordens Revision ApS. Gennemsigtige priser til selvstændige og ApS." />
                <link rel="canonical" href="https://nordensrevision.dk/priser" />
            </Helmet>
            <div className="container">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    style={{ maxWidth: '680px', marginBottom: '4rem' }}
                >
                    <span className="section-label">Priser</span>
                    <h1 style={{ marginBottom: '1.125rem' }}>
                        Ingen standardpakker.<br />Kun det du har brug for.
                    </h1>
                    <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.8, maxWidth: '560px' }}>
                        Vi prissætter efter omfang og behov — ikke efter hvad der passer i en pakke. Enkeltmandsvirksomheder og holdingselskaber får hver en pris der afspejler deres faktiske situation.
                    </p>
                </motion.div>

                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '4rem' }} />

                {/* Why no public prices + service list */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start', marginBottom: '4.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                    >
                        <h2 style={{ textAlign: 'left', fontSize: 'clamp(1.375rem, 4vw, 1.875rem)', marginBottom: '1.125rem' }}>
                            Ingen skal klemmes ned i en kasse
                        </h2>
                        <p style={{ lineHeight: 1.8, marginBottom: '1.125rem', color: 'var(--text-body)', fontSize: '1rem' }}>
                            Hos Nordens Revision tror vi på, at hver virksomhed fortjener en løsning der passer præcist til dens behov og situation. Derfor har vi valgt ikke at liste priser offentligt.
                        </p>
                        <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>
                            En iværksætter med en enkeltmandsvirksomhed har andre behov end et holdingselskab med datterselskaber. Det afspejler vi i samarbejdet — og i prisen.
                        </p>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                            Alle ydelser leveres som fast månedlig aftale eller som enkeltopgave.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                    >
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.125rem', fontFamily: 'var(--font-main)' }}>
                            Vi tilbyder bl.a.
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0.625rem',
                        }}>
                            {SERVICES.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.625rem',
                                        padding: '0.875rem 1rem',
                                        background: 'white',
                                        border: '1px solid var(--border)',
                                        borderRadius: '4px',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        color: 'var(--text-body)',
                                        lineHeight: 1.45,
                                    }}
                                >
                                    <CheckCircle2 size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }} />
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 3-step process card */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
                        <div style={{ background: 'var(--primary)', padding: '1.75rem 2.5rem' }}>
                            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-main)' }}>
                                Sådan fungerer det
                            </span>
                            <h3 style={{ color: 'white', fontSize: '1.25rem', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                                Fra første kontakt til tilpasset tilbud — tre enkle trin
                            </h3>
                        </div>

                        <div style={{ padding: '0 2.5rem' }}>
                            {STEPS.map((step, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        padding: '1.75rem 0',
                                        borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <div style={{
                                        width: '2rem',
                                        height: '2rem',
                                        borderRadius: '50%',
                                        background: 'var(--accent-pale)',
                                        color: 'var(--accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '0.1rem',
                                    }}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.35rem' }}>
                                            <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-main)' }}>{step.num}</span>
                                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-main)', letterSpacing: '-0.02em' }}>{step.title}</h4>
                                        </div>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ padding: '1.75rem 2.5rem', background: 'var(--bg-offset)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Vi svarer typisk inden for 2–4 timer på hverdage.
                            </p>
                            <Link to="/kontakt" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Kontakt os nu <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default PricesPage;
