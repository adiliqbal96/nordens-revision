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
        description: 'Effektiv og præcis bogføring, der danner fundamentet for din virksomheds succes.',
        icon: <BarChart3 size={28} />
    },
    {
        title: 'Revision',
        description: 'Pålidelig revision, der skaber tryghed og gennemsigtighed for alle interessenter.',
        icon: <Search size={28} />
    },
    {
        title: 'Rådgivning',
        description: 'Proaktiv rådgivning om skat, økonomi og virksomhedens langsigtede strategi.',
        icon: <Handshake size={28} />
    },
    {
        title: 'Årsregnskab',
        description: 'Præcis opstilling af årsrapporter i overensstemmelse med gældende lovgivning.',
        icon: <FileText size={28} />
    },
    {
        title: 'Skattesager',
        description: 'Professionel assistance ved skattemæssige udfordringer og dialog med myndigheder.',
        icon: <Scale size={28} />
    },
    {
        title: 'Startups',
        description: 'Specialiseret hjælp til iværksættere, fra forretningsplaner til selskabsdannelse.',
        icon: <Rocket size={28} />
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'circOut' } }
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
