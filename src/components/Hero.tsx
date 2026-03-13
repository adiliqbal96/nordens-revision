import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="glow" style={{ top: '10%', right: '10%' }}></div>
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <motion.span
                            style={{
                                color: 'var(--accent-secondary)',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Precision • Clarity • Growth
                        </motion.span>
                        <h1>Vi definerer fremtidens revision</h1>
                        <p>
                            Glem alt om kedelige regneark. Nordens Revision bringer digital innovation og personlig ekspertise sammen for at transformere din økonomiske rejse.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem' }}>
                            <motion.a
                                href="#contact"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start din rejse
                            </motion.a>
                            <motion.a
                                href="#services"
                                className="btn btn-glass"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Udforsk ydelser
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
