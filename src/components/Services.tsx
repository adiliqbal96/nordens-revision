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
        description: 'Præcis håndtering af din økonomi med fokus på dytital gennemsigtighed.',
        icon: <BarChart3 size={28} />
    },
    {
        title: 'Revision',
        description: 'Status og troværdighed gennem grundig og professionel gennemgang.',
        icon: <Search size={28} />
    },
    {
        title: 'Strategisk Rådgivning',
        description: 'Ekspertrådgivning der sikrer din virksomheds vækst og stabilitet.',
        icon: <Handshake size={28} />
    },
    {
        title: 'Årsregnskab',
        description: 'Komplette årsrapporter leveret med højeste standard for præcision.',
        icon: <FileText size={28} />
    },
    {
        title: 'Skattetrin',
        description: 'Optimering af skatteforhold og assistance ved myndighedsdialog.',
        icon: <Scale size={28} />
    },
    {
        title: 'Innovation & Startups',
        description: 'Specialiseret hjælp til nye virksomheder og vækstorienterede visioner.',
        icon: <Rocket size={28} />
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
};

const Services: React.FC = () => {
    return (
        <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="service-card glass"
                    variants={itemVariants}
                    whileHover={{
                        y: -10,
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'var(--accent-secondary)'
                    }}
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
