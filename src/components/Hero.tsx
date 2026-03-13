import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Revision & Rådgivning
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Vi skaber overblik over din økonomi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Hos Nordens Revision får du professionel rådgivning med fokus på gennemsigtighed.
                        Vi hjælper dig med at navigere i komplekse regnskaber, så du kan fokusere på din kerneforretning.
                    </motion.p>
                    <motion.div
                        style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">Kontakt os i dag</a>
                        <a href="#services" className="btn btn-outline">Se vores ydelser</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
