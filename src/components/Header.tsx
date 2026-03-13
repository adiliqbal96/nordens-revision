import React, { useEffect, useState } from 'react';

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
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <div className="logo">
                    NORDENS<span style={{ color: 'var(--accent)' }}>REVISION</span>
                </div>
                <div className="nav-links">
                    <a href="#home">Hjem</a>
                    <a href="#services">Ydelser</a>
                    <a href="#about">Om os</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Kontakt</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
