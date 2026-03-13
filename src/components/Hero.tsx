import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-line"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        Lederskab gennem <br />finansiel klarhed.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hos Nordens Revision forener vi traditionel revision med moderne finansiel indsigt.
                        Vi er din partner i at sikre vækst og stabilitet gennem gennemsigtighed.
                    </motion.p>
                    <motion.div
                        style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#contact" className="btn btn-primary">Book rådgivning</a>
                        <a href="#services" className="btn btn-outline">Vores ydelser</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
