import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Car, Package, FileSignature, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DECLARATION_TYPES = [
    {
        icon: <Truck size={24} />,
        title: 'Godstransport',
        subtitle: 'EU-tilladelse og national',
        items: [
            'Erklæring om økonomisk formåen',
            'Egenkapitalopgørelse iht. forordning',
            'Til ansøgning og fornyelse af tilladelse',
        ],
    },
    {
        icon: <Car size={24} />,
        title: 'Persontransport',
        subtitle: 'Taxa, bus og hyrevogn',
        items: [
            'Revisorerklæring til Færdselsstyrelsen',
            'Dokumentation af startkapital',
            'Løbende bekræftelse af formåen',
        ],
    },
    {
        icon: <Package size={24} />,
        title: 'Varebiltilladelse',
        subtitle: 'Let og tungt vejtransport',
        items: [
            'Erklæring om egenkapital',
            'Vurdering af finansiel styrke',
            'Hurtig sagsbehandling',
        ],
    },
    {
        icon: <FileSignature size={24} />,
        title: 'Andre erklæringer',
        subtitle: 'Revisors erklæringer generelt',
        items: [
            'Erklæring om genoptagelse af virksomhed',
            'Egenkapitalerklæring til bank',
            'Budgeterklæring og årsregnskab',
        ],
    },
];

const PROCESS = [
    {
        title: 'Tag kontakt',
        desc: 'Ring eller skriv til os med det korte overblik: hvilken tilladelse søger du, og hvornår er din frist?',
    },
    {
        title: 'Vi gennemgår tallene',
        desc: 'Vi beder om de nødvendige regnskabsoplysninger og verificerer egenkapitalen iht. de gældende krav.',
    },
    {
        title: 'Erklæringen er klar',
        desc: 'Du modtager den færdige erklæring med revisors underskrift og stempel — klar til indsendelse til Færdselsstyrelsen.',
    },
];

const DeclarationsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '7rem', paddingBottom: '8rem', backgroundColor: 'var(--bg-base)' }}>
            {/* Hero */}
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '700px', marginBottom: '5rem' }}
                >
                    <span className="section-label">Erklæringer</span>
                    <h1 style={{ marginBottom: '1.25rem' }}>
                        Revisorerklæringer<br />til transport og<br />erhverv
                    </h1>
                    <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.8, maxWidth: '560px' }}>
                        Vi er specialiserede i de erklæringer Færdselsstyrelsen kræver af vognmænd og transportvirksomheder. Derudover tilbyder vi egenkapitalerklæringer, budgeterklæringer og revisorerklæringer til banker, myndigheder og Erhvervsstyrelsen — leveret hurtigt og korrekt.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                        {[
                            { icon: <ShieldCheck size={14} />, text: 'Lovkrav opfyldt' },
                            { icon: <Clock size={14} />, text: 'Hurtig levering' },
                            { icon: <CheckCircle size={14} />, text: 'Færdselsstyrelsen-godkendt' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-body)' }}>
                                <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Declaration types */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">Typer af erklæringer</span>
                    <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
                        Vi dækker alle erklæringstyper
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1px',
                        background: 'var(--border)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        marginBottom: '5rem',
                    }}>
                        {DECLARATION_TYPES.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                style={{
                                    background: 'white',
                                    padding: '2rem 2.25rem',
                                }}
                            >
                                <div style={{
                                    width: '44px', height: '44px',
                                    borderRadius: '4px',
                                    background: 'var(--accent-pale)',
                                    color: 'var(--accent)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.25rem',
                                }}>
                                    {type.icon}
                                </div>
                                <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.25rem', fontFamily: 'var(--font-main)', letterSpacing: '-0.02em' }}>
                                    {type.title}
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem', margin: '0 0 1.25rem' }}>
                                    {type.subtitle}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {type.items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8375rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                                            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px', fontSize: '0.875rem', fontWeight: 700 }}>—</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Proces */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '5rem', alignItems: 'start', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-label">Processen</span>
                        <h2 style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.5rem' }}>
                            Sådan foregår det
                        </h2>
                        <p style={{ marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Vi har hjulpet mange vognmænd og transportvirksomheder. Processen er enkel og klar.
                        </p>

                        {PROCESS.map((step, i) => (
                            <div key={i} style={{
                                display: 'flex', gap: '1.5rem',
                                padding: '1.75rem 0',
                                borderBottom: i < PROCESS.length - 1 ? '1px solid var(--border)' : 'none',
                            }}>
                                <div style={{
                                    width: '2rem', height: '2rem',
                                    borderRadius: '50%',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', fontWeight: 800,
                                    fontFamily: 'var(--font-main)',
                                    flexShrink: 0,
                                }}>
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.375rem', fontFamily: 'var(--font-main)' }}>{step.title}</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.65, margin: 0, color: 'var(--text-muted)' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Transport highlight box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        <div style={{
                            background: 'var(--primary)',
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <div style={{ padding: '2.5rem 2.5rem 2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    <span style={{ color: 'var(--accent-light)' }}><Truck size={22} /></span>
                                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-main)' }}>
                                        Transport & Varebil
                                    </span>
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.375rem', marginBottom: '1rem', fontFamily: 'var(--font-main)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                                    Vi kender Færdselsstyrelsens krav — og leverer til fristen
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                    Vognmænd og transportvirksomheder har brug for erklæringer der er korrekte første gang. Vi har erfaring med varebilstilladelser, persontransport og godstilladelser — og behandler opgaven hurtigt.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2.5rem' }}>
                                    {[
                                        'Erklæring om egenkapitalopgørelse',
                                        'Hurtig sagsbehandling',
                                        'Kendskab til Færdselsstyrelsens krav',
                                        'Erfaring med alle transporttyper',
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                                            <ShieldCheck size={14} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                <Link to="/kontakt" className="btn" style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    width: '100%', justifyContent: 'center',
                                }}>
                                    Få en erklæring nu <ArrowRight size={15} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'white',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        padding: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem',
                        flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-main)' }}>
                            Har du brug for en anden type erklæring?
                        </h3>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                            Til banken, Erhvervsstyrelsen eller en samarbejdspartner — vi finder den rigtige løsning.
                        </p>
                    </div>
                    <Link to="/kontakt" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                        Kontakt os i dag <ArrowRight size={15} />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};

export default DeclarationsPage;
