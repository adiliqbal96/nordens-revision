import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const MagneticButton: React.FC<{ children: React.ReactNode; className: string; to: string }> = ({ children, className, to }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove(e: React.MouseEvent) {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.4);
        y.set((e.clientY - centerY) * 0.4);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY, display: 'inline-block' }}
        >
            <Link
                to={to}
                className={className}
                style={{ textDecoration: 'none' }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {children}
                </motion.div>
            </Link>
        </motion.div>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="hero-logo-bg">
                <img src="/src/assets/logo.png" alt="" style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply', opacity: 0.05 }} />
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Præcision • Kvalitet • Tryghed
                        </motion.span>
                        <h1 style={{ lineHeight: 1.05 }}>Fremtidens revision <br />er personlig.</h1>
                        <p style={{ maxWidth: '600px', fontSize: '1.25rem' }}>
                            Nordens Revision kombinerer høj faglig ekspertise med moderne digitale løsninger.
                            Vi sikrer, at dit regnskab flytter din virksomhed fremad.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem' }}>
                            <MagneticButton to="/kontakt" className="btn btn-primary">Book rådgivning</MagneticButton>
                            <MagneticButton to="/#ydelser" className="btn btn-outline">Se vores ydelser</MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
