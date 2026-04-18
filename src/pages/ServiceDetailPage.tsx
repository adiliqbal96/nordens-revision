import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { servicesData } from '../constants/servicesData';

const ServiceDetailPage: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const navigate = useNavigate();
    const service = serviceId ? servicesData[serviceId] : null;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [serviceId]);

    if (!service) {
        return (
            <div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '60vh' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ydelsen blev ikke fundet</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Beklager, vi kunne ikke finde den side du leder efter.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '3rem', padding: '1rem 2.5rem' }}>Gå til forsiden</Link>
            </div>
        );
    }

    const relatedServices = service.relatedIds
        .map(id => servicesData[id])
        .filter(Boolean)
        .slice(0, 3);

    return (
        <main style={{ backgroundColor: '#fff', overflow: 'hidden' }}>

            {/* Hero */}
            <section style={{
                backgroundColor: 'var(--bg-offset)',
                padding: '7rem 0 4rem',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-5%',
                    right: '-2%',
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={() => navigate(-1)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'white',
                                border: '1px solid var(--border)',
                                color: 'var(--text-main)',
                                fontWeight: 500,
                                cursor: 'pointer',
                                marginBottom: '2rem',
                                padding: '0.6rem 1.25rem',
                                borderRadius: '100px',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.2s ease',
                                fontFamily: 'var(--font-main)',
                                fontSize: '0.875rem',
                            }}
                        >
                            <ArrowLeft size={16} /> Tilbage
                        </button>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                            <div style={{
                                backgroundColor: 'white',
                                width: '52px',
                                height: '52px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent)',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid var(--border)',
                            }}>
                                {service.icon}
                            </div>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.35rem 0.8rem',
                                background: 'rgba(26, 112, 101, 0.1)',
                                color: 'var(--accent)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-main)',
                            }}>
                                {service.title}
                            </span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '760px' }}>
                            {service.heroTitle}
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                            maxWidth: '660px',
                            lineHeight: 1.7,
                            color: 'var(--text-body)',
                            fontWeight: 400,
                        }}>
                            {service.intro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>

                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            {/* Full description */}
                            <div style={{ marginBottom: '4rem' }}>
                                <div style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-main)' }}>
                                    Om ydelsen
                                </div>
                                <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-body)' }}>
                                    {service.fullDescription}
                                </p>
                            </div>

                            {/* Fits you if */}
                            <div style={{ marginBottom: '4rem' }}>
                                <h2 style={{ fontSize: '1.375rem', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                    Denne ydelse passer til dig, hvis&hellip;
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                    {service.fitsYouIf.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                                            <div style={{
                                                flexShrink: 0,
                                                width: 22,
                                                height: 22,
                                                borderRadius: '50%',
                                                background: 'rgba(26, 112, 101, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '1px',
                                            }}>
                                                <CheckCircle2 size={13} style={{ color: 'var(--accent)' }} />
                                            </div>
                                            <span style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deliverables */}
                            <div style={{ marginBottom: '4rem', padding: '2.5rem', background: 'var(--bg-offset)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <div style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-main)' }}>
                                    Det får du
                                </div>
                                <h3 style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                    Konkrete leverancer
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {service.deliverables.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                                            <span style={{
                                                flexShrink: 0,
                                                fontWeight: 700,
                                                color: 'var(--accent)',
                                                fontSize: '0.9rem',
                                                marginTop: '2px',
                                                fontFamily: 'var(--font-main)',
                                            }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <span style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Process */}
                            <div style={{ padding: '2.5rem', backgroundColor: 'var(--primary)', borderRadius: '12px' }}>
                                <div style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', marginBottom: '1rem', fontFamily: 'var(--font-main)' }}>
                                    Sådan arbejder vi
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.25rem', letterSpacing: '-0.02em', marginBottom: '2rem', lineHeight: 1.2 }}>
                                    Processen trin for trin
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {service.process.map((step, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1.25rem' }}>
                                            <div style={{
                                                flexShrink: 0,
                                                width: '2rem',
                                                height: '2rem',
                                                background: 'rgba(255,255,255,0.1)',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: 700,
                                                color: 'rgba(255,255,255,0.7)',
                                                fontFamily: 'var(--font-main)',
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9375rem', marginBottom: '0.35rem', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em' }}>
                                                    {step.title}
                                                </div>
                                                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column — Sticky */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div style={{ position: 'sticky', top: '7rem' }}>
                                {/* Benefits card */}
                                <div style={{
                                    backgroundColor: 'var(--primary)',
                                    borderRadius: '12px',
                                    padding: '2.5rem',
                                    color: 'white',
                                    boxShadow: '0 20px 50px -10px rgba(13, 28, 46, 0.35)',
                                    marginBottom: '1.5rem',
                                }}>
                                    <div style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', marginBottom: '1rem', fontFamily: 'var(--font-main)' }}>
                                        Dine fordele
                                    </div>
                                    <h3 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                                        Hvad du opnår
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                        {service.benefits.map((benefit, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{
                                                    width: 22,
                                                    height: 22,
                                                    backgroundColor: 'rgba(26, 112, 101, 0.25)',
                                                    borderRadius: '6px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    marginTop: '1px',
                                                }}>
                                                    <CheckCircle2 size={13} style={{ color: 'var(--accent-light)' }} />
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.82)', margin: 0, fontSize: '0.9375rem', lineHeight: 1.55 }}>
                                                    {benefit}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA box */}
                                <div style={{
                                    padding: '2.25rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border)',
                                    background: 'white',
                                    textAlign: 'center',
                                }}>
                                    <h4 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                                        {service.ctaText}
                                    </h4>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        Kontakt os for en uforpligtende samtale. Vi svarer typisk inden for én hverdag.
                                    </p>
                                    <Link
                                        to="/kontakt"
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            padding: '0.9rem 1.5rem',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Kontakt os <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-offset)' }}>
                    <div className="container">
                        <div style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.75rem', fontFamily: 'var(--font-main)' }}>
                            Relaterede ydelser
                        </div>
                        <h2 style={{ fontSize: '1.625rem', letterSpacing: '-0.03em', marginBottom: '2.5rem', lineHeight: 1.15 }}>
                            Det kombineres ofte med
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', alignItems: 'stretch' }}>
                            {relatedServices.map((rel, i) => (
                                <motion.div
                                    key={rel.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    style={{ height: '100%' }}
                                >
                                    <Link
                                        to={`/ydelser/${rel.id}`}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            padding: '1.75rem',
                                            background: 'white',
                                            border: '1px solid var(--border)',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(13,28,46,0.1)';
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                            (e.currentTarget as HTMLElement).style.transform = 'none';
                                        }}
                                    >
                                        <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{rel.icon}</div>
                                        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-main)', letterSpacing: '-0.01em' }}>
                                            {rel.title}
                                        </div>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 1.25rem', flexGrow: 1 }}>
                                            {rel.shortDescription}
                                        </p>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent)', fontFamily: 'var(--font-main)', marginTop: 'auto' }}>
                                            Læs mere <ArrowRight size={12} />
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Trust footer */}
            <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
                        Nordens Revision ApS &bull; CVR 43754610 &bull; Professionel rådgivning siden 2023
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetailPage;
