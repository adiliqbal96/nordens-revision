import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

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
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <div className="logo" style={{ fontSize: '1.65rem', letterSpacing: '-0.03em' }}>NORDENS<span>REVISION</span></div>
                    </Link>
                </motion.div>
                <div className="nav-links">
                    {['Hjem', 'Ydelser', 'Om os'].map((item) => {
                        const id = item === 'Hjem' ? 'home' : item.toLowerCase().replace(' ', '');
                        return (
                            <motion.a
                                key={item}
                                href={isHome ? `#${id}` : `/#${id}`}
                                whileHover={{ color: 'var(--accent)' }}
                                style={{ position: 'relative' }}
                                onClick={(e) => {
                                    if (id === 'home') {
                                        if (isHome) {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }
                                }}
                            >
                                {item}
                            </motion.a>
                        );
                    })}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/kontakt"
                            className="btn btn-primary"
                            style={{
                                padding: '0.6rem 1.5rem',
                                marginLeft: '1rem',
                                backgroundColor: 'var(--primary)',
                                color: '#ffffff',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}
                        >
                            Få et tilbud
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Header;
