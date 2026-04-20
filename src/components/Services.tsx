import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart3, Calculator, Rocket, ArrowRightLeft, Handshake, FileText, Search, Truck } from 'lucide-react';

const SERVICES = [
    {
        id: 'bogfoering',
        title: 'Bogføring',
        desc: 'Præcis bogføring med styr på bilag, moms og indberetninger. Du får overblik i hverdagen og mere tid til din drift.',
        icon: <BarChart3 size={22} />,
        featured: true,
    },
    {
        id: 'loenadministration',
        title: 'Lønadministration',
        desc: 'Vi håndterer løn, A-skat, AM-bidrag, feriepenge og pension, så dine medarbejdere får korrekt løn til tiden.',
        icon: <Calculator size={22} />,
    },
    {
        id: 'regnskaber',
        title: 'Årsregnskaber',
        desc: 'Årsrapporter udarbejdet korrekt og rettidigt, så banker, myndigheder og samarbejdspartnere får et professionelt billede af din virksomhed.',
        icon: <FileText size={22} />,
    },
    {
        id: 'stiftelse',
        title: 'Stiftelse',
        desc: 'Vi hjælper med selskabsform, CVR-registrering og de praktiske valg, når du starter virksomhed eller ApS.',
        icon: <Rocket size={22} />,
    },
    {
        id: 'omdannelser',
        title: 'Omdannelser',
        desc: 'Skattefri virksomhedsomdannelse fra enkeltmandsvirksomhed til ApS med fokus på struktur, skat og fremtidig drift.',
        icon: <ArrowRightLeft size={22} />,
    },
    {
        id: 'raadgivning',
        title: 'Rådgivning',
        desc: 'Sparring om skat, budgetter, selskabsstruktur og de økonomiske beslutninger, der påvirker dig som selvstændig.',
        icon: <Handshake size={22} />,
        featured: true,
    },
    {
        id: 'revision',
        title: 'Revision',
        desc: 'Revision og revisorerklæringer, der skaber tillid hos banker, myndigheder, partnere og investorer.',
        icon: <Search size={22} />,
    },
    {
        id: 'transportservice',
        title: 'Transporterklæringer',
        desc: 'Specialiserede revisorerklæringer til Færdselsstyrelsen for varebil, persontransport og gods. Vi kender kravene og leverer hurtigt.',
        icon: <Truck size={22} />,
        transport: true,
    },
];

const gridPosition: Record<string, React.CSSProperties> = {
    bogfoering:         { gridColumn: '1 / 3', gridRow: '1' },
    loenadministration: { gridColumn: '3',     gridRow: '1' },
    regnskaber:         { gridColumn: '1',     gridRow: '2' },
    stiftelse:          { gridColumn: '2',     gridRow: '2' },
    omdannelser:        { gridColumn: '3',     gridRow: '2' },
    raadgivning:        { gridColumn: '1',     gridRow: '3' },
    revision:           { gridColumn: '2 / 4', gridRow: '3' },
    transportservice:   { gridColumn: '1 / 4', gridRow: '4' },
};

const Services: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="services-swipe-wrapper">
        <div className="services-editorial-grid">
            {SERVICES.map((svc, i) => {
                const isTransport = !!svc.transport;
                const isFeatured = !!svc.featured;
                const href = isTransport ? '/erklaeringer' : `/ydelser/${svc.id}`;

                return (
                    <motion.div
                        key={svc.id}
                        className={`svc-card${isFeatured ? ' featured' : ''}${isTransport ? ' transport' : ''}`}
                        style={{ ...gridPosition[svc.id], cursor: 'pointer' }}
                        onClick={() => navigate(href)}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                    >
                        {isTransport ? (
                            <>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <span style={{ color: 'var(--accent-light)' }}><Truck size={18} /></span>
                                        <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-main)' }}>
                                            Specialiseret ydelse
                                        </span>
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '1.375rem', marginBottom: '0.625rem', fontFamily: 'var(--font-main)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                                        Transporterklæringer
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', maxWidth: '560px', lineHeight: 1.65, margin: 0 }}>
                                        {svc.desc}
                                    </p>
                                </div>
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    background: 'rgba(255,255,255,0.08)',
                                    color: 'rgba(255,255,255,0.85)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '4px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-main)',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                }}>
                                    Læs mere <ArrowRight size={14} />
                                </span>
                            </>
                        ) : (
                            <>
                                <div className="svc-number">0{i + 1}</div>
                                <div className="svc-icon">{svc.icon}</div>
                                <div className="svc-title">{svc.title}</div>
                                <p className="svc-desc">{svc.desc}</p>
                                <span className="svc-link">
                                    Læs mere <ArrowRight size={13} className="svc-arrow" />
                                </span>
                            </>
                        )}
                    </motion.div>
                );
            })}
        </div>
        <p className="services-swipe-hint">Swipe for at se alle ydelser →</p>
        </div>
    );
};

export default Services;
