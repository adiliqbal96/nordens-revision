import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    BarChart3,
    Search,
    Handshake,
    FileText,
    Scale,
    Rocket
} from 'lucide-react';

const services = [
    {
        title: 'Bogføring',
        description: 'Vi varetager din bogføring med præcision, så du altid har et sikkert økonomisk fundament.',
        icon: <BarChart3 size={32} strokeWidth={1.5} />
    },
    {
        title: 'Revision',
        description: 'Uvildig og grundig revision, der skaber gennemsigtighed for investorer og myndigheder.',
        icon: <Search size={32} strokeWidth={1.5} />
    },
    {
        title: 'Rådgivning',
        description: 'Strategisk sparring og rådgivning om optimering af din virksomheds økonomiske struktur.',
        icon: <Handshake size={32} strokeWidth={1.5} />
    },
    {
        title: 'Årsregnskab',
        description: 'Kvalitetssikrede årsregnskaber leveret rettidigt og efter gældende lovgivning.',
        icon: <FileText size={32} strokeWidth={1.5} />
    },
    {
        title: 'Skattesager',
        description: 'Specialiseret bistand ved skatteforhold og dialog med relevante instanser.',
        icon: <Scale size={32} strokeWidth={1.5} />
    },
    {
        title: 'Vækst & Startups',
        description: 'Vi hjælper nye virksomheder sikkert fra start med budgetter og selskabsstifter.',
        icon: <Rocket size={32} strokeWidth={1.5} />
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } }
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
                    className="service-item"
                    variants={itemVariants}
                >
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Services;
