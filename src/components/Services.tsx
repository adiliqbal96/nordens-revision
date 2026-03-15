import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    BarChart3,
    Search,
    Handshake,
    FileText,
    Truck,
    Rocket,
    Calculator,
    ArrowRightLeft
} from 'lucide-react';

const services = [
    {
        slug: 'bogfoering',
        title: 'Bogføring',
        description: 'Ved at overlade dit bogholderi til Nordens Revision, kan du fokusere din tid og energi på din forretning og det du er bedst til. Vi hjælper med at fjerne hovedpinen i bogholderiet.',
        icon: <BarChart3 size={28} />
    },
    {
        slug: 'loenadministration',
        title: 'Lønadministration',
        description: 'Lønninger er tidskrævende. Det er også en af de mest forretningskritiske funktioner, der skal køre problemfrit, så du, dine medarbejdere og dine kunder alle er glade.',
        icon: <Calculator size={28} />
    },
    {
        slug: 'stiftelse',
        title: 'Stiftelse',
        description: 'Hvis du overvejer at stifte en virksomhed eller lukke en virksomhed, så er der nogle forskellige ting du skal tage stilling til. Nordens Revision kan rådgive dig til den bedste løsning.',
        icon: <Rocket size={28} />
    },
    {
        slug: 'omdannelser',
        title: 'Omdannelser',
        description: 'Hvis du går med overvejelser om at omdanne din virksomhed, er der nogle forskellige ting du skal tage stilling til. Du bør derfor altid rådføre dig med en revisor.',
        icon: <ArrowRightLeft size={28} />
    },
    {
        slug: 'raadgivning',
        title: 'Rådgivning',
        description: 'Vi kan godt lide at have et tæt samarbejde med vores kunder og hjælpe dem på de måder, de har brug for - både mht. målsætninger og de udfordringer de møder.',
        icon: <Handshake size={28} />
    },
    {
        slug: 'regnskaber',
        title: 'Regnskaber',
        description: 'Når året er omme, skal der udarbejdes et årsregnskab og det kan være lidt af en opgave. Vi hjælper små og mellemstore virksomheder i alle brancher med regnskaber.',
        icon: <FileText size={28} />
    },
    {
        slug: 'revision',
        title: 'Revision',
        description: 'Pålidelig revision, der skaber tryghed og gennemsigtighed for alle interessenter. Vi sikrer at dit regnskab overholder alle gældende regler.',
        icon: <Search size={28} />
    },
    {
        slug: 'transportservice',
        title: 'Transportservice',
        description: 'Specialiseret assistance ved revisorerklæring til persontransport og varebil (Færdselsstyrelsen). Vi sikrer hurtig og korrekt sagsbehandling.',
        icon: <Truck size={28} />
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const Services: React.FC = () => {
    return (
        <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="service-card"
                    variants={itemVariants}
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '100%',
                        padding: '2.5rem'
                    }}
                    whileHover={{
                        y: -10,
                        scale: 1.02,
                        boxShadow: '0 20px 40px -20px rgba(13, 148, 136, 0.2)',
                        borderColor: 'var(--accent)'
                    }}
                >
                    <div className="service-icon" style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                        {service.description}
                    </p>
                    <Link 
                        to={`/ydelser/${service.slug}`} 
                        className="btn btn-primary" 
                        style={{ 
                            padding: '0.75rem 1.5rem', 
                            fontSize: '0.9rem', 
                            width: 'fit-content',
                            textDecoration: 'none'
                        }}
                    >
                        Læs mere
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Services;
