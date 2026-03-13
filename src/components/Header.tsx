import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={scrolled ? 'scrolled' : ''}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-container">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.02 }}
                >
                    NORDENS<span>REVISION</span>
                </motion.div>
                <div className="nav-links">
                    {['Hjem', 'Ydelser', 'Om os'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item === 'Hjem' ? 'home' : item.toLowerCase().replace(' ', '')}`}
                            whileHover={{ color: 'var(--accent)' }}
                            style={{ position: 'relative' }}
                        >
                            {item}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        style={{ padding: '0.5rem 1.5rem', marginLeft: '1rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Få et tilbud
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Header;
