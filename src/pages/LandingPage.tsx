import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';

const REVIEWS = [
    {
        name: 'Nanakjot Singh',
        role: 'Google Anmeldelse',
        text: 'Jeg har fornøjelsen af at samarbejde med Nordens Revision, og jeg kan kun give mine varmeste anbefalinger. Det er et firma, der virkelig møder sine kunder i øjenhøjde og formår at skabe en tillidsfuld relation fra første kontakt.'
    },
    {
        name: 'Shervin M',
        role: 'Google Anmeldelse',
        text: 'Super god oplevelse hele vejen igennem. Jeg har kun positive ting at sige om Nordens Revision ApS. De er nemme at få fat i og yder professionel service. Kan helt klart anbefales.'
    },
    {
        name: 'J.I.M. Transport ApS',
        role: 'Transportvirksomhed',
        text: 'Som ejer af en mindre virksomhed har jeg haft fornøjelsen af at arbejde sammen med Nordens Revision ApS. Deres tilgang til regnskabsrådgivning er både professionel og personlig. Jeg føler mig i trygge hænder.'
    },
    {
        name: 'Tanja Andersen',
        role: 'Google Anmeldelse',
        text: 'En samarbejdspartner, der gør en reel forskel. Det har været en fornøjelse at samarbejde med Nordens Revision ApS. De investerer tid i at forstå min virksomheds behov og leverer altid høj kvalitet.'
    },
    {
        name: 'Umaar Malik',
        role: 'Google Anmeldelse',
        text: 'En revisor, der føles som en del af teamet! :-) Samarbejdet med Nordens Revision ApS har virkelig været en positiv oplevelse. De er ikke bare dygtige til tal, men giver rådgivning der giver mening i praksis.'
    },
    {
        name: 'Andrea Brandt',
        role: 'Google Anmeldelse',
        text: 'Jeg har haft en rigtig god oplevelse med Nordens Revision ApS. De var professionelle fra start til slut og meget grundige i deres arbejde. Kommunikation og rådgivning var klar og til tiden.'
    },
    {
        name: 'Memona Ali',
        role: 'Google Anmeldelse',
        text: 'Høj faglighed og personlig service. Nordens Revision ApS har været en fantastisk hjælp for min virksomhed. De tager sig tid til at forklare tingene på en måde, der er let at forstå. Kan varmt anbef anbefales.'
    },
    {
        name: 'Imtiaz Hussain',
        role: 'Lokal guide',
        text: 'Hos Nordens Revision ApS får man bare styr på tallene – man får også en samarbejdspartner, der tager det seriøst uden at være kedelig. Hurtige svar og altid hjælpsomme – jeg kan kun anbefale dem!'
    },
    {
        name: 'Hassan Rehman',
        role: 'Google Anmeldelse',
        text: 'Ekspertise og troværdighed i særklasse. Nordens Revision ApS skiller sig ud med deres dybe branchekendskab og professionelle certificeringer. Jeg har stor tillid til deres kompetencer.'
    },
    {
        name: 'Zaman Al-kabani',
        role: 'Google Anmeldelse',
        text: 'Dejligt at de altid er til rådighed og er yderst kompetente. Vi kunne ikke være mere tilfreds. Største anbefaling herfra 👍'
    },
    {
        name: 'Omar Laila',
        role: 'Google Anmeldelse',
        text: 'Tryghed og tillid fra første møde. Det kan være svært at finde en revisor, man virkelig har tillid til – men hos Nordens Revision ApS følte jeg mig tryg fra første møde. De tog sig tid til at forstå min situation.'
    },
    {
        name: 'Sabil Iqbal',
        role: 'Google Anmeldelse',
        text: 'Personlig rådgivning og tillid hele vejen. Nordens Revision ApS har været en uvurderlig støtte for mig og min virksomhed. Jeg kan varmt anbefale dem til alle. 5 STJERNER HERFRA!'
    },
    {
        name: 'Bytes Food',
        role: 'Erhvervskunde',
        text: 'Hurtige, professionelle og til at stole på. Nordens Revision ApS leverer altid som aftalt og er super nemme at arbejde med. De gør det komplekse enkelt. Et klart ja herfra!'
    },
    {
        name: 'zain Hussain',
        role: 'Google Anmeldelse',
        text: 'Effektivt, professionelt og altid hjælpsomt. Nordens Revision ApS leverer altid et professionelt stykke arbejde med fokus på effektivitet og kvalitet. De er lette at komme i kontakt med.'
    }
];

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
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
                    const end = value;
                    const duration = 2000;
                    const increment = end / (duration / 16);
                    
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                    setHasAnimated(true);
                }
            }}
        >
            <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.25rem' }}>
                {count}{suffix}
            </h4>
        </motion.div>
    );
};

const LandingPage: React.FC = () => {
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#/', '').replace('#', '');
            if (id) {
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    }, []);

    return (
        <main>
            <Hero />

            <section id="ydelser" className="services-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '1rem' }}>Professionelle ydelser</h2>
                        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.25rem' }}>
                            Specialiseret rådgivning skræddersyet til din virksomheds behov og vækstpotentiale.
                        </p>
                    </motion.div>
                    <Services />
                </div>
            </section>

            <section id="omos" style={{ backgroundColor: 'var(--bg-offset)', padding: '6rem 0 2rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="badge">Ekspertise & Tillid</span>
                            <h2 style={{ textAlign: 'left', marginBottom: '2rem', lineHeight: 1.1 }}>Din personlige partner midt i tallene</h2>
                            <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 500 }}>
                                Hos Nordens Revision forstår vi, at bag ethvert regnskab findes en passioneret erhvervsdrivende med store drømme. Vi er ikke bare din revisor – vi er din medspiller.
                            </p>
                            <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
                                Siden vores grundlæggelse har vi hjulpet hundreder af virksomheder med alt fra den daglige bogføring til kompleks skatterådgivning og strategisk planlægning. Vores tilgang er baseret på integritet, forståelse og et ønske om at skabe værdi for dig hver eneste dag.
                            </p>
                            <div style={{ display: 'flex', gap: '3rem', marginTop: '3.5rem' }}>
                                <div>
                                    <Counter value={100} suffix="+" />
                                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>Glade kunder</p>
                                </div>
                                <div style={{ width: '1px', backgroundColor: 'var(--border)' }}></div>
                                <div>
                                    <Counter value={15} suffix="+" />
                                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>Års erfaring</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            style={{ position: 'relative', cursor: 'pointer' }}
                        >
                            <div style={{ 
                                position: 'relative', 
                                borderRadius: '2.5rem', 
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <img 
                                    src="./src/assets/about_office.png" 
                                    alt="Nordens Revision Office"
                                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '3rem',
                                    left: '2rem',
                                    right: '2rem',
                                    padding: '2.5rem',
                                    background: 'rgba(255, 255, 255, 0.75)',
                                    backdropFilter: 'blur(30px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                                    borderRadius: '2rem',
                                    borderLeft: '8px solid var(--accent)',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    borderLeftWidth: '8px',
                                    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
                                    color: 'var(--primary)',
                                    transform: 'translateZ(0)'
                                }}>
                                    <p style={{ 
                                        fontWeight: 700, 
                                        fontSize: '1.35rem', 
                                        margin: 0, 
                                        lineHeight: 1.4,
                                        letterSpacing: '-0.02em',
                                        color: 'var(--primary)',
                                        fontStyle: 'italic'
                                    }}>
                                        "Professionalisme og personlig kontakt er vores varemærke."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="anmeldelser" style={{ padding: '6rem 0', backgroundColor: 'white', overflow: 'hidden' }}>
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>5.0</div>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={32} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>
                        </div>
                        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Fremragende på Google</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>
                            Vores kunder anerkender os for vores personlige tilgang og kompromisløse faglighed.
                        </p>
                    </motion.div>
                </div>

                {/* Reviews Marquee */}
                <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    overflow: 'hidden',
                    padding: '2rem 0'
                }}>
                    {/* Gradient Overlays */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '150px',
                        height: '100%',
                        background: 'linear-gradient(to right, white, transparent)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '150px',
                        height: '100%',
                        background: 'linear-gradient(to left, white, transparent)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}></div>

                    <motion.div 
                        style={{ display: 'flex', gap: '2.5rem', width: 'max-content', padding: '0 2rem' }}
                        animate={{ x: [0, -5880] }}
                        transition={{ 
                            duration: 60, 
                            repeat: Infinity, 
                            ease: "linear"
                        }}
                        whileHover={{ animationPlayState: 'paused' }}
                    >
                        {[...REVIEWS, ...REVIEWS].map((rev, i) => (
                            <div
                                key={i}
                                className="service-card"
                                style={{ 
                                    backgroundColor: 'var(--bg-offset)', 
                                    padding: '2.5rem', 
                                    width: '380px', 
                                    flexShrink: 0,
                                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '1.25rem'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.2rem', color: '#fbbf24' }}>
                                        {[...Array(5)].map((_, s) => (
                                            <Star key={s} size={16} fill="#fbbf24" color="#fbbf24" />
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600 }}>
                                        <ShieldCheck size={14} /> Verificeret
                                    </div>
                                </div>
                                <p style={{ fontSize: '1.05rem', marginBottom: '2rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                                    "{rev.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                                    <div style={{ 
                                        width: '40px', 
                                        height: '40px', 
                                        backgroundColor: 'white', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        color: 'var(--accent)',
                                        border: '1px solid var(--border)'
                                    }}>
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{rev.name}</h4>
                                        <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)' }}>{rev.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="container">
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <div style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '1rem', 
                            padding: '1rem 2rem',
                            backgroundColor: 'white',
                            borderRadius: '100px',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid var(--border)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Google Rating</span>
                            </div>
                            <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border)' }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontWeight: 700, color: 'var(--primary)' }}>5.0 / 5.0</span>
                                <div style={{ display: 'flex', color: '#fbbf24' }}>
                                    {[...Array(5)].map((_, i) => <span key={i} style={{ fontSize: '1rem' }}>★</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section" style={{ padding: '8rem 0', textAlign: 'center', backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ color: 'white', marginBottom: '2rem' }}>Klar til at optimere din økonomi?</h2>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                            Tag kontakt i dag og lad os finde den bedste løsning for din virksomhed.
                        </p>
                        <Link to="/kontakt" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'white', padding: '1.25rem 3.5rem', textDecoration: 'none', display: 'inline-block' }}>
                            Kontakt os nu
                        </Link>
                        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                            Nordens Revision ApS • CVR: 43754610
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;
