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
        description: 'Effektiv og præcis håndtering af din daglige økonomi, bilag og momsindberetning.',
        icon: <BarChart3 size={24} />
    },
    {
        title: 'Revision',
        description: 'Lovpligtig og frivillig revision af årsregnskaber for at sikre høj grad af sikkerhed og troværdighed.',
        icon: <Search size={24} />
    },
    {
        title: 'Rådgivning',
        description: 'Strategisk sparring om skat, virksomhedsudvikling og økonomiske beslutninger.',
        icon: <Handshake size={24} />
    },
    {
        title: 'Årsregnskab',
        description: 'Opstilling og gennemgang af årsregnskaber i overensstemmelse med årsregnskabsloven.',
        icon: <FileText size={24} />
    },
    {
        title: 'Skattesager',
        description: 'Professionel assistance ved skattesager og dialog med myndighederne.',
        icon: <Scale size={24} />
    },
    {
        title: 'Startup Service',
        description: 'Hjælp til opstart af virksomhed, valg af selskabsform og budgetter.',
        icon: <Rocket size={24} />
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Services: React.FC = () => {
    return (
        <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="service-card"
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--accent)' }}
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
