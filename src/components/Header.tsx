import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const isHome = location.pathname === '/';

    const navItems = [
        { label: 'Hjem', id: 'home', path: '/' },
        { label: 'Ydelser', id: 'ydelser', path: '/#ydelser' },
        { label: 'Om os', id: 'omos', path: '/#omos' },
        { label: 'Priser', id: null, path: '/priser' },
        { label: 'Erklæringer', id: null, path: '/erklaeringer' },
    ];

    const isActivePath = (path: string) => {
        // Only highlight standalone pages, not home-page scroll anchors
        if (path === '/' || path.startsWith('/#')) return false;
        return location.pathname === path;
    };

    const handleNavClick = (id: string | null, e: React.MouseEvent) => {
        if (id && isHome) {
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        }
    };

    const linkStyle = (path: string): React.CSSProperties => ({
        textDecoration: 'none',
        color: isActivePath(path) ? 'var(--accent)' : 'var(--text-main)',
        fontWeight: isActivePath(path) ? 600 : 500,
        fontSize: '0.9rem',
        fontFamily: 'var(--font-body)',
        transition: 'color 0.2s ease',
        cursor: 'pointer',
    });

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
                    padding: scrolled ? '0.75rem 0' : '1.125rem 0',
                    background: scrolled
                        ? 'rgba(250, 248, 245, 0.97)'
                        : 'rgba(250, 248, 245, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                    transition: 'all 0.25s ease',
                }}
            >
                <div className="container nav-container">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <div style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.035em', fontFamily: 'var(--font-main)' }}>
                            NORDENS<span style={{ color: 'var(--accent)' }}>REVISION</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="nav-links desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.875rem' }}>
                        {navItems.map(item => (
                            item.id && isHome ? (
                                <a
                                    key={item.label}
                                    href={`#${item.id}`}
                                    style={linkStyle(item.path)}
                                    onClick={(e) => handleNavClick(item.id, e)}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = isActivePath(item.path) ? 'var(--accent)' : 'var(--text-main)')}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    style={linkStyle(item.path)}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = isActivePath(item.path) ? 'var(--accent)' : 'var(--text-main)')}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                        <Link
                            to="/kontakt"
                            className="btn btn-primary"
                            style={{ padding: '0.575rem 1.25rem', fontSize: '0.875rem' }}
                        >
                            Få et tilbud
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="mobile-only"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--primary)',
                            padding: '0.375rem',
                            display: 'none',
                            lineHeight: 0,
                        }}
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100dvh',
                            background: 'var(--bg-base)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '5.5rem 2rem 2.5rem',
                        }}
                    >
                        {/* Close button inside overlay */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '1.25rem',
                                right: '1.25rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-muted)',
                                padding: '0.375rem',
                                lineHeight: 0,
                            }}
                        >
                            <X size={26} />
                        </button>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            {navItems.map((item) => (
                                <div key={item.label} style={{ borderBottom: '1px solid var(--border)' }}>
                                    {item.id && isHome ? (
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => handleNavClick(item.id, e)}
                                            style={{
                                                display: 'block',
                                                padding: '1.125rem 0',
                                                fontSize: '1.25rem',
                                                fontWeight: 600,
                                                fontFamily: 'var(--font-main)',
                                                color: 'var(--primary)',
                                                textDecoration: 'none',
                                                letterSpacing: '-0.02em',
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            style={{
                                                display: 'block',
                                                padding: '1.125rem 0',
                                                fontSize: '1.25rem',
                                                fontWeight: 600,
                                                fontFamily: 'var(--font-main)',
                                                color: isActivePath(item.path) ? 'var(--accent)' : 'var(--primary)',
                                                textDecoration: 'none',
                                                letterSpacing: '-0.02em',
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/kontakt"
                            className="btn btn-primary"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ marginTop: 'auto', padding: '1.125rem', justifyContent: 'center', display: 'flex' }}
                        >
                            Få et tilbud
                        </Link>

                        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                            Nordens Revision ApS · CVR 43754610
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
