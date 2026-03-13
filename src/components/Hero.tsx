import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content animate">
                    <span className="hero-badge">Kompetent Rådgivning</span>
                    <h1>Vi har dit regnskab i fokus.</h1>
                    <p>
                        Hos Nordens Revision kan du være sikker på kompetent hjælp og rådgivning.
                        Vi fokuserer på tallene, så du kan fokusere på driften.
                    </p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Kom i gang</a>
                        <a href="#services" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Vores ydelser</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
