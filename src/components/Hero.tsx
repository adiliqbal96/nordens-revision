import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const HeroButton: React.FC<{ children: React.ReactNode; className: string; to: string; onClick?: (e: React.MouseEvent) => void }> = ({ children, className, to, onClick }) => {
    return (
        <Link
            to={to}
            className={className}
            style={{ 
                textDecoration: 'none', 
                userSelect: 'none'
            }}
            onClick={onClick}
            draggable="false"
        >
            <motion.div
                whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px -10px rgba(13, 148, 136, 0.3)',
                    translateY: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}
            >
                {children}
            </motion.div>
        </Link>
    );
};

const Hero: React.FC = () => {
    const handleScrollToYdelser = (e: React.MouseEvent) => {
        const element = document.getElementById('ydelser');
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="hero-logo-bg" style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '120%',
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none'
            }}>
                <img 
                    src={logo} 
                    alt="" 
                    style={{ 
                        width: '100%', 
                        height: 'auto', 
                        opacity: 0.08,
                        filter: 'grayscale(100%) brightness(1.2)',
                    }} 
                />
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Præcision • Kvalitet • Tryghed
                        </motion.span>
                        <h1 style={{ lineHeight: 1.05 }}>Din personlige <br />økonomiske rådgiver.</h1>
                        <p style={{ maxWidth: '600px', fontSize: '1.25rem' }}>
                            Nordens Revision kombinerer høj faglig ekspertise med en masse års erfaring.
                            Vi sikrer, at dit regnskab flytter din virksomhed fremad.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem' }}>
                            <HeroButton to="/kontakt" className="btn btn-primary">Book rådgivning</HeroButton>
                            <HeroButton 
                                to="/#ydelser" 
                                className="btn btn-outline"
                                onClick={handleScrollToYdelser}
                            >
                                Se vores ydelser
                            </HeroButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
