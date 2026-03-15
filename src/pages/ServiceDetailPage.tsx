import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
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

    return (
        <main style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
            {/* Hero Section - Premium Look */}
            <section style={{ 
                backgroundColor: 'var(--bg-offset)', 
                padding: '7rem 0 4rem', 
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border)'
            }}>
                {/* Decorative background element */}
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
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button 
                            onClick={() => navigate(-1)} 
                            className="btn-back"
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
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ArrowLeft size={18} /> Tilbage til oversigt
                        </button>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ 
                                backgroundColor: 'white', 
                                width: '56px', 
                                height: '56px', 
                                borderRadius: '1rem', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                color: 'var(--accent)',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid var(--border)'
                            }}>
                                {service.icon}
                            </div>
                            <span className="badge" style={{ margin: 0, padding: '0.4rem 0.8rem', background: 'rgba(13, 148, 136, 0.1)', color: 'var(--accent)', fontSize: '0.8rem' }}>
                                {service.title}
                            </span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                            {service.title}
                        </h1>
                        <p style={{ 
                            fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', 
                            maxWidth: '750px', 
                            lineHeight: 1.6, 
                            color: 'var(--text-main)', 
                            fontWeight: 400,
                            opacity: 0.8
                        }}>
                            {service.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '8rem', alignItems: 'start' }}>
                        
                        {/* Left Column: Description & Process */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div style={{ marginBottom: '5rem' }}>
                                <div style={{ 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.2em', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 700, 
                                    color: 'var(--accent)',
                                    marginBottom: '1rem'
                                }}>Om ydelsen</div>
                                <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.5rem' }}>Professionel håndtering af {service.title.toLowerCase()}</h2>
                                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-main)', opacity: 0.9 }}>
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div style={{ padding: '3rem', backgroundColor: 'var(--bg-offset)', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                                <h3 style={{ marginBottom: '3rem', fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    Arbejdsprocessen
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                    {service.process.map((step, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                                            <div style={{ 
                                                flexShrink: 0,
                                                width: '2.5rem', 
                                                height: '2.5rem', 
                                                background: 'var(--primary)', 
                                                borderRadius: '12px', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                fontSize: '0.9rem',
                                                fontWeight: 700,
                                                color: 'white'
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{step.title}</h4>
                                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Benefits & Floating CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div style={{ position: 'sticky', top: '8rem' }}>
                                <div style={{ 
                                    backgroundColor: 'var(--primary)', 
                                    borderRadius: '2.5rem', 
                                    padding: '4rem 3rem',
                                    color: 'white',
                                    boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.3)',
                                    marginBottom: '3rem'
                                }}>
                                    <h3 style={{ color: 'white', marginBottom: '2.5rem', fontSize: '1.75rem' }}>Dine fordele</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                        {service.benefits.map((benefit, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                                <div style={{ 
                                                    width: '24px', 
                                                    height: '24px', 
                                                    backgroundColor: 'rgba(13, 148, 136, 0.2)', 
                                                    borderRadius: '6px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    marginTop: '2px'
                                                }}>
                                                    <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '1.1rem', lineHeight: 1.5 }}>
                                                    {benefit}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ 
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    padding: '3rem',
                                    borderRadius: '2.5rem',
                                    border: '1px solid var(--border)',
                                    textAlign: 'center'
                                }}>
                                    <h4 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Klar til at tage næste skridt?</h4>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                                        Få en uforpligtende samtale om hvordan vi kan hjælpe din virksomhed med {service.title.toLowerCase()}.
                                    </p>
                                    <Link 
                                        to="/kontakt" 
                                        className="btn btn-primary" 
                                        style={{ 
                                            width: '100%', 
                                            padding: '1.25rem', 
                                            justifyContent: 'center', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '0.75rem',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Kontakt os i dag <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-offset)', borderTop: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0' }}>
                        Nordens Revision ApS • Professionel rådgivning siden 2009
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetailPage;
