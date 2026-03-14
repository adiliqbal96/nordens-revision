import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const navItems = ['Hjem', 'Ydelser', 'Om os'];

    const handleNavClick = (id: string, e: React.MouseEvent) => {
        if (id === 'home' || id === 'ydelser' || id === 'omos') {
            if (isHome) {
                const element = document.getElementById(id);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                }
            }
        }
    };

    return (
        <>
            <motion.nav
                className={scrolled ? 'scrolled' : ''}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 1000,
                    padding: scrolled ? '1rem 0' : '1.5rem 0',
                    background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(248, 250, 252, 0.6)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
                    transition: 'all 0.3s ease'
                }}
            >
                <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
                            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000', letterSpacing: '-0.03em' }}>
                                NORDENS<span style={{ color: 'var(--accent)' }}>REVISION</span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        {navItems.map((item) => {
                            const id = item === 'Hjem' ? 'home' : item.toLowerCase().replace(' ', '');
                            return (
                                <motion.a
                                    key={item}
                                    href={isHome ? `#${id}` : `/#${id}`}
                                    whileHover={{ color: 'var(--accent)' }}
                                    style={{ 
                                        textDecoration: 'none', 
                                        color: 'var(--text-main)', 
                                        fontWeight: 500,
                                        display: 'var(--desktop-only, block)' // Controlled by CSS or hidden below
                                    }}
                                    onClick={(e) => handleNavClick(id, e)}
                                    className="desktop-only"
                                >
                                    {item}
                                </motion.a>
                            );
                        })}
                        <Link to="/priser" className="desktop-only" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500 }}>Priser</Link>
                        <Link to="/erklaeringer" className="desktop-only" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500 }}>Erklæringer</Link>
                        
                        <Link to="/kontakt" className="btn btn-primary desktop-only" style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}>
                            Få et tilbud
                        </Link>

                        {/* Mobile Toggle */}
                        <button 
                            className="mobile-only" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                cursor: 'pointer', 
                                color: 'var(--primary)',
                                padding: '0.5rem',
                                display: 'none' // Controlled by CSS media queries
                            }}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100vh',
                            background: '#fff',
                            zIndex: 999,
                            padding: '6rem 2rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}
                    >
                        {navItems.map((item) => {
                            const id = item === 'Hjem' ? 'home' : item.toLowerCase().replace(' ', '');
                            return (
                                <a
                                    key={item}
                                    href={isHome ? `#${id}` : `/#${id}`}
                                    style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}
                                    onClick={(e) => handleNavClick(id, e)}
                                >
                                    {item}
                                </a>
                            );
                        })}
                        <Link to="/priser" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Priser</Link>
                        <Link to="/erklaeringer" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Erklæringer</Link>
                        <Link to="/kontakt" className="btn btn-primary" style={{ marginTop: 'auto', padding: '1.25rem' }} onClick={() => setIsMenuOpen(false)}>
                            Få et tilbud
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
