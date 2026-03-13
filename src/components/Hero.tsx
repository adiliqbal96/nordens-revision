import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="hero-logo-bg">
                <img src="/src/assets/logo.png" alt="" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="badge">Præcision • Kvalitet • Tryghed</span>
                        <h1>Fremtidens revision <br />er personlig.</h1>
                        <p>
                            Nordens Revision kombinerer høj faglig ekspertise med moderne digitale løsninger.
                            Vi sikrer, at dit regnskab flytter din virksomhed fremad.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                            <a href="#contact" className="btn btn-primary">Book rådgivning</a>
                            <a href="#services" className="btn btn-outline">Se vores ydelser</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
