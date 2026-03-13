import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <span className="hero-badge">Revision & Rådgivning</span>
                    <h1>Vi skaber overblik over din økonomi</h1>
                    <p>
                        Hos Nordens Revision får du professionel rådgivning med fokus på gennemsigtighed.
                        Vi hjælper dig med at navigere i komplekse regnskaber, så du kan fokusere på din kerneforretning.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                        <a href="#contact" className="btn btn-primary">Kontakt os i dag</a>
                        <a href="#services" className="btn btn-outline">Se vores ydelser</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
