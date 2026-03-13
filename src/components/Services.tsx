import React from 'react';

const services = [
    {
        title: 'Bogføring',
        description: 'Vi håndterer din daglige bogføring, så du altid har et opdateret overblik over din virksomheds økonomi.',
        icon: '📊'
    },
    {
        title: 'Rådgivning',
        description: 'Få kompetent rådgivning om skat, moms og virksomhedsstruktur fra erfarne revisorer.',
        icon: '💡'
    },
    {
        title: 'Årsregnskab',
        description: 'Vi udarbejder dit årsregnskab og sikrer, at alt overholder gældende lovgivning og tidsfrister.',
        icon: '🧾'
    }
];

const Services: React.FC = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="animate">Vores Ydelser</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Vi tilbyder en bred vifte af ydelser skræddersyet til din virksomheds behov.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass animate" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
