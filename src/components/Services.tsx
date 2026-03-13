import React from 'react';

const services = [
    {
        title: 'Bogføring',
        description: 'Effektiv og præcis håndtering af din daglige økonomi, bilag og momsindberetning.',
        icon: '📊'
    },
    {
        title: 'Revision',
        description: 'Lovpligtig og frivillig revision af årsregnskaber for at sikre høj grad af sikkerhed og troværdighed.',
        icon: '🔍'
    },
    {
        title: 'Rådgivning',
        description: 'Strategisk sparring om skat, virksomhedsudvikling og økonomiske beslutninger.',
        icon: '🤝'
    },
    {
        title: 'Årsregnskab',
        description: 'Opstilling og gennemgang af årsregnskaber i overensstemmelse med årsregnskabsloven.',
        icon: '🧾'
    },
    {
        title: 'Skattesager',
        description: 'Professionel assistance ved skattesager og dialog med myndighederne.',
        icon: '⚖️'
    },
    {
        title: 'Startup Service',
        description: 'Hjælp til opstart af virksomhed, valg af selskabsform og budgetter.',
        icon: '🚀'
    }
];

const Services: React.FC = () => {
    return (
        <div className="services-grid">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;
